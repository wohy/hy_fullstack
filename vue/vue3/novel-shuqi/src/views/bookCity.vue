<template>
  <van-tabs v-model:active="active" swipeable>
    <van-tab v-for="index in tabTitle" :key="index" :title= "index">

    </van-tab>
  </van-tabs>
</template>

<script>
import { toRefs } from 'vue'
export default {  
  setup() {
    const state = {
      tabTitle: [
        {
          title:'推荐',

        },
        {
          title:'男生', 
        },
        {
          title:'女生', 
        },
        {
          title:'首发', 
        }
      ]
    }

    return { ...toRefs(state) }
  } 
}
</script>

<style>

</style>