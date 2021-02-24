<template>
  <button v-show="login" class="tologin" @click="tologin">登录</button>
  <navbar/>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {  
 components: {
   navbar
 },
 setup() {
  const router = useRouter()
  const state = reactive({
    login: true
  })
  const tologin = function() {
   router.push({name:'login'})
  }

  return { ...toRefs(state), tologin }
 }
}
</script>

<style>

</style>