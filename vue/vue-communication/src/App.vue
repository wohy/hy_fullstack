<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Hello :message="title" :ms="fromHi" @sendData="getData"/>
    {{formChild}}
    <Hi @sendHi="getHi"/> -->
    <!-- 绑定sendHi事件为getHi -->
    <A/>
    <B/>
  </div>
</template>

<script>
import A from '@/components/A'
import B from '@/components/B'
// import Hello from '@/components/Hello'
// import Hi from '@/components/Hi'

export default {
  name: 'App',
  data () {
    return {
      title: '我爱我的祖国',
      formChild: '',
      fromHi:''
    }
  },
  methods: {
    getData (e) {
      console.log(e);
      this.formChild = e
    },
    getHi (e) {
      console.log(e);
      this.fromHi = e
    }
  },
  components: {
    // Hello,
    // Hi
    A,
    B
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
