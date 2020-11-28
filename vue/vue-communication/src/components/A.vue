<template>
  <div class="wrap">
    AAAA
    <button @click="sendA">click</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      item: '我是组件A中的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA', this.item)
    }
  }
}
</script>

<style>

</style>