# 学习 hooks 并通过购物车项目落地

# useState 的使用
使用 useState 来创建状态 及 修改状态
1. 引入
2. 接收一个参数作为初始值
3. 返回一个数组，第一个值表示一个状态状态，第二个为改变该状态的函数
- 例： components/StateFunction.js

# 解决副作用 useEffect
一个 副作用 hooks
- 作用： 给没有生命周期的组件(函数组件)， 添加结束渲染的信号
- useEffect 的使用
  1. 接收一个函数作为参数 副作用
  2. 接收第二个参数 为该副作用 发生的依赖列表 只有列表中的数据发生变化 函数才会执行
  3. 返回一个函数 会先执行该返回函数，在执行副作用
- 例： components/StateFunction.js

# 监测DOM useLayoutEffect
- 作用：在 dom 更新完成之后执行某个操作
- 与 useEffect 的异同点：
  1. 相同点：
    - 语法相似，返回函数的作用相同，同样接受一个函数作为参数，第二个参数为依赖列表
  2. 不同点：
    - 依赖项相同，并发生改变时， useLayoutEffect 的执行会在 useEffect 之前，useLayoutEffect 执行在 dom 更新之后，useEffect 执行在 render 之后

# 组件跟随状态更新执行 useMemo
- 作用：让组件中的函数跟随其依赖的状态去更新执行
- 注意事项：实际时优化函数组件中的功能函数；useMemo 缓存的是一个值，依赖项不发生变化时，始终返回相同值
- 使用：接收两个参数，第一个为一个函数，第二个为依赖列表；返回一个值，函数执行后的值


#  组件跟随状态更新执行 useCallback
- 作用：让组件跟随状态更新执行
- 注意事项：只有依赖项改变的时候才会执行； useMemo(() => fn, deps) 相当于 useCallback(fn, deps)
- 与 useMemo 的不同，useMemo 返回的是一个值，useCallback useCallback 缓存的是一个函数，依赖项不发生变化时，始终返回缓存的函数，发生变化，则会返回更新后的函数
- 使用场景: 当给子组件传一个 函数时，可使该函数依赖父组件发生改变，并引起子组件的重新渲染


# 长久保存数据 useRef
- 作用：长久保存数据
- 使用：返回的是一个子元素的索引，此索引在整个生命周期中可以保持不变；手动改变对象属性(ref.current)的值，不会引起组件的重新渲染

# 组件之间共享状态 useContext
- 作用：将数据统一的传给子组件
- 注意：上层数据发生变化，肯定会触发子组件的重新渲染
- 使用：
  1. 需要引入 useContext createContext 两个方法
  2. 通过 createContext 创建一个 Context 对象
  3. 通过以 Context.Provider 标签包裹，来确定共享范围，并便签绑定数据 value 传给子组件
  4. 子组件 通过接收 useContext(Context) 执行的返回值，即为父组件传递下来的参数(状态) 

# 复杂逻辑简单化 useReducer
- 作用：去其他地方接资源，就相当于函数组件的 redux
- 使用方法：与类组件的 redux 的操作类似
  1. 需要创建 数据仓库(store) 和 管理者(reducer)
  2. 通过 useReducer(reducer, store) 执行，并在其返回值中解构出 state 和 dispatch 
  3. 通过 dispatch 可以将操作 store 中的数据 的事件传给 reducer 执行，从而使 state 发生变化，页面重新渲染

# 自定义 hooks
自定义 hooks 以支持特殊场景 提高开发效率
工具 放在 utils 列表中
- 基本流程：
  1. 引入自己所需要的 react 提供的 hook
  2. 创建自己的hook函数
  3. 返回数组，数组中的内容是数据，和修改数据的函数
  4. 将定义好的 hook 暴露出去
  5. 在业务组件中引入使用即可
  
## 实现一个 异步获取接口数据 同步到对应组件上的 hooks
- 在 utils 中定义并抛出一个 useLoadData hooks函数，在需要使用该 hooks 函数的组件中引入调用即可
## 实现一个 hooks useLocalReducer 在使用 useReducer 时，不需要去 在每一个函数组建中都定义 自己的 reducer 和 store
- 只需在 hooks 函数中定义好 reducer 的每个组件的规则，在 store 定义好 每个组件会使用到的数据，在组件中直接使用即可，不需反复定义