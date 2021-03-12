1. 比较 angular react vue
- angular 还没接触到过
  react 与 vue 在日常的开发中使用到过
  但vue的理解更深一点，因为个人认为小型的项目使用 Vue 可以更快速、更灵活的搭建起来，所以就使用 vue 也多一些，但同时 react 也适合搭建大型的项目 所以 react也在陆续的跟进学习。 
  在使用 react 与 vue 的过程中发现的一些它们之间的区别：
  1. react 与 vue 同样是 组件式开发，react 的函数式编程体现得显著
  2. 数据响应与数据流的不同 
    - react 的数据响应式一般会 依托于 redux ，通过将页面想要进行的 action 与 需要操作的数据 再通过 dispatch 发送到 store store 再转发个 reducer 的 第二个参数，reducer 接收到了这些 参数判断 action 就能对数据进行改变，再将数据源 state 更新好，之后再返回给 store，之后页面只能通过  setState 来重新改变页面显示的数据源，这样看出 react 是一个单项数据流。
    而 vue 中可以支持通过 v-model 来绑定数据，再通过 onChange 等 实现数据的双向绑定。
    - 同时监听数据的变化，vue 是通过 getter、setter 的方式来拦截数据的改变，而 react 默认是通过 diff 来比较引用 发现数据的改变。
    - vue 的数据源是支持直接改变的，而 react 更强调数据的不可变
  3. 模板渲染方式的不同
    react 通过 JSX 渲染模板；而 vue 是通过拓展 html 语法进行渲染



2. 对 vue 的理解
  - vue 是 通过数据驱动页面的一个渐进式的MVVM(model view viewModel)框架。数据驱动页面，让我们，可以专注于操作数据以及关心数据流
  - vue 是单页应用 最终都是一个 main.js 和 一个 index.html，这让 第三方插件和库 的引入使用十分
  方便，但首屏加载会需要较长时间
  - 引入了 虚拟DOM 可维护视图和状态的关系；复杂视图情况下提升渲染性能；支持跨平台，还可以用于SSR(服务器端渲染)，来解决首屏加载会时间较长问题

3. MVVM(model view viewModel)
 Model 表示数据模型层。 view 表示视图层， ViewModel 是 View 和 Model 层的桥梁，数据绑定到 viewModel 层并自动渲染到页面中，视图变化通知 viewModel 层更新数据。

4. vue是如何实现响应式数据的呢？（响应式数据原理）
  vue2.0 通过 definedpropty 进行数据拦截，当数据需要改变时，通过在 setter 来对值进行改变，并通知页面进行更新

5. 那vue中是如何检测数组变化的呢？
  通过重写数组的 push pop shift unshift reserve splice 方法，让数组中的值需要通过

6. 那你说说Vue的事件绑定原理吧

7. v-model中的实现原理及如何自定义v-model

8. 为什么Vue采用异步渲染呢？

9. 了解nextTick吗

10. 说说Vue的生命周期吧

11. 父子组件生命周期调用顺序

12. Vue组件通信

13. Vuex 工作原理

14. 如何从真实DOM到虚拟DOM

15. 用VNode来描述一个DOM结构

16. diff算法

17. Computed watch 和 method

18. v-if 和 v-show 区别

19. v-for和v-if为什么不能连用

20. v-html 会导致哪些问题（简单）

21. 描述组件渲染和更新过程

22. 组件中的data为什么是函数

23. 为什么要使用异步组件？

24. action 与 mutation 的区别

25. 插槽与作用域插槽的区别

26. vue中相同逻辑如何抽离

27. 谈谈对keep-alive的了解

28. Vue性能优化
