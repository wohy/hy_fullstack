JSX语法
- { } 中的为js

父子组件通信
- 父组件向子组件通信：
  在父组件中 引入的子组件的标签上添加一个属性，将属性值设置为想要传给子组件的参数值，注意当参数中使用到的是父组件中的this，在传给子组件之前要绑定好this
  子组件接收参数，直接使用 this.props.属性名 来接收

- 科学上网 下载 Redux dev

- $ yarn add Redux
  store下的 index reducer

  - reducers 暴露出一个函数 接收两个参数
    第一个state 管理的数据源，第二个是 action
    ```
      const defaultState = {
        <!-- 默认管理的数据源 -->
      }

      export default (state = defaultState, action) => {
        return state
      }
    ```

  - createStore 创建 store
    引入 reducer ，将其作为参数传给 createStore 方法
    配置好 store 后，将 store 抛出
    ```
      import { createStore } from 'redux'
      import reducer from './reducer'

      const store = createStore(reducer)

      export default store
    ```

  - 数据流
    页面 dispatch 数据到 store 
    --> store会将数据和想要进行的动作自动传到 reducer 的第二个参数 
    --> reducer 通过判断页面传来的动作 来规定需要执行的操作，执行操作前将之前的数据源深拷贝下来，在对数据做处理，将处理完的数据返回出来 --> 返回的数据会到 store 中 
    --> 页面可以通过 store.getState() 方法来获取此时 store 更新后的数据源
    --> 在通过 this.setState() 将获取来的更新数据

- 组件
  UI组件(傻瓜组件) 容器组件(聪明组件)
  只有 render 时 可以将该组件写成无状态组件 如 TodoListUI ，当 UI 组件只有
  reder 操作时，可将其写成 无状态组件(函数式，精简，性能好)

-  Redux 的 中间件
  redux-thunk 使我们能在 action 中进行异步操作 并让dispatch 可以传一个函数
  https://github.com/reduxjs/redux-thunk


