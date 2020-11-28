<template>
  <div class="wrap">
    BBBBBBB{{msg}}
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA', (e) => {
      // console.log(e);
      this.msg = e
    })
  }
}
</script>

<style>

</style>