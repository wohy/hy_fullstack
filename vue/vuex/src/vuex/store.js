import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const state2 = {

}

const mutations = {
  add(state, num) {
    state.count += num
    // setTimeout(() => {
    //   state.count += num
    // }, 3000)
    // console.log('我后出现');
  },
  reduce(abc) {
    abc.count--
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

const actions = {
  addActions (context, n) {
    setTimeout(() => {
      context.commit('add', n)
    }, 3000)
    console.log('我先出现');
  }
}

const moduleA = {
  state: state,
  mutations,
  getters,
  actions
}

const moduleB = {
  state2
}

// 将数据state传入，此时，就会被Vuex.Store作用，将其认为一份数据源
export default new Vuex.Store({
  // 同名可省略，前面的state与mutations不能随意定义名称，后面的属性值即为自己定义的常量
  // state: state,
  // mutations,
  // getters,
  // actions

  modules: {
    a: moduleA,
    b: moduleB
  }
})