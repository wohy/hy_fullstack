# 简单解析原理
- vue数据响应式
  vue2.0：
  定义了一个defineReactive方法 让数据变为响应式的
  其中重写了数组的方法 push shift unshift pop reserve，进行函数劫持，数组发生变化的同时 updateView 更新页面
  并在内部通过 Object.defineProperty 来代理数据，传入对象 和 需要代理的属性 可劫持发生变化的数据
  数据发生变化时，在 set 中进行 updateView 页面的更新
  取数据可以通过 get 获得
  vue3.0：
  通过 proxy 来进行数据的代理
  只需传入代理的对象，对象的属性发生变化，即可劫持，同时进行页面的更新
vue2.0中：
- watcher 观察者 意识到数据更新，即会触发回调vm._update 函数，去通知页面更新
- 这个过程中 render 函数 (vm._render()) 生成新的 vnode (newVnode)
- vm._update 函数就会带着新的DOM结构 去触发 __path__ 过程
- __path__ 过程利用 diff 算法，对比新旧 vnode 

- diff 详情
  