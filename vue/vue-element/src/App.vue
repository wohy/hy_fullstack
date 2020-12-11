<template>
  <!-- <div class="home">
    <Form></Form>
  </div> -->
  <div class="page">
    <p>
      <!-- <router-view>首页</router-view> -->
      <router-link to="/">首页</router-link> |
      <!-- 配置好路由后 "/about"相当于about页面路径 点击关于 即可to到about页面 -->
      <router-link to="/about">关于</router-link>
    </p>

    <!-- 路由入口 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Form from './components/form'
export default {
  data () {
    return {
      message: 'hello vue!'
    }
  },
  // components: {
  //   Form
  // }

}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  /* transition 过渡 某个属性发生变化时 给点时间去过渡 */
  transition: opacity 1s;
}
.fade-leave-active{
  opacity: 0;
  /* transition: opacity 1s; */
}
.page{
  text-align: center;
}
.home {
  color: red;
}
</style>