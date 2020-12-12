<template>
  <div class="detail">
    {{$route.params.username}}的个人信息

    <button @click="goBack">返回首页</button>
  </div>
  
</template>

<script>
export default {

  methods: {
    goBack() {
      // this指向的是Vue的实例
      // 取到router加入'想要跳转的路径'
      this.$router.push({path: '/', query: { id: 123 }})
      // this.$router.push({name:'Home', params: { id: 1234 }})
    }
  }
}
</script>

<style>

</style>