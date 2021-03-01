<template>
  <div id="app">
    <router-view class="router-view" v-slot="{Component}">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.router-view{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
