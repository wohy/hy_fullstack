<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button> -->

  <!-- <ul>
    <Fargment :data="[5, 3, 4, 1, 8, 9, 2]" />
  </ul> -->

  <!-- <TeleportDemo/> -->

  <!-- <Suspense>
    <template #default>
      <AsyncComponent :timeout="3000"></AsyncComponent>
    </template>
    <template #fallback> -->
      <!-- <h1>加载中</h1> -->
      <!-- <Loading/>
    </template>
  </Suspense>  -->
  <todoList/>

</template>

<script>
// composition API
// treeShaking树摇算法  按需引入
import { reactive, computed, ref, onMounted} from 'vue'

// import Fargment from '@/components/Fargment'
// import TeleportDemo from '@/components/Teleport'
// import AsyncComponent from '@/components/asyncComponent'
// import Loading from '@/components/Loading'
import todoList from '@/components/TodoList'

export default {
  setup() { //composition API 的 入口
    // const state = reactive({
    //   count: 1,
    // })

    // 将useCounter执行抛出的对象中的 state, double 解构出来
    // 这与在setup中使用 的效果相同
    const { state, double } = useCounter(1)

    // reactive 不能修饰原始类型 所以此处修饰2 不能将其变为响应式的
    // 需要用到 ref 但ref修饰后的值 要取到 要为 num.value
    let num = ref(2)


    function add() {
      state.count++  
      //点击时，展示的count不会加1，因为此时的count不是响应式的
      // state被reactive API修饰时，里面的数据变为响应式的了
      num.value += 10
    }
    // 计算属性 computed 修饰该属性 this已绑定到vue上
    // const double = computed(() => state.count * 2)

    onMounted(() => {
      console.log('onMounted');
    })

    return { state, add, double, num}
  },
  components: {
    // Fargment,
    // TeleportDemo,6
    // AsyncComponent,
    // Loading,
    todoList
  }
}

// 在此处的为js语法 可以使用 reactive computed，抛出一个对象
function useCounter (count) {
  const state = reactive({
    count
  })
  const double = computed(() => state.count * 2)
  return { state, double }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
