# 谈谈变量提升
  js 执行时会有一个执行环境包含全局环境和函数体环境
  变量声明 声明提升
  函数声明 整体提升

# bind、call、apply 区别
  bind返回的是一个函数

#  bind 的实现
  不传参数的话默认指向window
  返回一个函数
  返回的函数可以被 new
  参数是任意个

# call、apply 实现


# 简单聊一下原型链
  每个函数都有 prototype 属性 该属性指向原型
  原型就是创建该函数的工厂，每个对象都有 __proto__ 属性，这个属性指向了创造出该对象的构造函数的 原型。其实他指向的是 [[prototype]] ，可该属性是内部属性，我们访问不到，所以需要通过 __proto__ 来访问
  对象可以通过 __proto__ 来寻找它继承父类的属性，就如此层层相连，就行成了一条原型链

# 如何判断对象类型

# 箭头函数的特点
内部没有 this 的概念，所以调用箭头函数不需要去关心起指向，更无法改变 this 的指向
若其中出现 this 则为外层的第一个不为箭头函数的函数的this

# async/await 的优缺点
  优点： 更优雅的解决了回调地狱问题，使 promise 更语义化，处理 promise.then 的调用链代码更清晰。
  缺点： await 会阻塞代码的执行，导致代码去到下一次事件循环机制的 promise 微任务队列中，滥用会到值性能问题。

# Generator 的原理
  es6 新增
  ```
  function* test() {
    // 内部有 yield 暂停代码；next 恢复代码执行
  }
  ```
  没有返回值，也会默认返回一个 Generator 对象

# promise


# '==' 和 '===' 区别，什么情况下用 ==

# 浏览器的 eventloop 和 node 中的区别
nextTick node中的事件循环机制


# cookie、localStorage、session、indexDB 的区别
  - cookie：4k 内存  携带在 header 中，会影响请求的性能
    value：存储 token
    http-only：不能通过 js 访问cookie，为减少 XSS(跨站攻击) 攻击
    secure：只能在 https 协议中携带
    same-site：不能在跨域请求中携带 cookie，为减少 XSS 攻击

  localStorage：
  session：
  indexDB：

# 如何判断当前页面加载完成
  - onLoad 事件的触发 说明 页面加载完毕
  - DOMContentLoaded 代表 html 完全加载，不需要等待 css 图片加载完成

# 跨域
    由于浏览器的同源策略，导致跨域问题
  1. JSONP 
    把请求方式设置为 JSONP 的格式
    只能用于 GET 请求
  2. cors
    后端使用 cors 中间件，让后端访问可允许跨域
  3. document.domain 
    只适用于 二级域名相同的情况(如，a.test.com b.test.com)
    只需要给页面添加 document.domain = test.com，则 test.com 允许跨域
  4. postMessage 
  5. 代理 Nginx 

# 浏览器的缓存
  缓存机制：是为了降低资源的重复加载，提高整体页面的加载速度
  - 强缓存：expires 中可以规定其缓存的时效，过期后会再次向服务端请求
  - 协商缓存：Last-Modified(本地文件最后的修改日期)，If-Modified-Since(把Last-Modified的值缓存在服务器)

# Babel 原理
  
# get 和 post 请求有什么区别
  - url 参数拼接时 get 会拼到 url 之后，post 不会
  - get 可以使用缓存，post 不能使用缓存

# 继承

# js 的事件流
  js 的 交互是通过事件来交互的
  事件流描述的事件的接收顺序
  1. 捕获
  2. 触发
  3. 冒泡
  addEventListener 第三个参数 false(冒泡, 默认的)，true(阻止冒泡)
  - 如何让事件，先冒泡后捕获
    监听捕获和冒泡，分别对应相应的处理函数，先暂停执行捕获事件，直到冒泡事件执行完毕，再执行捕获

# 事件委托
  在父元素上设置监听函数
  借助 冒泡机制
  ul li
  把点击事件绑定在 ul 上

