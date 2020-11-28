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
    <router-view></router-view>
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
.page{
  text-align: center;
}
.home {
  color: red;
}
</style>