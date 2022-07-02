# 生命周期的设计思想
# 虚拟 DOM 核心算法的基石
组件初始化 --- render方法 ---> 生成虚拟 DOM --- ReactDOM.render 方法 ---> 真实 DOM
组件更新 --- render方法 ---> 生成新的虚拟 DOM --- diff 算法 ---> 定位出两个虚拟 DOM 的差异

# 组件化：工程化思想在框架中的落地
封闭：针对渲染工作流来说，在每个组件自身的渲染工作流中，每个组件都只处理它内部的渲染逻辑
开放：针对组件通信来说的，允许基于 "单项数据流" 的原则，完成组件间的通信，通信导致双方或者一方的数据改变，进而对渲染结果构成影响

# React 16.3
挂载 更新 卸载
## mounting：组件的初始化渲染(挂载)
React15:
    组件挂载：初始化渲染 ---> constructor() ---> componentWillMount() ---> render() ---> componentDidMount()
React16:
    组件挂载：初始化渲染 ---> constructor() ---> getDerivedStateFromProps() ---> render() ---> componentDidMount()

## getDerivedStateFromProps 不是 componentWillMount 的替代品
getDerivedStateFromProps 用途：使用 props 来派生、更新 state。更新 和 挂载两个阶段都会执行
### getDerivedStateFromProps 调用
静态方法，内部访问不到 this
```
statuc getDerivedStateFromProps(props, state) {
    <!-- props 挂载阶段为 父组件传入的参数，更新阶段为更新后的参数对象 -->
    <!-- state 为当前组件自身的 state 对象 -->

    <!-- 需要一个 对象格式的返回值 -->
    return {}
}
```
### getDerivedStateFromProps 方法对 state 的更新不是 "覆盖式" 更新，而是针对某个属性的定向更新
原始 state 中又改属性则更新，否则则直接新增


## updating 阶段：组件的更新
React15：
    组件更新：由父组件触发 ---> componentWillReceiveProps() ---> shouldComponentUpdate() 组件更新：由组件自身触发时调用 ---> componentWillUpdate() ---> render() ---> componentDidUpdate()
React16:
    组件更新：由父组件触发 ---> getDerivedStateFromProps() ---> shouldComponentUpdate 组件更新：有组件自身触发时调用 ---> render() ---> getSnapshotBeforeUpdate() ---> componentDidUpdate()

## React 16.4
差异：更新流程 与 16.3 不同
React 16.4 任何组件触发的更新流程 都会触发 getDerivedStateFromProps()
React 16.3 只有父组件更新才会触发 getDerivedStateFromProps()


## 为什么要 使用 getDerivedStateFromProps 代替 componentWillReceiveProps
getDerivedStateFromProps 在 componentWillReceiveProps 上做减法，并将其设计为一个静态方法，避免了 一系列 this 操作 带来的副作用
React 16 在强制推行 只用 getDerivedStateFromProps 来完成 props 到 state 的映射。确保生命周期的行为更加可控可预测，从根源上避免不合理的变更方式，避免生命周期的滥用。同时为 新的 fiber 架构铺路

## 消失的 componentWillUpdate 与 新增的 getSnapshotBeforeUpdate 
区别： getSnapshotBeforeUpdate 的返回值 会作为第三个参数 给到 componentDidUpdate 它执行时机是在 render 方法之后，真实 DOM 更新之前

getSnapshotBeforeUpdate 阶段里 可以同时获取到更新前的真实 DOM 和 更新后的 state & props 信息
使用场景：实现一个内容会发生变化的滚动列表，要求根据滚动列表的内容是否发生变化来决定是否要记录滚动条的当前位置（既要获取 state 又要获取 真实 DOM 来获取滚动条位置）

getSnapshotBeforeUpdate 要想发挥作用 离不开 componentDidUpdate 的配合

## Unmounting阶段：组件卸载
组件卸载 ---> componentWillUnmount()

## Fiber 架构: React 16 对 React 核心算法的一次重写
使原本同步的渲染过程 变成 异步的
- 同步渲染：
    React16 之前，没当触发一次组件的更新，React 就会重新生成一个新的虚拟 DOM 树，通过 diff 算法 递归比较之前的 DOM 树，来实现 DOM 的定向更新。只有最底层的递归返回了，才会开始逐层返回，这个漫长不可打断的更新过程，将会带来用户体验的巨大风险。同步渲染一旦开始，主线程就会被占用，直到递归彻底完成，这之前浏览器浏览器无法处理除了渲染之外的事情，无法处理用户交互，所以如果渲染时间长一些的话，页面就会有卡顿甚至卡死的风险。
- Fiber：
    可以被打断的的异步渲染模式
    fiber 将化解 同步渲染 的风险
    Fiber 会将一个大的更新任务拆解为多个小任务
    每当执行完一个小任务，渲染线程都会把主线程释放，看看有没有优先级更高的工作，确保其它任务不会被扼死，进而避免卡顿

    Fiber 将React生命周期划分为 render 和 commit(precommit、 commit) 两个阶段

    - render 阶段： 没有副作用，可能会被 react 暂停、终止、或重新启动。 （暂停时用户无感，使用异步渲染）

    - precommit 阶段：可以读取 DOM
    - commit 阶段：可以使用 DOM 、运行副作用、安排更新
    （涉及真实的DOM 操作，用户可感知，所以 precommit、commit 操作需要同步渲染）

- Fiber 架构下的 render 的重新启动，是从头开始的，而不是接着执行，所以 render 下的生命周期可能会被重复执行
react16 废弃的生命周期：componentWillMount、 componentWillUpdate、  componentWillReceiveProps 都可能会被重复，存在风险

- 在 componentWillxxxx 生命周期中进行 setState、fetch发起异步请求、操作真实dom 时，存在的问题
1. 完全可以转移到其它生命周期中(尤其是 componentDidxxx)里去做
2. 在 Fiber 带来的异步渲染机制下，可能会导致非常严重的 Bug (componentWillxxxx 在 render 中可能被重复执行，比如重复打断、重启发起支付接口请求)
3. 即使没有 异步操作 ，也会有不少风险，比如 在 componentWillReceiveProps 、componentWillUpdate 中，滥用 setState 导致的死循环
