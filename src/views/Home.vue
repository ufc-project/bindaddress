<template>
  <div class="home">
    <div style="margin-top: 50px"></div>
    <div>
      <button
        :class="`a-btn ${isActiveLocale('en')?'active':''}`"
        style="width: 80px;"
        @click="changeLocale('en')"
      >English</button>
      <button
        :class="`a-btn ${isActiveLocale('cn')?'active':''}`"
        style="width: 80px;"
        @click="changeLocale('cn')"
      >中文</button>
    </div>
    <div style="margin-top: 20px"></div>
    <div class="alert alert-primary" role="alert">
      <p>{{$t('home.register_mainnet_address')}}. {{$t('home.bind_eth_address_to_prefix')}} {{mainChainName}} {{$t('home.chain_address_postfix')}}</p>
      <p>{{$t('home.contract')}}: {{contractAddress}}</p>
      <p>{{$t('home.current_account')}}: {{currentUserAddress}}</p>
    </div>
    <div>
      <form>
        <div class="form-group">
          <label
            for="exampleFormControlInput1"
          >{{mainChainName}} {{$t('home.chain_address_postfix')}}</label>
          <input type="text" class="form-control" v-model="form.toBindAddress" placeholder />
        </div>
        <div class="form-group">
          <label
            for="exampleFormControlSelect1"
          >{{$t('home.binded')}} {{mainChainName}} {{$t('home.chain_address_postfix')}}</label>
          <p class="form-control">
            <span>{{currentBindAddress}}</span>
          </p>
        </div>
      </form>
    </div>
    <div style="text-align: center">
      <button type="button" class="a-btn" @click="register">{{$t('home.bind')}}</button>
    </div>

    <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
      <!-- Position it -->
      <div style="position: fixed; top: 100px; right: 100px;">
        <div class="toast" ref="errorToast">
          <div class="toast-header">
            <strong class="mr-auto">{{$t('home.error_title')}}</strong>
            <small>{{$t('home.just_now')}}</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body" style="color: red;">{{errorMessage}}</div>
        </div>
        <div class="toast" ref="noticeToast">
          <div class="toast-header">
            <strong class="mr-auto">{{$t('home.notice_title')}}</strong>
            <small>{{$t('home.just_now')}}</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">{{noticeMessage}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as Web3 from "web3";
import { i18n } from "@/i18n-setup";

const web3 = new Web3(
  Web3.givenProvider || Web3.currentProvider || "ws://localhost:8545"
);
console.log(`web3:`, web3);

import { appSettings } from "@/settings";
const mainChainName = appSettings.mainChainName;
const contractEnvironment = appSettings.contractEnvironment;

console.log(`contractEnvironment: ${contractEnvironment}`);

let importedTargetContractPromise = null;

export default {
  name: "Home",
  components: {},
  async mounted() {
    const { contractAddress } = await this.getTargetContractModule();
    this.contractAddress = contractAddress;
    const userAccount = this.getCurrentAccount();
    this.currentUserAddress = userAccount;
    this.loadBindAddress();
  },
  data() {
    return {
      mainChainName: mainChainName,
      form: {},
      currentBindAddress: "",
      contractAddress: "",
      currentUserAddress: "",
      errorMessage: "",
      noticeMessage: ""
    };
  },
  methods: {
    showError(msg) {
      this.errorMessage = msg;
      window.$(this.$refs["errorToast"]).toast({
        delay: 3000
      });
      window.$(this.$refs["errorToast"]).toast("show");
    },
    showInfo(msg) {
      this.noticeMessage = msg;
      window.$(this.$refs["noticeToast"]).toast({
        delay: 3000
      });
      window.$(this.$refs["noticeToast"]).toast("show");
    },
    changeLocale(newLocale) {
      i18n.locale = newLocale || "en";
    },
    isActiveLocale(newLocale) {
      return i18n.locale === newLocale;
    },
    getTargetContractModule() {
      if (importedTargetContractPromise) {
        return importedTargetContractPromise;
      }
      importedTargetContractPromise = new Promise((resolve, reject) => {
        try {
          import(
            /* webpackChunkName: "contract-[contractEnvironment]" */ `@/contract-${contractEnvironment}`
          )
            .then(({ contractAddress, abi }) => {
              const targetContract = new web3.eth.Contract(
                abi,
                contractAddress
              );
              resolve({ targetContract, contractAddress });
            })
            .catch(reject);
        } catch (e) {
          reject(e);
        }
      });
      return importedTargetContractPromise;
    },
    async register() {
      if (!this.form.toBindAddress) {
        this.showError(`please enter ${mainChainName} address to bind`);
        return;
      }
      const { targetContract } = await this.getTargetContractModule();
      const account = await this.getCurrentAccount();
      if (!account) {
        this.showError("please unlock eth wallet");
        return;
      }
      const registerArg = this.form.toBindAddress;
      targetContract.methods
        .register(registerArg)
        .send({
          from: account
        })
        .then(res => {
          console.log("res", res);
          this.showInfo(`bind address successfully`);
          this.loadBindAddress();
        })
        .catch(e => {
          console.log("error", e);
        });
      this.showInfo(
        `bind transaction sent, please wait seconds and refresh page`
      );
    },
    async getCurrentAccount() {
      if (this.currentUserAddress) {
        return this.currentUserAddress;
      }
      const accounts = await web3.eth.requestAccounts();
      if (accounts.length > 0) {
        this.currentUserAddress = accounts[0];
        return this.currentUserAddress;
      }
      return undefined;
    },
    async loadBindAddress() {
      const account = await this.getCurrentAccount();
      if (!account) {
        return;
      }
      const { targetContract } = await this.getTargetContractModule();
      const bindedMainChainAddress = await targetContract.methods
        .keys(account)
        .call({});
      console.log("bindedMainChainAddress", bindedMainChainAddress);
      this.currentBindAddress = bindedMainChainAddress;
    }
  }
};
</script>
