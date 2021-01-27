<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{flag}}</li>
  <quick :data="right" v-if="right.length"></quick>
</template>

<script>
export default {
  name: 'quick',
  props: ['data'], // [5, 3, 4, 1, 8, 9, 2]
  // 将父组件传来的 data 的这个数组 进行快排
  setup(props) {
    let flag = props.data[0]
    let left = []
    let right = []
    props.data.slice(1).forEach(v => {
      v > flag ? right.push(v) : left.push(v)
    });
    return { left, right, flag }
  }
}
</script>

<style>
