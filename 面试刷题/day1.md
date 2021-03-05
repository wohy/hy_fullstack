链接:https://juejin.cn/post/6844903885488783374

1. 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
- key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。
- 利用key的唯一性生成map对象来获取对应节点，比遍历方式获取更快

2. ['1', '2', '3'].map(parseInt)
返回 [1, NaN, NaN]
- map的第一个参数是一个callback函数 返回的是一个函数处理后的新数组
这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。
- parseInt 处理字符串 
praseInt(1, 0) 1 按10进制处理
praseInt(2, 1) NaN
praseInt(3, 2) NaN

3. 什么是防抖和节流？有什么区别？如何实现？
- 防抖：高频率触发事件，事件只会执行一次，只有在规定时间内没有触发操作，再进行下一次触发，事件才会再次执行
  实现：将要执行的函数的this指向和参数保存下来 并将该函数放在setTimeout中去执行, 若setTimerout为一个箭头函数则可直接传入参数执行该函数，否则需接住apply，绑定好this且将参数传入才能执行该函数。将之前这些操作封装成一个函数返回，创建一个闭包，在外部定义一个timer来保存该定时器，如果在规定的一段时间又触发了一次事件，则将timer清除，事件不执行，又重新开始计时，只有在规定的时间内没有操作，timer累计计时到规定的时间才会执行函数

- 节流：规定的时间内只执行一次
  实现：通过一个闭包来保存上次触犯事件的时间戳，可先让事件执行一次，执行一次事件就更新一次时间戳，当当前时间戳减去上次事件执行的时间戳大于规定时间时，即执行一次事件。事件执行之前要先保存好当前的this和参数arguments，执行是通过apply绑定好该事件的this，并传入参数

4. 介绍下 Set、Map、WeakSet 和 WeakMap 的区别
https://es6.ruanyifeng.com/#docs/set-map
- Set：
  不允许成员重复 
  结构类似数组，只有键值，没有键名
  可遍历
- Map：
  类似一个集合，由键值对组成
  “键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
  可以遍历
- WeakSet：
  成员都是对象
  不重复值的集合
  WeakSet 里面的引用，都不计入垃圾回收机制，避免了内存泄漏问题
  规定不可遍历
- WeakMap:
  没有遍历操作
  无法清空，即不支持clear方法
  统一规定不能取到键名。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了

5. 介绍下深度优先遍历和广度优先遍历，如何实现？
- 深度优先遍历：
  dps
  先序遍历
  从根节点开始，一直想深层递，当访问不到时，再归
  ```
  const dps = function(root) {
    if (!root) return
    console.log(root.value)
    dps(root.left)
    dps(root.right)
  }
  ```
- 广度优先遍历：
  bps
  借助一个队列来做中转，确认整个树都遍历完了，先传入根节点，打印该值，若有左右子树，则先左子树入队，在右子树入队，这样根节点就可出队，一次再左子树作为根节点，出队后，再右子树作为根节点，如此循环直至队为空
  ```
  const bps = function(root) {
    let qeueu = []
    qeueu.push(root)
    while(qeueu.length) {
      const top = qeueu[0]
      console.log(top.value)
      if(top.left) {
        queue.push(top.left)
      }
      if(top.right) {
        queue.push(top.right)
      }
      queue.shift()
    }
  }
  ```

6. 请分别用深度优先思想和广度优先思想实现一个拷贝函数

7. ES5/ES6 的继承除了写法以外还有什么区别？
- ES6通过class继承
- ES6的代码是在严格模式下的
- class里的方法 没有prototype属性 也不能被枚举
- class创建的类 必须要 new 调用 再使用是要里面的方法，访问里面的属性

8. setTimeout、Promise、Async/Await 的区别？
- setTimeout 中要执行的操作会进入到宏任务队列中
- Promise 中的代码会认为是同步的 只有其后接的.then()中要执行的操作会到微任务队列中
- Async/Await Await前的代码会认为是同步的，遇到了await时，会将await后面的表达式执行一遍，await下一行的代码执行的操作会到微任务队列中




9. Async/Await 如何通过同步的方式实现异步？


10. js 里的 event-loop
  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7