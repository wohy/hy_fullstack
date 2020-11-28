<template>
  <div class="hello">
    {{message}}
    <hr/>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props: ['message','ms'], //接收父组件的message属性，和ms属性
  data () {
    return {
      msg: '我是子组件里面的数据'
    }
  },
  methods: {
    send () {
      this.$emit('sendData', this.msg)
    }
  }
}
</script>

<style>
.hello {
  color: red;
  font-size: 20px;
  /* width: 100px;
  height: 50px;
  border: 2px dotted darkturquoise;
  margin: 0 auto; */
}
</style>