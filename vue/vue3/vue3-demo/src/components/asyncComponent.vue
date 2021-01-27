<template>
  <h1>一个异步组件</h1>
</template>

<script>
export default {
  name: 'AsyncComponent',
  props: {
    timeout: {
      type: Number,
      required: true
    }
  },
  async setup(props) {
    await sleep(props.timeout)
  }
}
// 微任务执行完 => 页面渲染 => 宏任务执行
function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
</script>

<style>

</style>