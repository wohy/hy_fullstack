# vuex
- 用来管理数据源，定义公共数据源
- 将定义公共数据源的js，与main.js结合
  类似路由的引入
  在main.jsz中引入
  引入时，名称只能为store
  ```import store from './vuex/store'```
  再直接将store传入new Vue 中
- 取数据，先在页面中引入
  ``` import { mapState } from 'vuex' ```
  通过``` ...mapState(['count']) ```拿到数据并解构出来
- 可直接到store.js中对公共数据源进行操作
  方法定义在一个对象中，再将该对象作为值赋予mutations
  如定义的对象名为则将mutations: mutations传入到Vuex.Store
  若定义的一个方法add要在页面上生效，如绑定点击事件
  则应：```@click="$store.commit('add')```
  但这种方法的引入不太优雅
  可直接绑定```@click="add(10)"```传入实参
  首先，引入类似于mapState
  ``` import { mapMutations } from 'vuex' ```
  add应该变为该页面自己的方法，所以在methods中拿到方法并将方法解构出来
  ``` ...mapMutations(['add', 'reduce']) ```
- 计算属性 getters
  类似以上两种属性 ，多将其解构到computed中
- actions
  此时用actions来操作add()方法
  其中的方法会被认定为异步代码去执行，则将执行队列中的同步代码执行完后再执行，会带来延时，但可避免代码阻塞，而mutations中的代码会同步执行

- 若需定义的共用数据源过多时，可使用moduleA/moduleB/moduleC...将操作同一块数据源的state，mutations，getters，actions放入到同一个模块中，再将一个一个module放入到Vuex.Store中，将其赋予属性，a/b/c...
而在页面取值时，需$store.state.a.count



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
