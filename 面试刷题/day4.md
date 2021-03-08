59. 给定两个数组，写一个方法来计算它们的交集。



60. 已知如下代码，如何修改才能让图片宽度为 300px ？注意下面代码不可修改。
<img src="1.jpg" style="width:480px!important;”>
  ```
  max-width: 300px;
  ```
  ```
  box-sizing: border-box;
  padding: 0 90px;
  ```

61. 介绍下如何实现 token 加密
  JWT
  1. 首先生成一个随机数
  2. 将随机数通过加密算法进行加密
  3. 前端每次向后端发送请求时，都在请求头加上token字段
  4. 后端接收到该字段，以相同的加密算法，对token进行解密

62. redux 为什么要把 reducer 设计成纯函数
  因为将 reducer 设计为一个存函数， storeCreate 中接收的是一个 reducer 回调函数，此时 reducer 就相当于给 store 打工一样，此时 reducer 和 store 的数据流也可双向互通，这是 页面通过 store.dispatch 传给 store 的数据(state, action)，reducer 也可直接访问到

63. 如何设计实现无缝轮播

64. 模拟实现一个 Promise.finally
  ```
  window.Promise && !('finally' in Promise) && !function() {        
    Promise.prototype.finally = function(cb) {
      cb = typeof cb === 'function' ? cb : function() {};
        
      var Fn = this.constructor;  // 获取当前实例构造函数的引用

      // 接受状态：返回数据
      var onFulfilled = function(data) {
        return Fn.resolve(cb()).then(function() {
          return data
        })
      };

      // 拒绝状态：抛出错误
      var onRejected = function(err) {
        return Fn.resolve(cb()).then(function() {
          throw err
        })
      };

      return this.then(onFulfilled, onRejected);
    }
  }();
  ```

65. a.b.c.d 和 a['b']['c']['d']，哪个性能更高？
  a.b.c.d 性能高，a.b.c.d 可以直接取到该对象下的属性的值，而 a['b']['c']['d'] 中，其 [] 中的数据类型不确定，还需要判断

66. ES6 代码转成 ES5 代码的实现思路是什么
  Babel 是如何把 ES6 转成 ES5 呢，其大致分为三步：
    1. 将代码字符串解析成抽象语法树，即所谓的 AST
    2. 对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成 ES5 代码
    3. 根据处理后的 AST 再生成代码字符串

67. 数组编程题
  随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
  ```
    // 得到一个两数之间的随机整数，包括两个数在内
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }
    // 随机生成10个整数数组, 排序, 去重
    let initArr = Array.from({ length: 10 }, (v) => { return getRandomIntInclusive(0, 99) });
    initArr.sort((a,b) => { return a - b });
    initArr = [...(new Set(initArr))];

    // 放入hash表
    let obj = {};
    initArr.map((i) => {
        const intNum = Math.floor(i/10);
        if (!obj[intNum]) obj[intNum] = [];
        obj[intNum].push(i);
    })

    // 输出结果
    const resArr = [];
    for(let i in obj) {
        resArr.push(obj[i]);
    }
    console.log(resArr);
  ```

68. 如何解决移动端 Retina 屏 1px 像素问题
  https://juejin.cn/post/6844903456717668359
  1. background-image 跟border-image的方法一样，你要先准备一张符合你要求的图片。然后将边框模拟在背景上。
  2. 与background-image方案类似，只是将图片替换为css3渐变。设置1px的渐变背景，50%有颜色，50%透明。
  3. 利用css 对阴影处理的方式实现0.5px的效果
  .box-shadow-1px {
    box-shadow: inset 0px -1px 1px -1px #c8c7cc;
  }
  4. 同时通过设置对应viewport的rem基准值，这种方式就可以像以前一样轻松愉快的写1px了。
  在devicePixelRatio = 2 时，输出viewport：

69.  如何把一个字符串的大小写取反（大写变小写小写变大写），例如 'AbC' 变成 'aBc' 。
  ```
  function processString (s) {
    var arr = s.split('');
    var new_arr = arr.map((item) => {
        return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
    });
    return new_arr.join('');
  }
  console.log(processString('AbC'));
  ```

70. 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的
  简单来说就是：hot-module-replacement-plugin 包给 webpack-dev-server 提供了热更新的能力，它们两者是结合使用的，单独写两个包也是出于功能的解耦来考虑的。
  1. webpack-dev-server(WDS)的功能提供 bundle server的能力，就是生成的 bundle.js 文件可以通过 localhost://xxx 的方式去访问，另外 WDS 也提供 livereload(浏览器的自动刷新)。
  2. hot-module-replacement-plugin 的作用是提供 HMR 的 runtime，并且将 runtime 注入到 bundle.js 代码里面去。一旦磁盘里面的文件修改，那么 HMR server 会将有修改的 js module 信息发送给 HMR runtime，然后 HMR runtime 去局部更新页面的代码。因此这种方式可以不用刷新浏览器。

71. 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
  通过split('')转为数组，遍 S 当匹配到 与 T 的第一个元素相同的元素时，从该位置开始，截取到长为 m 的数组下来，与 T 进行对比，不行在再回到原位置往后查询与 T 的第一个元素相同的位置，截取 m 长度下来，比较，一次类推

  // 因为 T 的 length 是一定的，所以在循环S的的时候 ，循环当前项 i 后面至少还有 T.length 个元素
  ```
  const find = (S, T) => {
    if (S.length < T.length) return -1;
    for (let i = 0; i < S.length - T.length ; i++) {
        if (S.substr(i, T.length) === T) return i ;
    };
    return -1;
  };
  ```

72. 为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。
  - forEach 实际上为
    Array.forEach(function(currentValue, index, arr), thisValue)
  它不是普通的 for 循环的语法糖，还有诸多参数和上下文需要在执行的时候考虑进来，这里可能拖慢性能；
  其实实际测试时，在数据量在万这个量级时，forEach 的执行所需要的时间会更短些
  
73.  介绍下 BFC、IFC、GFC 和 FFC

74. 使用 JavaScript Proxy 实现简单的数据绑定
  ```
   let person = {
        name:'jesse',
        age:25
    }
    let proxy = new Proxy(person,{
        get(target,prop){
            console.log('get')
            return target[prop]
        },
        set(obj,prop,value){
            if(value>=30){
                throw new Error('invalid')
            }
            obj[prop] = value
        }
    })
    console.log(proxy.name) //get jesse
    proxy.age = 30   //Uncaught Error: invalid
  ```

75. 数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少
  数组可以直接根据索引取的对应的元素，所以不管取哪个位置的元素的时间复杂度都是 O(1)

  得出结论：消耗时间几乎一致，差异可以忽略不计

76. 
  ```
  var a={}, b='123', c=123;  
  a[b]='b'; // a['123'] = 'b'
  a[c]='c'; // a['123'] = 'c' 将 'b' 覆盖 
  console.log(a[b]);
  // 打印： 'c'
  ---------------------
  // example 2
  var a={}, b=Symbol('123'), c=Symbol('123');  
  a[b]='b';
  a[c]='c';  
  console.log(a[b]);
  //打印：'b'
  ---------------------
  // example 3
  var a={}, b={key:'123'}, c={key:'456'};  
  a[b]='b'; // a['[object Object]'] = 'b'
  a[c]='c';  // a['[object Object]'] = 'c'
  console.log(a[b]);
  //打印 'c'
  ```
  对象的键名只能是字符串和 Symbol 类型。
  其他类型的键名会被转换成字符串类型。
  对象转字符串默认会调用 toString 方法。

77. 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

78. Vue 的父组件和子组件生命周期钩子执行顺序是什么
  - 加载渲染过程
    父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
  - 子组件更新过程
    父beforeUpdate->子beforeUpdate->子updated->父updated
  - 父组件更新过程
    父beforeUpdate->父updated
  - 销毁过程
    父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

79. input 搜索如何防抖，如何处理中文输入
  ```
  <input
  ref="input"
  @compositionstart="handleComposition"
  @compositionupdate="handleComposition"
  @compositionend="handleComposition"
  > 
  ```
  这3个方法是原生的方法，这里简单介绍下，官方定义如下:
  - compositionstart 事件触发于一段文字的输入之前（类似于 keydown 事件，但是该事件仅在若干可见字符的输入之前，而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）

  1. 打拼音时(此时input内还没有填入真正的内容)，会首先触发compositionstart，然后每打一个拼音字母，触发compositionupdate，
  2. 最后将输入好的中文填入input中时触发compositionend。触发compositionstart时，文本框会填入 “虚拟文本”（待确认文本），同时触发input事件；
  3. 在触发compositionend时，就是填入实际内容后（已确认文本）,所以这里如果不想触发input事件的话就得设置一个bool变量来控制。

