<template>
  
</template>

<script>
import { useRouter,useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const a = route.query
    console.log(a);
  }
}
</script>

<style>

</style>