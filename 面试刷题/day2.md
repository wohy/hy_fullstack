11. es6数组常用方法
  https://es6.ruanyifeng.com/#docs/array

12. JS 异步解决方案的发展历程以及优缺点
  由于JS是单线程的语言，如果只有同步代码的话，运行就可能会造成阻塞，因为当前执行一段同步代码，后面的代码执行就会先被阻塞，而引入异步代码后，就不需要等待代码执行的返回结果，而是可以直接执行异步任务后面的代码，这样就可避免阻塞
  - 异步编程的发展历程：
    1. 回调函数：最早，通过一些典型的事件回调，或者setTimeout、setInterval实现
    问题：当回调的层级嵌套过多时，会带来地狱回调问题
    2. 为了解决地狱回调，提出了Promise
      优点：可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
      缺点：可能需要些很多then的方法链，没有从根本上解决地狱回调问题，依旧很难维护
      之后引入了.all()方法就优化了些
    3. ES6引入Generator异步编程解决方案
    4. ES7中提出的方法async/await，async是Generator的语法糖，返回的是一个promise对象
      优点：代码更加的清楚

13. Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？

14. 如何实现一个new
  使用Object.create()，将原构造函数的原型深拷贝下来
  再通过apply，将参数传入，并绑定fn的this到obj中，并执行，若返回的是一个对象类型则返回，若不是，则直接返回拷贝下来的原型
  ``
    function _new(fn, ...arg) {
      const obj = Object.create(fn.prototype);
      const ret = fn.apply(obj, arg);
      return ret instanceof Object ? ret : obj;
    }
  ``

15. 简单讲解一下http2的多路复用
  1. 数据以二进制格式传输的
  2. 多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。
  多路复用代替了HTTP1.x的序列和阻塞机制，同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。
  避免了队头阻塞问题，极大的提高传输性能
  3. 单个连接上可以并行交错的请求和响应，之间互不干扰

16. 谈谈你对TCP三次握手和四次挥手的理解
  - 三次握手：
    1. 客户端向服务端发送数据请求
    2. 服务端向客户端发送请求应答
    3. 客户端发送确认连接信号给服务端
  - 四次挥手：
    1. 客户端请求释放连接请求
    2. 服务端接收到释放请求，会告诉应用层要释放TCP连接了，就会发送ACK包给客户端，并进入CLOSE_wait状态 (完成后客户端是不能向服务端发送数据了，可TCP连接是双向的，此时服务端还是可以给客户发送数据的)
    3. 服务端向客户端发送没有发送完的数据
    4. 客户端接收到最后一份数据后，向服务端发起确认断开请求，2ms后如果没有得到应答，就自动断开

17. 如果A 与 B 建立了正常连接后，从未相互发过数据，这个时候 B 突然机器重启，问 A 此时处于 TCP 什么状态？如何消除服务器程序中的这个状态？


18. React 中 setState 什么时候是同步的，什么时候是异步的？


19. 

20. 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？
  - 步骤：
    1. npm 先执行工程自身的 preinstall 
    2. 确认首层的依赖模块，即dependencies 和 devDependencies 属性中直接指定的模块，工程本身是整棵依赖树的根节点，每个首层依赖模块都是根节点下面的一棵子树，npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。
    3. 之后获取模块，以递归的方式进行。
      - 获取模块的信息，获取模块版本，如果该版本的描述文件中有模块的信息，则直接获取，没有则到npm仓库中获取
      - 确认模块实例，上一步会返回模块压缩包的地址，npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。
      - 查找该模块依赖，如果有依赖则回到第1步，如果没有则停止。
    4. 模块扁平化
      上一步获取到的是一棵完整的依赖树，其中可能包含大量重复模块
      从 npm3 开始默认加入了一个 dedupe 的过程。它会遍历所有节点，逐个将模块放在根节点下面，也就是 node-modules 的第一层。当发现有重复模块时，则将其丢弃。
      对重复模块进行一个定义，它指的是模块名相同且 semver 兼容
      实际模块版本可以兼容完成对应功能即可，不需版本号完全一致，可兼容版本的也可算是重复的
    5. 安装模块
      这一步将会更新工程中的 node_modules，并执行模块中的生命周期函数（按照 preinstall、install、postinstall 的顺序）。
  - 为何可以自动安装：
    以上的步骤 npm 都会自执行

21. 有以下几个判断数组的方法，请分别介绍它们之间的区别和优劣
  - Object.prototype.toString.call() 
    除了object对象类型可以不用call，其他的类型都需要使用call来调用
    传入一个参数，可返回一个字符串例如'[object String]''[object Object]'
    其后的即是该参数的类型，首字母为大写的
    能判断出所有的数据类型
  - instanceof 
    能判断一个对象是否是后面那个构造函数生成的对象
    但 instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true
  - Array.isArray()
    传入一个参数 若为数组返回true 如果不是返回false
    当传入的为Array.prototype是也会返回true
  - typeof()
    可以判断出基础数据类型，除了会将null判断为object；
    无法判断分辨出引用类型，除了能正确将function判断为function

22. 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
  - 重绘：由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的
  - 回流：回流是布局或者几何属性需要改变就称为回流，大部分的回流将导致页面的重新渲染。
  优化：尽量减少重绘和回流对性能的消耗
  - 减少下面属性的使用：
    offsetTop、offsetLeft、offsetWidth、offsetHeight
    scrollTop、scrollLeft、scrollWidth、scrollHeight
    clientTop、clientLeft、clientWidth、clientHeight
    width、height
    getComputedStyle()
    getBoundingClientRect()
  - HTML、CSS方面:
    1. 用visilablely替换display: none
    2. 用 transform 替代 top
    3. 避免使用table布局
    4. 对于 HTML 来说也尽量少的添加无意义标签，保证层级扁平。
    5. 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
    将动画效果应用到position属性为absolute或fixed的元素上，避免影响其他元素的布局，这样只是一个重绘，而不是回流，同时，控制动画速度可以选择 requestAnimationFrame，详见探讨 requestAnimationFrame。
    6. 避免使用CSS表达式，可能会引发回流。
    7. 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点，例如will-change、video、iframe等标签，浏览器会自动将该节点变为图层。
    8. CSS3 硬件加速（GPU加速），使用css3硬件加速，可以让transform、opacity、filters这些动画不会引起回流重绘 。但是对于动画的其它属性，比如background-color这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。

  - js方面：
    1. 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
    2. 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
    3. 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
    
23. 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
  - 观察者模式: 在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。
  例如你想买房，可新的一期楼盘卖完了，售楼人员就和你这类想买房的人说：等新的楼盘开始开盘了，我会通知你们
  这样买房的这些人就是观察者

  - 订阅发布模式：
  助第三方来实现调度的，发布者和订阅者之间互不感知
  在发布-订阅模式，消息的发送方，叫做发布者（publishers），消息不会直接发送给特定的接收者，叫做订阅者。
  发布者和订阅者不知道对方的存在。需要一个第三方组件，叫做信息中介，它将订阅者和发布者串联起来，它过滤和分配所有输入的消息。

  还是上一个例子，买房的人可以是订阅者，订阅楼盘开盘的消息，发布者这是楼盘老板，而售楼人员是中间的信息中介，会将楼盘开盘的消息告知订阅者

  - 适用场景：
    观察者模式：
      vue中的watcher、computed
      数据响应式
    订阅发布模式：
      父子组件通信
      传递给另一方组件

24. 聊聊 Redux 和 Vuex 的设计思想
    Redux： view——>actions——>reducer——>state变化——>view变化（同步异步一样）
    Vuex： view——>commit——>mutations——>state变化——>view变化（同步操作） view——>dispatch——>actions——>mutations——>state变化——>view变化（异步操作）

25. 说说浏览器和 Node 事件循环的区别

26. 介绍模块化发展历程
  可从IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、```<script type="module">``` 这几个角度考虑。
  模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突
  - IIFE： 自执行函数 隔离了作用域，避免冲突
  - CMD: 支持同步引入和异步引入
  - CommonJS：node中引入模块：require('路径') ； 抛出模块：module.exports = value、exports.xxx = value
  - ES6：引入 import xxx from 'xxx' ；抛出：export default xxx
  https://www.processon.com/view/link/5c8409bbe4b02b2ce492286a#outline

27. 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？
  在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中
  定义变量的块级作用域中就能获取

28. cookie 和 token 都存放在 header 中，为什么不会劫持 token？

29. 聊聊 Vue 的双向数据绑定，Model 如何改变 View，View 又是如何改变 Model 的
  - v-model 只能作用于一些特定的表单标签如input、select、textarea和自定义的组件使用
  从v-model绑定在input上开始描述
  主要实现：
  1. 在created函数时，传入el为这个input节点的dom对象，和第二个参数binding对象，以及第三个参数vnode为节点的vnode对象
  函数首先会把v-model绑定的值赋值给el.value，这个就是数据到DOM的单向流动
  2. 通过定义一个getModelAssigner方法来获取vnode.props中的'onUpdate: modelValue'属性对应的函数，并赋值给el._assign属性
  3. 最后通过addEventListener来监听input标签的事件，它会根据是否配置lazy这个修饰符来决定监听的是input还是change事件
  4. 这个事件监听函数，当用户手动输入一些数据，触发事件的时候，会执行函数，并通过 el.value 获取 input 标签新的值，然后调用 el._assign 方法更新数据，这就是DOM到数据的流动
  以上便实现了双向流动

30. 两个数组合并成一个数组
    请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。

    ```
    let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
    let a2 = ['A', 'B', 'C', 'D'].map((item) => {
      return item + 3
    })
    let a3 = [...a1, ...a2].sort().map((item) => {
      if(item.includes('3')){
        return item.split('')[0]
      }
      return item
    })

    ```

31. 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法。
  ```
    for (var i = 0; i< 10; i++){
      setTimeout((i) => {
        console.log(i)
      }, 1000, i)
    }
  ```

32. Virtual DOM 真的比操作原生 DOM 快吗？谈谈你的想法。

33. 
  ```
  var b = 10;
  (function b(){
      b = 20;
      console.log(b); 
  })();
  ```
  报错，此时IIFE函数是一个单独的作用域，它会立即执行，无法访问到外部的b，所以b=20 这行代码会报错

34. 改造 分别打印 10 和 20 
  var b = 10;
  (function b(b){
      console.log(b)
      b = 20;
      console.log(b); 
  })(b);

35. 浏览器缓存读取规则
  可以分成 Service Worker、Memory Cache、Disk Cache 和 Push Cache，那请求的时候 from memory cache 和 from disk cache 的依据是什么，哪些数据什么时候存放在 Memory Cache 和 Disk Cache中？

36. 使用迭代的方式实现 flatten 函数。
  ```
  const myflatten = function(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        newArr = newArr.concat(myflatten(arr[i]))
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  ```
37. 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？


38. 下面代码中 a 在什么情况下会打印 1？
  ```
  var a = [1, 2, 3]
  a.toString = a.shift //重写toString方法
  if(a == 1 && a == 2 && a == 3){ 
    //每次比较 数组都会调用一次toString方法将数组进行隐式转换，只需按顺序从头不开始
    // a.toString = a.shift 第一隐式转换会转化为1 第二次会转换为2 第二次会转换为3
    console.log(1);
  }
  ```

