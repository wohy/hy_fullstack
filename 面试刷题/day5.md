1. 
  var END = Math.pow(2, 53);
  var START = END - 100;
  var count = 0;
  for (var i = START; i <= END; i++) {
      count++;
  }
  console.log(count);
  // 写出正确的打印结果，并解释为什么？
  死循环，因为i的值一定不会end，end已经是 2^53 最大值，所以 2^53 + 1 依然会被认为是 2^53

2. 
  var a = Date(0);
  var b = new Date(0);
  var c = new Date();
  [a === b, b === c, a === c]; 
  执行为[false, false, false] 
  需要注意的是只能通过调用 Date 构造函数来实例化日期对象：
  以常规函数调用它（即不加 new 操作符）将会返回一个字符串，而不是一个日期对象。另外，不像其他JavaScript 类型，Date 对象没有字面量格式。
  则其中a是字符串，b和c是Date对象，但b代表的是1970年那个初始化时间，而c代表的是当前时间。

3. 逗号表达式
  var x = 20;
  var temp = {
      x: 40,
      foo: function() {
          var x = 10;
        console.log(this.x);
      }
  };
  (temp.foo, temp.foo)();
  // 写出打印结果
  20
  逗号操作符，逗号操作符会从左到右计算它的操作数，返回最后一个操作数的值。所以(temp.foo, temp.foo)();等价于var fun = temp.foo; fun();，fun调用时this指向window，所以返回20。

4. 链式调用
  // 实现 (5).add(3).minus(2) 功能
  // console.log((5).add(3).minus(2)); // 6
  ```
    Number.prototype.add = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this + number;
  };
  Number.prototype.minus = function (number) {
    if (typeof number !== 'number') {
        throw new Error('请输入数字～');
    }
    return this - number;
  };
  console.log((5).add(3).minus(2));
  ```

5. var a = 1;        
  (function a () {            
      a = 2;            
      console.log(a);        
  })();

  // 答案
  ƒ a () {            
      a = 2;            
      console.log(a);        
  }
  /*
  立即调用的函数表达式（IIFE） 有一个 自己独立的 作用域，如果函数名称与内部变量名称冲突，就会永远执行函数本身；所以上面的结果输出是函数本身；
  */

6. var a = [0];
  if(a){
      console.log(a == true);
  }else{
      console.log(a);
  }
  打印：false
  
  undefined和null与其它类型进行比较时，结果都为false，他们相互比较时结果为true。