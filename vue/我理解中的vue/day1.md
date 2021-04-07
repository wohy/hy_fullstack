- 方法    
    insert：在父几点下插入节点，如果指定 ref 则插入道 ref 这个子节点的前面。
    createElm：用来新建一些节点，tag节点 存在创建一个标签节点，否则创建一个文本节点。
    addVnodes：用来批量调用 createElm 新建节点。
    removeNode：用来移除一个节点
    removeVnodes：会批量调用 removeNode 移除节点


## 比较 angular react vue
- angular 还没接触到过
  react 与 vue 在日常的开发中使用到过
  但vue的理解更深一点，因为个人认为小型的项目使用 Vue 可以更快速、更灵活的搭建起来，所以就使用 vue 也多一些，但同时 react 也适合搭建大型的项目 所以 react也在陆续的跟进学习。
  在使用 react 与 vue 的过程中发现的一些它们之间的区别：
  1. react 与 vue 同样是 组件式开发，react 的函数式编程体现得更显著
  2. 数据响应与数据流的不同 
    - react 是一个单项数据流。
    而 vue 中可以支持通过 v-model 来绑定数据，再通过 onChange 等 实现数据的双向绑定。
    - 同时监听数据的变化，vue 是通过 definedpropety 中的 getter、setter 的方式来拦截数据的改变，而 react 默认是通过 diff 来比较引用 发现数据的改变。
    - vue 的数据源是支持直接改变的，而 react 更强调数据的不可变
    - 依赖的状态管理器也不同 redux 和 vuex
  3. 模板渲染方式的不同
    react 通过 JSX 渲染模板；而 vue 是通过拓展 html 语法进行渲染



## 对 vue 的理解
  - vue 是 通过数据驱动页面的一个渐进式的 MVVM(model view viewModel) 框架。数据驱动页面，让我们，可以专注于操作数据以及关心数据流
  - vue 是单页应用 最终都是一个 main.js 和 一个 index.html
  - 第三方插件和库 的引入使用十分方便，但首屏加载会需要较长时间
  - 引入了 虚拟DOM 可维护视图和状态的关系；复杂视图情况下提升渲染性能；支持跨平台，还可以用于 SSR(服务器端渲染) ，来解决首屏加载会时间较长问题

## vue2 到 vue3 的优化
- 源码优化
  1. 更好的管理和维护代码的方式monorepo
  2. 2.0采用flow 3.0采用TypeScript
    TypeScript提供了更好的类型检查，能支持复杂的类型推导，利于维护

- 性能优化
  1. 源码体积的优化
    - 移除一些冷门的feature
    - 引入了tree-shaking技术
      没有引入的组件，他们的代码就不会打包
      间接减少了项目引入的Vue.js的包体积
      
  2. 数据劫持优化
    vue的数据响应需要依赖数据劫持来完成，渲染DOM的时候访问了数据，通过访问劫持，就能知道数据对应的DOM是什么
    - 使用了 proxy API做数据劫持 能劫持整个对象。
      - 使用 definedPropty 劫持时需要传入监测的对象的某个属性，这样就需要 definedPropty 递归遍历整个对象来达到拦截数据的目的，导致了很大的性能开销。
      - 注意：Proxy API并不能监听到内部深层次的对象变化，于是便在 getter 中去递归响应式
      好处：只有真正访问到的内部对象才会变成响应式，不是无脑的递归，提升了代码性能
    - 使用了 watch 数据结构

  3. 编译优化
    - 对 patch 过程进行优化
    diff算法，只作用绑定了动态节点的标签，不需要在去遍历这个模板
      - 通过编译阶段对静态模板的分析，编译生成了block tree
      - block tree一个模板基于动态节点指令切割的嵌套区块，每一个区块都有一个Array来追踪自身包含的动态节点
      - 这样将 vnode 更新性能变为与动态内容的数量相关
    - Slot 的编译优化
    - 事件侦听函数 的缓存优化
    - 运行时重写了diff算法

- 语法API优化：引入Composition API
  1. 2.0 采用 Options API，即编写组件 就是 编写一个 包含了描述组件选项的对象
  通过methods,computed,data,props分类
  需要不断的去切换、寻找逻辑关注点
  
  Composition API 将逻辑关注点相关的代码全都放在一个函数里，这样就不需要总是在文件中不断切换找寻
  
  2. 优化逻辑复用
    2.0 汇入大量mixin时 
      - 可能导致定义相同的变量，导致命名冲突
      - 模板中使用其他地方汇入的变量，就很难发现该变量的出处
    3.0 解决了这两个问题 将函数约定为hook函数

  3. 有更好的类型支持
  4. 都是函数，调用即可，不像Options API所有东西都需使用this访问
  5. Composition API对 tree-shaking 友好，代码也容易压缩

- 大规模启用RFC 使每个版本改动可控
  上线使用都需要通过讨论并确认
  阅读RFC，可以了解每一个feature采用或被废弃掉的前因后果



## MVVM(model view viewModel)
 Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层，并自动渲染到页面中，视图变化通知 viewModel 层更新数据。

## **vue是如何实现响应式数据的呢？**（响应式数据原理）
  vue2.0 重新定义了 data 中的属性，通过 definedproperty 进行数据拦截，当数据需要改变时，通过其中 setter 来对值进行改变，watcher 观察者 意识到数据更新，即会触发回调 vm._update 函数，去通知页面更新，这个过程中 render 函数 (vm._render()) 生成新的 vnode (newVnode)，vm._update 函数就会带着新的DOM结构 去触发 __path__ 过程(__path__在服务端渲染中，没有真实的浏览器 DOM 环境，所以不需要把 VNode 最终转化成 DOM，因此是一个空函数，而在浏览器端渲染中它指向了 patch 方法)，patch 方法的核心便是 diff 算法了
  具体就是 页面通过 initdata 来初始化用户传入的参数，通过 new Observer 来观察数据，若数据是一个对象，则通过 this.walk(value) 对对象进行处理，内部通过 defineactive 将数据设置为响应式的，实际上就是 通过 definedproperty 重新定义数据

  那么 vue3.0 使用的则是 porxy 来代理数据，这样减少了代码的复杂程度
  - 使用 definedPropty 劫持时需要传入监测的对象的某个属性，这样就需要 definedPropty 递归遍历整个对象来达到拦截数据的目的，导致了很大的性能开销。
  - 注意：Proxy API并不能监听到内部深层次的对象变化，于是便在 getter 中去递归响应式
    好处：只有真正访问到的内部对象才会变成响应式，不是无脑的递归，提升了代码性能



## 那vue2.0中是如何检测数组变化的呢？
  函数劫持的方法
  重写数组的 push pop shift unshift reverse splice sort方法，让数组中的值需要通过调用这些方法发生变化时，则可同时进行页面更新 updateView()
  重写实质是更改了方法的原型，在执行这些方法的时候，通知页面进行更新
  数组中可能会出现对象，所以会对数组的每一项进行观测


## 那你说说Vue的事件绑定原理吧
  通过 v-on 命令来进行事件绑定，可用 @ 表示。
  原生 DOM 的绑定：Vue在创建真实DOM时会调用 createElm ，默认会调用 invokeCreateHooks。会遍历当前平台下相对的属性处理代码，其中就有 updateDOMListeners 方法，updateDOMListeners 就是用来添加事件的方法，在这方法中会根据 vnode 判断是否有定义一个点击事件。如果没有点击事件就return。有的话就继续执行，给on进行赋值，然后进行一些赋值操作，将 vnode.elm 赋值给 target，elm这个属性就是指向vnode所对应的真实dom节点，这里就是把我们要绑定事件的dom结点进行缓存，接下来执行 updateListeners 方法。在接下来执行 updateListeners 方法中调用了一个 add 的方法，然后在 app 方法中通过原生 addEventListener 把事件绑定到 dom 上。
  组件绑定事件，原生事件，自定义事件；组件绑定之间是通过Vue中自定义的 $on 方法实现的。
  https://blog.csdn.net/qq_42072086/article/details/108063281

## v-model 中的实现原理及如何自定义 v-model
    双向绑定
    v-model 只能作用于一些特定的表单标签如input、select、textarea和自定义的组件使用
    从v-model绑定在input上开始描述
  主要实现：
  1. 在 created 函数时，传入el为这个 input节点的dom对象，和第二个参数binding对象，以及第三个参数vnode为节点的vnode对象
  函数首先会把v-model绑定的值赋值给el.value，这个就是数据到DOM的单向流动
  2. 通过定义一个 getModelAssigner 方法来获取 vnode.props 中的'onUpdate: modelValue' 属性对应的函数，并赋值给 el._assign 属性
  3. 最后通过 addEventListener 来监听 input 标签的事件，它会根据是否配置 lazy 这个修饰符来决定监听的是 input 还是 change 事件
  4. 这个事件监听函数，当用户手动输入一些数据，触发事件的时候，会执行函数，并通过 el.value 获取 input 标签新的值，然后调用 el._assign 方法更新数据，这就是DOM到数据的流动。
  以 input 为例，input 上的 onChange 事件的参数中 可取到 当前 输入框中的值，将值赋予 绑定的属性值，即可改变页面当前属性的值，当然页面也可以通过其他的事件函数来改变该属性值，如此便实现了双向绑定

## 为什么 Vue 采用异步渲染呢？
vue 是组件级的更新，如果不采用异步渲染的话，数据更新一次，页面又要重新渲染，性能浪费较大


## 了解 nextTick 吗
  Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

  nextTick 作用:
  把回调函数放入callbacks数组等待执行
  将执行函数放到微任务或者宏任务中
  事件循环到了微任务或者宏任务，执行函数 依次 执行callbacks数组中的回调(flushCallbacks函数将 callbacks里面的元素复制下来，然后将 callbacks 清空，之后复制过来的回调函数执行)


## **说说Vue的生命周期吧**
前四个 vue 第一次加载页面会触发的几个钩子函数
beforeCreated： 
  1. 进行初始化事件，把 this 指向创建的实例
  2. 不能访问到 data，不能访问 computed，watch，methods 及其中的方法和数据
  3. 用于初始化非响应变量
Created： 
  1. 实例创建完成
  2. 数据已经和data属性绑定，这个时候放在 data 中的属性值发生改变的同时，视图也会改变
  3. 可以初始化 ajax 请求，但页面没有出现，如果请求消息太多的话，页面会长时间的处于白屏状态
  4. 可以访问 data，可以访问 computed ，watch ，methods 及其中的方法和数据
  5. 还没有进行挂载到 DOM 
  6. 不能访问到 ref 属性内容为空的数组
beforeMount:  
  1. 判断是否有 el 选项，有的话就继续执行，没有就停止编译，除非调用了 vm.$mount(el)；
  2. 判断是否有 template 参数选项，有的话将模板编译为 render 函数，没有template 选项的话，就将外部的 html 作为模板编译，由此看出 template 中的模板优先级要高于 外部的 html 的优先级。
  3. 如果 Vue 对象中还有一个 render 函数的话，那么又会先渲染 render 函数中的内容
Mounted： 
  1. 在 mounted 之前还依然是 {{}} 包裹的数据，因为没有挂载到页面上，还有JS 中以 虚拟DOM 的形式存在
  2. mounted 之后换成了我们想要的样子
  3. 实例挂载到 DOM 上，此时可以通过 DOM api来获取到 DOM 节点
  4. $ref 属性可以访问
  5. 常用于获取 VNode 信息， ajax 请求，因为 真实的 DOM 此时已经生成完成了，若在其之前 使用 ajax 异步请求 会阻碍页面的渲染
beforeUpdate：
  1. 当 data 中的数据发生变化，会触发对应组件的重新渲染
  2. 响应式数据更新调用，发生在 虚拟DOM 打补丁(patch)之前
  3. 适合在视图更新之前访问现有 DOM ，比如手动移除或者添加事件监听器
Updated：
  1. 虚拟DOM重新渲染和打补丁(patch)之后调用，组件 DOM 已经更新，可执行依赖 DOM 的操作
  2. 避免在这个钩子中操作数据，不然可能陷入死循环
beforeDestory：
  1. 实例销毁之前调用，这一步实例仍然可以使用，this 仍然可以获取实例
  2. 常用于销毁定时器，解绑全局事件，销毁插件对象等操作
Destoryed：
  1. 实例销毁之后调用，调用后，Vue实例指示的所有东西都会解绑，所有事件侦听器都会被移除，所有子实例也会被销毁
  https://blog.csdn.net/princess_Wuyou/article/details/107515348


## 父子组件生命周期调用顺序
  创建：父组件先开始创建，之后才开始创建子组件，子组件先创建好，之后父组件才创建好
  更新：更新时，父组件的变化导致子组件变化，子组件变化更新完成后 父组件才开始更新完
  销毁：父组件先开始销毁，子组件才开始销毁，子组件先销毁完，之后父组件才销毁完

## Vue组件通信
  父组件在子组件标签上 v-bind 好需要传给子组件的值，子组件通过 props 接收父组件传过来的值
  $emmit 将事件和参数传给父组件，父组件 通过 on 接收绑定该事件，对其进行赋值，当做自己的事件使用，事件参数中即存有子组件传过来的参数
  Event Bus 两个没有关系的子组件 以父组件作为媒介进行传值，依赖于 on 和 $emmit
  vuex状态管理 通信 
  一个组件通过 绑定 mutation 中解构出来的事件并传参 提交给 store，store 再通过将该数据暴露出去，另外一个组件引入即可

## Vuex 工作原理
  vue 的状态管理器
  状态自管理应用：
  定义一个公共的数据源 state，也作为驱动应用的数据源
  view，以声明的方式将 state 映射到视图
  actions，响应在 view 上的用户输入导致的状态变化
  单项数据流：State --> View --> Actions (形成一个顺时针环)
  vuex，多组件共享状态，因单项数据流简洁性很容易被破坏
  多个视图依赖于同一状态
  来自不同视图的行为需要变更同一状态
  

  
## 如何从真实DOM到虚拟DOM
  DOM 结构其实是一个对象集合
  通过解析真实 DOM ，从外层的节点开始 ，分析出该节点的 标签名 属性 子节点 ，再去递归其各个子节点，子节点，不存在子节点了在遍历 同级节点，有点像二叉树的 层序遍历
  将模板转换成 AST (抽象语法树)，AST 用对象的形式来描述 JS 语法
  (这是将真实DOM转换成虚拟DOM)
  优化树
  将 AST 树生成代码

## 用VNode来描述一个DOM结构
  虚拟节点就是用一个对象来描述一个真实的DOM元素。首先将 template （真实DOM）先转成 ast ， ast 树通过 codegen 生成 render 函数， render 函数里的 _c 方法将它转为虚拟dom

## patch 函数的核心 diff算法
  时间复杂度：两个DOM树的完全的diff算法的时间复杂度是 O(n^3)，而vue中diff算法通过同层的树节点进行比较，而非对树进行逐层搜索遍历的方式，所以时间复杂度只有o(n)，比较高效。
  -  首先在 oldVnode（老 VNode 节点）不存在的时候，相当于新的 VNode 替代原本没有的节点，所以直接用 addVnodes 将这些节点批量添加到 parentElm 上。

  - 如果 vnode（新 VNode 节点）不存在的时候，相当于要把老的节点删除，所以直接使用 removeVnodes 进行批量的节点删除即可

  - 当 oldVNode 与 vnode 都存在的时候，同层对比新旧 vnode 判断是否是相同的节点 (isSameNode)
    - 不是相同节点 isSameNode = false，直接销毁旧的
    - 如果是相同的节点，要尽可能做节点的复用，进行   patchVnode（比对 VNode ）操作
    - 如果 新newVNode 是文字vnode，就直接调用浏览器的API 替换文字
    - 如果新的vnode有children子节点，旧的vnode没有，直接addvnode添加子节点
    - 旧的vnode有children，新的vnnode没有，直接removeVnode 旧的子节点 

  key 是节点的唯一标识，当节点的 key 相同时，会默认该节点相同，并向节点的内层的 子节点 遍历，进一步细化比较
  当节点的 key 不相同时，会直接删除旧节点，添加新节点

  优化策略：通过四个指针，来进行四种命中查找
    1. 先比较开头，命中在后面插入或删除节点的情况
    2. 从结尾开始比较，命中在前面插入或删除节点的情况
    3. 旧节点的头部 与 新节点的尾部开始比较，命中新的节点移动到旧的节点之后的情况
    4. 旧节点的尾部 与 新节点的头部开始比较命中新的节点移动到旧的节点之前的情况

  - 是相同节点时的patchVnode 函数：
    1. 新老节点相同，直接return
    2. 节点是否静态，并且新老节点的key相同，只要把老节点拿来用就好了
    3. 当VNode是文本节点，直接setTextContent来设置text，若不是文本节点则继续执行
    4. oldch(老)与ch(新)存在且不同，使用updateChildren()（后面介绍）
    5. 只有ch存在，若oldch(老)节点是文本节点，先删除，再将ch(新)节点插入elm节点下
    6. 同理当只有oldch(老)节点存在，说明需要将oldch(老)节点通过removeVnode全部删除
    7、当老节点是文本节点，清除其节点内容

      
  -  不能将 v-for 的 index 作为key。
  若 是使用Index作为key时，reverse后 生成的 新的 children 的 key 会与 初始的key相同 而其对应的val不同
  本来可直接将DOM节点进行reverse，可还需再向深层匹配到val 发生不同，这事val不同，则需重新配置那些key及其对应的val，删除原来的旧节点，增加新节点配置好之后，再交换节点的位置
  本来匹配到key的时候就可以reserve直接交换节点位置，而用Index做key要匹配到val，这个时候那些节点就要重新变动，浪费性能产生了更多的开销
   
## Computed watch 和 method
  computed：计算属性，默认computed 也是一个 watcher 具备缓存，只有当依赖的数据变化才会计算；当数据没有变化时，它会读取缓存数据。如果一个数据依赖于其他数据，使用 computed。

  watch：能独立监听数据的变化，提供一个可执行函数的场所。适用于数据变化时的异步操作。如果需要在某个数据变化时做一些事情，使用watch。

  method：只要把方法用到模板上了,每次一变化就会重新渲染视图，性能开销大

## v-if 和 v-show 区别
  v-if 如果判断 不成立的 DOM 节点直接不会渲染
  v-show 会渲染，但只是判断该DOM是否能显示出来，

## v-for和v-if为什么不能连用
  v-for 会比 v-if 的优先级更高，连用的话会把 v-if 的每个元素都添加一下，造成性能问题。

## v-html 会导致哪些问题（简单）
  导致 XSS 攻击
  v-html 会替换标签内部的元素

## 描述组件渲染和更新过程
    - 初次渲染：
      1. 解析模板为render函数(或再开发环境已完成)
      2. 触发响应式，监听data属性的getter的依赖收集，也即是往dep里面添加watcher的过程
      3. 执行render函数，生成vnode，patch
    - 更新过程:
      1. 修改data，setter(必需是初始渲染已经依赖过的)调用Dep.notify()，将通知它内部的所有的Watcher对象进行视图更新
      2. 重新执行rendern函数，生成newVnode
      3. 然后就是patch的过程(diff算法) 

   组件中的 data 为什么是函数
  避免组件中的数据互相影响。
  同一个组件被复用多次会创建多个实例，如果 data 是一个对象的话，这些实例用的是同一个构造函数。
  所以为了保证组件的数据独立，要求每个组件都必须通过 data 函数返回一个对象作为组件的状态。


## 为什么要使用异步组件？
  异步组件可以减少打包的结果。会将异步组件分开打包，会采用异步的方式加载组件，可以有效的解决一个组件过大的问题。不使用异步组件，如果组件功能比较多打包出来的结果就会变大。
  核心就是可以给组件定义变成一个函数，依赖 import（） 语法，实现文件的分割加载，import语法是webpack提供的，采用的就是jsonp。

## action 与 mutation 的区别
  mutation 是同步更新， $watch 严格模式下会报错
  action 是异步操作，可以获取数据后调用 mutation 提交最终数据


## 插槽与作用域插槽的区别
  <slot> 作为承载分发内容的出口，插槽就是在子组件里做定制化内容，当一个复用的组件内有一部分需要针对不同的场景有所差异，且无规律可循时，我们就可以使用<slot></slot>让父组件自定义内容。
  
    普通插槽在父组件初始化期间 会编译成文本子节点存起来，在子组件渲染的时候，直接将 插槽 替换成 父组件里 渲染的节点
    作用域插槽在父组件初始化期间 会编译成一个函数，在 子组件初始化的时候，执行这个函数生成vnode，再进行渲染
    内容与子组件内的数据无关使用普通插槽
    内容与子组件内的数据有关使用作用域插槽
    作用域插槽的作用就是拿到子组件的数据

## vue中相同逻辑如何抽离
  使用vue中的Vue.mixin，给组件每个生命周期、函数等混入一些公共的逻辑，另外混入对象的钩子将在组件自身钩子之前调用。并且mixin可以放在全局使用，也可以放在组件中使用。

## 谈谈对keep-alive的了解
  keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在页面渲染完毕后不会被渲染成一个DOM元素。当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行
  被包裹在keep-alive中的组件的状态将会被保留
  常用的还有include、exclude属性，
  只有组件名为 include 属性的值的组件会被缓存；exclude则相反


## Vue性能优化
  使用 keep-alive 保留组件状态并且避免重新渲染
  key 保证唯一性，for 循环中 的 index 不能作为 key
  路由懒加载、异步组件
  防抖节流
  减少使用 v-if 尽量使用 v-show 替代，因为 v-show 可以避免dom节点的销毁和重建

## 服务器端渲染
  之前 有使用过 Nuxt.js
  在客户端把标签渲染成HTML的工作 放在服务端完成，然后 再把html直接返回给客户端。
  将页面的代码 通过 res.end，ctx.body 返回给前端
  解决单页应用页面加载时间较长导致白屏时间过长的问题
  SEO 搜索引擎优化

## 前端路由的实现
  1. 什么是前端路由？
  路由的概念来源于服务端，在服务端中路由描述的是 URL 与处理函数之间的映射关系。

  在 Web 前端单页应用 SPA(Single Page Application)中，路由描述的是 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）。

  2. 如何实现前端路由？
  要实现前端路由，需要解决两个核心：
  如何改变 URL 却不引起页面刷新？
  如何检测 URL 变化了？

  下面分别使用 hash 和 history 两种实现方式回答上面的两个核心问题。
  - hash 实现
    hash 是 URL 中 hash (#) 及后面的那部分，常用作锚点在页面内进行导航，改变 URL 中的 hash 部分不会引起页面刷新
    通过 hashchange 事件监听 URL 的变化。
    改变 URL 的方式只有这几种：

    通过浏览器前进后退改变 URL
    通过a标签改变 URL、
    通过window.location改变URL
    这几种情况改变 URL 都会触发 hashchange 事件

  - history 实现
    history 提供了 pushState 和 replaceState 两个方法，这两个方法改变 URL 的 path 部分不会引起页面刷新。
    history 提供类似 hashchange 事件的 popstate 事件，但 popstate 事件有些不同：

    通过浏览器前进后退改变 URL 时会触发 popstate 事件
    通过pushState/replaceState或a标签改变 URL 不会触发 popstate 事件。


