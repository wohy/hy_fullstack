<template>
  <button class="tologin" @click="tologin">登录</button>
  <navbar/>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import { useRouter } from 'vue-router'
export default {  
 components: {
   navbar
 },
 setup() {
  const router = useRouter()
  const tologin = function() {
   router.push({name:'login'})
  }

  return { tologin }
 }
}
</script>

<style>

</style>