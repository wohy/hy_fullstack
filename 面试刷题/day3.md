39. 介绍下 BFC 及其应用
  - 快格式上下文
    具有 BFC 特性的元素, 可以看作是隔离了的独立容器, 容器里面的元素不会在布局上影响到外面的元素, 并且 BFC 具有普通容器所没有的一些特性。
  - 应用：
    1. 清除浮动 
    2. 创建新的 BFC 避免两个相邻 <div> 之间的 外边距合并 问题
    3. 阻止元素被浮动元素覆盖 
    让浮动内容和周围的内容等高 (overflow: auto、display: flow-root)
  - 创建BFC
    display: grid / flex / flow-root / table-cell / table类的
    元素的 float 不为 none
    position: absolute / fixed
    

40. 在 Vue 中，子组件为何不可以修改父组件传递的 Prop
  - 为了保证数据的单向流动，便于对数据进行追踪，避免数据混乱
  - 组件执行 initProps 方法的时候，会对 props 进行 defineReactive 操作，传入的第四个参数是自定义的 set 函数，该函数会在触发 props 的 set 方法时执行，当   props 修改了，就会运行这里传入的第四个参数，然后进行判断，如果不是 root 根组件，并且不是 更新子组件 ，那么说明更新的是 props ，所以会警告
  - 如果传入的 props 是基本数据类型，子组件修改父组件传的 props 会警告，并且修改不成功
  如果传入的是引用数据类型，那么修改该引用数据类型的某个属性值时，对应的props 就会修改，并且 vue 不会报警告。

41. 
  ```
  var a = 10;
  (function () {
      console.log(a)
      a = 5
      console.log(window.a)
      var a = 20;
      console.log(a)
  })()
  ```
  代码输出 undefined  10 20 需在浏览器window环境下运行

42. 实现一个 sleep 函数
  比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现
  ```
  async function sleep(delay) {
    await ((delay) => {
      return new Promise((resolve, reject) =>{
        setTimeout(() =>{
          resolve('ok')
        }, delay)
      })
    })(delay)
  }

  sleep(5000)
  ```

43. 使用 sort() 对数组 [3, 15, 8, 29, 102, 22] 进行排序，输出结果
  sort排序会将要被排序的元素都是视为一个字符串，则将元素才开从最高位开始比
  最高位为 1 的最小，依次比较第二高位
  即比较字符串中字符的UTF-16编码顺序来进行排序。
  [ 102, 15, 22, 29, 3, 8 ]

44. 介绍 HTTPS 握手过程
  SSL 或 TLS 握手建立了用于客户端和服务端通信的秘钥。
  - SSL/TLS协议的基本过程是这样的：(前两步为握手)
    1. 客户端向服务器端索要并验证公钥。
    2. 双方协商生成"对话密钥"。
    3. 双方采用"对话密钥"进行加密通信。

  - 较详细握手操作：
    1. 客户端 使用 https 的 url 访问 web 服务器,要求与服务器建立 ssl 连接
    2. web服务器 收到 客户端 请求后, 会将 网站的证书 (包含公钥) 传送一份给 客户端
    3. 客户端 收到 网站证书 后会 检查证书的颁发机构 以及 过期时间, 如果没有问题就随机产生一个 秘钥
    4. 客户端 利用 公钥 将 会话秘钥 加密, 并传送给 服务端, 服务端 利用自己的 私钥 解密出 会话秘钥

45. HTTPS 握手过程中，客户端如何验证证书的合法性
  1. 校验证书的颁发机构是否受客户端信任。
  2. 通过 CRL 或 OCSP 的方式校验证书是否被吊销。
  3. 对比系统时间，校验证书是否在有效期内。
  4. 通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。

46. 
  ```
  var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
  }
  obj.push(1)
  obj.push(2)
  console.log(obj)
  ```
  打印：[ empty*2, 1, 2, aplice: f, push: f ]
  解释：打印了一个类数组，有 length 属性 和 splice 方法
  push第一个1时，类数组第 '2' 个数字变为1，length会加1
  push第二个2时，类数组第 '3' 个数字变为4，length会加1
  没有定义下标为0 1 的数，前两位为empty


47. 双向绑定和 vuex 是否冲突
  在严格模式下，当 v-model 绑定的是 vuex store中的数据时，页面想要通过v-model 改变该数据，可这个改变没有在 mutation 中进行，则会报错，

48. call 和 apply 的区别是什么，哪个性能更好一些
  - 区别: 参数不同 除第一个参数外，apply的传入的第二个及之后的参数会放在在一个类数组中，再将这个类数组传给要执行的函数，而 call 就直接将参数不做处理传给函数
  这样函数在接收到 apply 传进的参数时，使用参数还需对参数做进一步处理，从这点上看，call的性能更好些，但也视场景而定


47. 为什么通常在发送 数据埋点请求 的时候使用的是 1x1 像素的透明 gif 图片？
  1. 能够完成整个 HTTP 请求+响应（尽管不需要响应内容）
  2. 触发 GET 请求之后不需要获取和处理数据、服务器也不需要发送数据
  3. 跨域友好
  4. 执行过程无阻塞 (用户体验更好) (不会阻塞页面加载，而影响用户的体验)
  5. 相比 XMLHttpRequest 对象发送 GET 请求，性能上更好
  6. GIF的最低合法体积最小（最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节）

50. 实现 (5).add(3).minus(2) 功能。
  ```
  Number.prototype.add = function(number) {
    return this + number
  }
  Number.prototype.minus = function(number) {
    return this - number
  }
  ```
  5 new Number 构造出来的
  在构造出的number的类型的元素将会有继承原型上的add minus方法

51. Vue 的响应式原理中 Object.defineProperty 有什么缺陷？
  1. Object.defineProperty 进行数据拦截，需要传入一个需要进行拦截的对象，和该对象中具体需要拦截的属性，若该对象嵌套较深，而需要拦截的属性也在叫深层，这样要使用 Object.defineProperty 会导致需要 遍历 需要拦截的属性所在的整个对象，要拦截的属性多时，需要定义更多的 Object.defineProperty
  2. Object.defineProperty 无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应
  而使用 proxy 则只需传入需要拦截的对象，具体需要拦截的数据，可以通过定义里面的getter setter来决定，操作起来很方便，还能代理数组，还可以代理动态增加的属性

52. 怎么让一个 div 水平垂直居中
  - 父容器 相对定位 
    子容器绝对定位
    子容器通过调节 top 和 left 等来居中
  -  弹性布局
    ```
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ```
  - 行内元素 高度 等于 行高
  - p 标签 文本居中 垂直居中
 
53. 
  ```
    var a = {n: 1};
    var b = a;
    a.x = a = {n: 2};

    console.log(a.x) 	
    console.log(b.x)
  ```
  化解： 
    var a, b
    a = {n: 1}
    b = a
    a.x = {n: 2} 
    // 此时b 和 a 所指向的地址会多一个值为 {n: 2} 的 x 属性，则b.x 为 {n: 2}

    a = {n: 2} // a 所指的地址改变了 此时 a 便没有x属性
  输出：undefined {n:2}

54. 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
  双重for遍历 拿到当前值，逐一与之后的值比较大小
  时间复杂度 O(n2)
  改进：加一个 flag，若内层for循环中，数据位置变了则flag改为true，若内层一次循环结束flag的值依然为false 则位置不在发生变化了，说明之后的有序了，直接返回，退出循环

55. 某公司 1 到 12 月份的销售额存在一个对象里面
如下：{1:222, 2:123, 5:888}，请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

  ```
  let obj = {1:222, 2:123, 5:888}

  let arr = Array.from({length: 12}).map((_, index) => obj[index + 1] || null)

  console.log(arr);
  ```

56. 要求设计 LazyMan 类，实现以下功能
  ```  
  LazyMan('Tony');
  // Hi I am Tony

  LazyMan('Tony').sleep(10).eat('lunch');
  // Hi I am Tony
  // 等待了10秒...
  // I am eating lunch

  LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
  // Hi I am Tony
  // I am eating lunch
  // 等待了10秒...
  // I am eating diner

  LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  // Hi I am Tony
  // 等待了5秒...
  // I am eating lunch
  // I am eating dinner
  // 等待了10秒...
  // I am eating junk food
  ```
  ```
  class LazyManClass {
    constructor(name) {
      this.taskList = [];
      this.name = name;
      console.log(`Hi I am ${this.name}`);
      setTimeout(() => {
        this.next();
      }, 0);
    }
    eat(name) {
      var that = this;
      var fn = (function (n) {
        return function () {
          console.log(`I am eating ${n}`)
          that.next();
        }
      })(name);
      this.taskList.push(fn);
      return this;
    }
    sleepFirst(time) {
      var that = this;
      var fn = (function (t) {
        return function () {
          setTimeout(() => {
            console.log(`等待了${t}秒...`)
            that.next();
          }, t * 1000);
        }
      })(time);
      this.taskList.unshift(fn);
      return this;
    }
    sleep(time) {
      var that = this
      var fn = (function (t) {
        return function () {
          setTimeout(() => {
            console.log(`等待了${t}秒...`)
            that.next();
          }, t * 1000);
        }
      })(time);
      this.taskList.push(fn);
      return this;
    }
    next() {
      var fn = this.taskList.shift();
      fn && fn();
    }
  }
  function LazyMan(name) {
    return new LazyManClass(name);
  }
  LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');

  ```


57. 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场 景。
  1. 结构上:
  display: none 会让元素完全从渲染树中消失, 渲染的时候不占据任何空间, 不能点击.
  visibility: hidden 不会让元素从渲染树消失, 渲染元素继续占据空间, 只是内容不可见, 不能点击.
  opacity: 0 不会让元素从渲染树消失, 渲染元素继续占据空间, 只是内容不可见, 可以点击.

  2. 继承性:
  display: none 和 opacity: 0 是非继承属性, 子孙节点消失由于元素从渲染树消失造成, 通过修改子孙节点属性无法显示.
  visibility: hidden 是继承属性, 子孙节点消失是由于继承了 visibility: hidden, 通过设置 visibility: visible 可以让子孙节点显式.

  3. 性能:
  display: none 修改元素会造成文档回流, 读屏器不会读取元素内容, 性能消耗较大.
  visibility: hidden 修改元素只会造成本元素的重绘, 读屏器会读取元素内容, 性能消耗较少.
  opacity: 0 修改元素会造成重绘, 性能消耗较少.

58. 箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？
  - 站在箭头函数的角度
    1. 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

    2. 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

    3. 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

    4. 不可以使用 new 命令，因为：
      没有自己的 this，无法调用 call，apply。
      没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__  


