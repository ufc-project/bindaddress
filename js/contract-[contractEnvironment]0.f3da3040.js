(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contract-[contractEnvironment]0"],{"9ea5":function(t,e,n){"use strict";n.r(e),n.d(e,"contractAddress",(function(){return a})),n.d(e,"abi",(function(){return i}));var a="0x8445704c484c4FDDdEbE26c36a2AE4db8b53A364",i=[{constant:!1,inputs:[],name:"buy",outputs:[],payable:!0,type:"function",stateMutability:"payable"},{constant:!1,inputs:[{name:"day",type:"uint256"},{name:"limit",type:"uint256"}],name:"buyWithLimit",outputs:[],payable:!0,type:"function",stateMutability:"payable"},{constant:!1,inputs:[{name:"day",type:"uint256"}],name:"claim",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[],name:"claimAll",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[],name:"close",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[],name:"collect",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[{name:"day",type:"uint256"},{name:"start_index",type:"uint256"},{name:"limitnum",type:"uint256"}],name:"help_claim",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[{name:"ufc",type:"address"}],name:"initialize",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[{name:"key",type:"string"}],name:"register",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[{name:"authority_",type:"address"}],name:"setAuthority",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[{name:"owner_",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{constant:!1,inputs:[],name:"start",outputs:[],payable:!1,type:"function",stateMutability:"nonpayable"},{inputs:[{name:"_numberOfDays",type:"uint256"},{name:"_totalSupply",type:"uint128"},{name:"_openTime",type:"uint256"},{name:"_breakTime",type:"uint256"},{name:"_startTime",type:"uint256"},{name:"_foundersAllocation",type:"uint128"},{name:"_firstdaySupplyPrice",type:"uint128"},{name:"_firstdayTotal",type:"uint128"},{name:"_foundersKey",type:"string"}],payable:!1,type:"constructor",stateMutability:"nonpayable"},{payable:!0,type:"fallback",stateMutability:"payable"},{anonymous:!1,inputs:[{indexed:!1,name:"window",type:"uint256"},{indexed:!1,name:"user",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"LogBuy",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"window",type:"uint256"},{indexed:!1,name:"user",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"LogClaim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"user",type:"address"},{indexed:!1,name:"key",type:"string"}],name:"LogRegister",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"LogCollect",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"",type:"bool"}],name:"LogHelpClaimEnd",type:"event"},{anonymous:!1,inputs:[],name:"LogFreeze",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"authority",type:"address"}],name:"LogSetAuthority",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"}],name:"LogSetOwner",type:"event"},{constant:!0,inputs:[],name:"authority",outputs:[{name:"",type:"address"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"breakTime",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"claimed",outputs:[{name:"",type:"bool"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"createFirstDay",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"day",type:"uint256"}],name:"createOnDay",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"createPerDay",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dailyTotals",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"timestamp",type:"uint256"}],name:"dayFor",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"dayindex",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"uint256"}],name:"dayindexuser",outputs:[{name:"",type:"address"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"foundersAllocation",outputs:[{name:"",type:"uint128"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"foundersKey",outputs:[{name:"",type:"string"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"address"}],name:"keys",outputs:[{name:"",type:"string"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"numberOfDays",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"openTime",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"startTime",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"time",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"today",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"totalFirstDay",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint128"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[],name:"UFC",outputs:[{name:"",type:"address"}],payable:!1,type:"function",stateMutability:"view"},{constant:!0,inputs:[{name:"",type:"uint256"},{name:"",type:"address"}],name:"userBuys",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function",stateMutability:"view"}]}}]);
//# sourceMappingURL=contract-[contractEnvironment]0.f3da3040.js.map