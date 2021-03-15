1. 什么是虚拟DOM
  是由普通的 js 对象来 描述  DOM对象，不是真实的 DOM 对象

2. 为什么要是有 虚拟DOM 来描述 真实DOM 
  - 成本低
  - 手动操作 DOM 比较麻烦，还需要考虑浏览器的兼容问题 --> 为了简化 DOM 操作，出现MVVM框架，解决视图和状态同步问题(数据变，可自动更新视图；视图变化可自动更新数据) --> 为了简化视图操作，使用模板引擎，但模板引擎无法跟踪视图的状态变化 --> 于是引入 虚拟DOM ，当状态发生改变时，不需要去立即更新 DOM 结构，只需要创建 虚拟树 来描述 DOM，虚拟DOM 内部将借助 diff 算法来 更新 DOM，只更新变化的部分。
    综上即 虚拟DOM 能维护程序的状态，从而跟上上次的状态。 diff 算法可对比 新旧 vnode 来更新 DOM

3. 虚拟DOM 的作用
  除以上的一些优点外，还有
  - 可维护视图和状态的关系
  - 复杂视图情况下提升渲染性能
  - 支持跨平台，还可以用于SSR(Nust.js 和 Next.js)、原生应用(Weex 和 React Native)、小程序(mpvue/uni-app)

4. 虚拟DOM 开源库
  - Snabbdom (大约 200SLOC两百行)
    - vue 2.x 内部使用的 Virtaul DOM 就是改造 Snabbdom
    - 通过模块可拓展
    - 使用 typescript 开发
    - 最快的 Virtual DOM 之一
  - virtual-dom

5. Snabbdom-demo
  安装 snabbdom
  CommonJs引入 require('snabbdom')
  所有的模块都导入到一个对象
  源码中的暴露使用的是 export 而非 export defalut 则使用 es6 模块导入方式 import 为
    import { init, h, thunk } from 'snabbdom'
  - init 高阶函数 返回 patch 函数
  ``` let patch = init([]) ```
    - patch 函数，作用对比两个 vnode 的差异 更新到真实 DOM
      - 第一个参数：可以是 DOM 元素，内部会把 DOM 元素转换为 VNode
      - 第二个参数：VNode
      - 返回值：VNode
      - 其中定义了一个保存新插入节点的队列，为了触发钩子函数
    ``` let app = document.querySelector('#app) ```
    ``` let oldVnode = patch(app, vnode) ```
  - h 函数 返回虚拟节点 VNode
    ```render: h => h(App)```
    - 第一个参数：标签 + 选择器；第二个参数：如果是字符串的话就是标签中的内容
    ``` let vnode = h('div#container.cls', 'Hello World') ```
    假设的时刻，更新vonde
    ``` vnode = h('div', 'Hello Snabbdom') ```
    则此时会执行
      ``` patch(oldVnode, vnode) ```
  - thunk 函数，一种优化策略，可以在处理不可变数 据时使用，优化复杂视图

  - 清空页面
    ``` patch(oldVnode, h('!')) ```
    通过 h 创建出一个 ！注释节点，在通过 patch 渲染替换真实 DOM 则清空了当前的 DOM 