// 在 Vue.js 3.0 中，初始化一个应用的方式如下

import { createApp } from 'vue'
import App from './app'
const app = createApp(App)
app.mount('#app')
// 把APP组件挂载到id为app的DOM节点上
// createApp Vue.js 暴露出的一个函数


// createApp 的内部实现
const createApp = ((...args) => {
  // 创建 app 对象
  const app = ensureRenderer().createApp(...args)
  const { mount } = app
  // 重写 mount 方法
  app.mount = (containerOrSelector) => {

    // ...

  }
  return app
})
// 其中的ensureRenderer() 用于创建一个渲染对象
// 渲染相关的一些配置，比如更新属性的方法，操作 DOM 的方法
const rendererOptions = {
  patchProp,
  ...nodeOps
}
let renderer
// 延时创建渲染器，当用户只依赖响应式包的时候，可以通过 tree-shaking 移除核心渲染逻辑相关的代码
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions))
}
// 创建渲染器
function createRenderer(options) {
  return baseCreateRenderer(options)
}
// 返回一个 render 和 createApp方法
function baseCreateRenderer(options) {
  function render(vnode, container) {

    // 组件渲染的核心逻辑

  }
  return {
    render,
    createApp: createAppAPI(render)
  }
}

function createAppAPI(render) {

  // createApp方法 createApp 方法接受的两个参数：根组件的对象和 prop
  // createApp(App) App作为rootComponent  
  // 返回的值将具有_component、 _props属性 和 mount 方法
  return function createApp(rootComponent, rootProps = null) {
    const app = {
      _component: rootComponent,
      _props: rootProps,
      mount(rootContainer) {
        // 创建根组件的 vnode
        const vnode = createVNode(rootComponent, rootProps)
        // 利用渲染器渲染 vnode
        render(vnode, rootContainer)
        app._container = rootContainer
        return vnode.component.proxy
      }
    }
    return app
  }
}


// app.mount重写
app.mount = (containerOrSelector) => {
  // 标准化容器 
  const container = normalizeContainer(containerOrSelector)
  if (!container)
    return
  const component = app._component
   // 如组件对象没有定义 render 函数和 template 模板，则取容器的 innerHTML 作为组件模板内容
  if (!isFunction(component) && !component.render && !component.template) {
    component.template = container.innerHTML
  }
  // 挂载前清空容器内容
  container.innerHTML = ''
  // 真正的挂载
  return mount(container)
}


// vnode的构建

// 普通元素节点
<button class="btn" style="width:100px;height:50px">click me</button>
// 会构建为
const vnode = {
  type: 'button',
  props: { 
    'class': 'btn',
    style: {
      width: '100px',
      height: '50px'
    }
  },
  children: 'click me'
}

// 组件节点
<custom-component msg="test"></custom-component>
// 构建为
const CustomComponent = {
  // 在这里定义组件对象
}
const vnode = {
  type: CustomComponent,
  props: { 
    msg: 'test'
  }
}

// 还有 纯文本vnode 注释vnode
// 对vnode的type 做了更详细的分类
// 且各种类型都有与之对应的编码，以便后面的patch阶段可以根据不同的类型执行相应的处理逻辑
const shapeFlag = isString(type)
  ? 1 /* ELEMENT */
  : isSuspense(type)
    ? 128 /* SUSPENSE */
    : isTeleport(type)
      ? 64 /* TELEPORT */
      : isObject(type)
        ? 4 /* STATEFUL_COMPONENT */
        : isFunction(type)
          ? 2 /* FUNCTIONAL_COMPONENT */
          : 0

// Vue.js 内部是如何创建这些 vnode 的
// 回顾app的mount方法
const vnode = createVNode(rootComponent, rootProps)
// createVNode函数的大致
function createVNode(type, props = null
  ,children = null) {
    if (props) {
      // 处理 props 相关逻辑，标准化 class 和 style
    }
    // 对 vnode 类型信息编码
    const shapeFlag = isString(type)
      ? 1 /* ELEMENT */
      : isSuspense(type)
        ? 128 /* SUSPENSE */
        : isTeleport(type)
          ? 64 /* TELEPORT */
          : isObject(type)
            ? 4 /* STATEFUL_COMPONENT */
            : isFunction(type)
              ? 2 /* FUNCTIONAL_COMPONENT */
              : 0
    const vnode = {
      type,
      props,
      shapeFlag,
      // 一些其他属性
    }
    // 标准化子节点，把不同数据类型的 children 转成数组或者文本类型
    normalizeChildren(vnode, children)
    return vnode  
  }
  