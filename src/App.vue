<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// common styles
.a-btn {
  color: #444;
  background-color: #f5f5f5;
  border-color: #c8c9c7;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1px 5px;
  font-size: 12px;
  height: 25px;
  min-width: 25px;
  line-height: 20px;
  display: inline-block;
  white-space: nowrap;
  padding: 0px 15px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  min-height: 1.5em;
  text-align: center;
  border-radius: 0.15em;
  border-style: solid;
  border-width: 1px;
  text-shadow: none;
  background-repeat: repeat-x;

  &.active {
    color: #fff;
    background-color: #3d8feb;
  }
}
</style>
