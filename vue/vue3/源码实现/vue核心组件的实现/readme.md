组件式开发
模板 + 对象描述 + 数据 = 组件
数据驱动页面
数据更新，组件可以自动渲染
只需专注数据逻辑的处理
  
## 组件的渲染 vnode 到 真实DOM的转变
- 组件想要真正的渲染生成DOM的步骤： 创建vnode --> 渲染vnode --> 生成DOM

1. 程序初始化
  把APP组件挂载到ID为app的DOM节点上
  createApp 入口函数 vue.js 对外暴露的函数
  - creatApp创建app对象，重写app.mount方法
    1. 使用 ensureRenderer().createApp() 来创建 app 对象 
      - 先用 ensureRenderer() 来延时创建渲染器，这样做的好处是当用户只依赖响应式包的时候，就不会创建渲染器，因此可以通过 tree-shaking 的方式移除核心渲染逻辑相关的代码
      - Vue.js 3.0 内部通过 createRenderer 创建一个渲染器(可理解为包含平台渲染逻辑的JavaScript对象)，
      这个渲染器内部会有一个 createApp 方法，它是执行 createAppAPI 方法返回的函数，接受了 rootComponent 和 rootProps 两个参数，我们在应用层面执行 createApp(App) 方法时，会把 App 组件对象作为根组件传递给 rootComponent。这样，createApp 内部就创建了一个 app 对象，它会提供 mount 方法，这个方法是用来挂载组件的。
    2. 重写app.mount方法
      因为Vue.js不仅仅是为Web平台服务，它的目标是支持跨平台渲染，而createApp函数内部的app.mount方法是一个标准的可跨平台的组件渲染流程
      通过给mount传入的rootContainer参数来识别是要渲染的是一个什么平台，例如Web平台传入的是一个DOM对象

2. 核心渲染流程：创建vnode和渲染vnode
  - 创建vnode
    vnode 本质上是用来描述 DOM 的 JavaScript 对象，它在 Vue.js 中可以描述不同类型的节点，比如普通元素节点、组件节点等。
  - vnode 的优势
    1. 抽象，把渲染的过程抽象化，从而使得组件的抽象能力也得到提升
    2. 支持跨平台，patch vnode的过程不同平台可以有自己的实现，使服务端渲染更容易
    注意：虽然 diff 算法在减少 DOM 操作方面足够优秀，但最终还是免不了操作 DOM，所以说性能并不是 vnode 的优势。
  - 如何创建 vnode ？
    - createVNode 函数创建根组件的 vnode ，需要：
      1. 对 props 做标准化处理
      2. 对 vnode 的类型信息编码
      3. 创建 vnode 对象
      4. 标准化子节点  children。
  - 渲染 vnode
    render 函数
    如果第一个参数 vnode 为空，则执行销毁组件的逻辑，否则执行创建更新组件的逻辑
    - patch 函数
      两个功能：挂载 DOM 和 更新 DOM
    - 对组件的处理
      processComponent 函数 n1 为 null，则执行挂载组件的逻辑，否则执行更新组件的逻辑
      - 挂载组件的  mountComponent 函数： 
        1. 创建组件实例
        2. 设置组件实例
        3. 设置并运行带副作用的渲染函数
        - 创建组件：vue2.0通过类的方式去实例化组件；vue3.0 内部通过对象的方式去创建了当前渲染的组件实例
        - 设置组件实例：instance 保留了很多组件相关的数据，维护了组件的上下文，包括：props、插槽，以及其他实例的属性初始化处理
        - 执行带副作用的渲染函数：副作用可理解为组件数据发生变化时，effect函数包裹的内部渲染函数会重新执行一遍，从而达到重新渲染组件的目的
      
