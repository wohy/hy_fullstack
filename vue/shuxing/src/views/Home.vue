<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './home'
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    console.log('我是原生的created')
  },
  updated () {
    console.log('数据发生变化了--原生')
  },
  mixins: [addLog, app],
  extends: app,
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>

<style>

</style>
