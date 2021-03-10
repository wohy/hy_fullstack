组件式开发
模板 + 对象描述 + 数据 = 组件
数据驱动页面
数据更新，组件可以自动渲染
只需专注数据逻辑的处理
  
## 组件的渲染 vnode 到 真实DOM的转变
- 组件想要真正的渲染生成DOM的步骤： 创建vnode --> 渲染vnode --> 生成DOM

1. 程序初始化
  把APP组件挂载到ID为app的DOM节点上
  - creatAppp创建app对象，重写app.mount方法
    1. 使用 ensureRenderer().createApp() 来创建 app 对象 
      - 先用 ensureRenderer() 来延时创建渲染器，这样做的好处是当用户只依赖响应式包的时候，就不会创建渲染器，因此可以通过 tree-shaking 的方式移除核心渲染逻辑相关的代码
      - Vue.js 3.0 内部通过 createRenderer 创建一个渲染器，这个渲染器内部会有一个 createApp 方法，它是执行 createAppAPI 方法返回的函数，接受了 rootComponent 和 rootProps 两个参数，我们在应用层面执行 createApp(App) 方法时，会把 App 组件对象作为根组件传递给 rootComponent。这样，createApp 内部就创建了一个 app 对象，它会提供 mount 方法，这个方法是用来挂载组件的。
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