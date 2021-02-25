// function foo() {
//   var a = 1
//   var b = a
//   a = 2
//   console.log(a); //2
//   console.log(b); //1
// }
// foo()
// function foo2() {
//   var a = { name: '杨宝' }
//   var b = a
//   a.name = '瑞祯'
//   console.log(a);  // { name: '瑞祯' }
//   console.log(b);  // { name: '瑞祯' }
// }
// foo2()
// 深浅拷贝问题 
// 引用数据类型的赋值为一个浅拷贝
// 引用类型的值存储在堆空间中，栈空间中的保存的只是该引用数据类型的地址值
// 此时的a为保存该引用数据类型的地址值，当b=a时，b也被赋予该地址值
// 通过a找到该引用数据类型，对其值进行改变，该引用地址上的引用数据类型值改变了
// 则通过b访问的该引用类型也随之改变


// var bar
// console.log(typeof bar);
// bar = 12
// console.log(typeof bar);
// bar = 'hello'
// console.log(typeof bar);
// bar = true
// console.log(typeof bar);
// bar = null
// console.log(typeof bar);
// bar = {name: '周老板'}
// console.log(typeof bar);
// 8中数据类型：
// 字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
// 对象(Object)
// bigint


function foo() {
  var a = '杨宝'
  var b = a
  var c = { name: '杨宝' }
  var d = c
}
foo()

// 调用栈
// 全局执行上下文 (栈底)
// foo执行上下文
//   变量环境：c=undefined, d=undefined, b='杨宝', a='杨宝' 
//   词法环境：
//   执行到b=a时，此时数据的值都存在栈当中，所以基本数据类型的数据是存储在栈当中的
//   可当执行到 c = { name: '杨宝' } c为一个引用数据类型
//   此时的js引擎会专门开辟一个空间来存储引用数据类型，该空间为堆空间
//   此时的 c 在变量环境(栈空间中)中保存的值，就是该数据在堆中的地址值
//   c具有的是堆空间中该地址所存数据的引用
//   此时的d也被赋予该地址值
// 那么为什么要将该引用数据类型专门存储在堆中呢
//   因为 调用栈的空间有限，都存储在栈中会导致栈溢出
//   把调用栈空间扩大? 行不通，会让执行上下文的切换效率降低，大大影响代码的执行效率


// 再谈闭包
function foo() {
  var myName = '甘总'
  let test1 = 1
  const test2 = 2
  var innerbar = {
    getName: function() {
      console.log(test1);
      return myName
    },
    setName: function(newName) {
      myName = newName
    }
  }
  return innerbar
}
var bar = foo()
bar.setName('杨宝')
console.log(bar.getName());
// 创建出保留有myName，test1值的闭包
// 会保存在堆内存中
// getName 和 setName 依然保存着对myName，test1的引用


// 引用类型深拷贝
// test.js