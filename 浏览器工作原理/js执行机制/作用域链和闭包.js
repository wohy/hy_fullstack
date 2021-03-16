// 作用域链
// function bar() {
//   console.log(myName);
// }
// function foo() {
//   var myName = '蜗牛'
//   bar()
// }
// var myName = '周老板'
// foo()
// 构建调用栈
// 全局执行上下文入栈
  // 变量环境：myName='周老板'
  // 词法环境：
// foo函数执行上下文入栈
  // 变量环境：myName='蜗牛'
  // 词法环境
// bar函数执行上下文入栈
  // 变量环境：
  // 词法环境：
  // 执行
  // 出栈
// 每一个执行上下文的变量环境中，都有一个外层执行上下文的引用 outer
// foo bar 的outer都会指向全局执行上下文

// 词法作用域
// bar 和 foo 的上级词法作用域都是全局词法作用域，这样就构成了一条作用域链
// 词法作用域看函数申明位置，不要看在哪调用的


// 块集作用域中变量的查找
// function bar () {
//   var myName = '聪哥'
//   let test1 = 100
//   if(1) {
//     let myName = '陶班长'
//     console.log(test);
//   }
// }
// function foo() {
//   var myName = '酒神'
//   let test = 2
//   {
//     let test = 3
//     bar()
//   }
// }
// var myName = '胡毅'
// let myAge = 10
// let test = 1
// foo()
// 全局执行上下文
  // 变量环境：myName='胡毅', foo, bar, outer
  // 词法环境：myAge=10, test=1
// foo执行上下文
  // 变量环境：myName='酒神', outer
  // 词法环境：test=3, test=2 (栈结构，3在栈顶)
// bar执行上下文
  // 变量环境：myName='聪哥', outer
  // 词法环境：myName='陶班长', test1=100
// 打印test，从自己的词法环境栈顶开始查找，词法环境没找到，
// 到变量环境中查找，变量环境中没有，在通过outer到作用域链上查找
// outer指向的是全局执行上下文，再按相同的逻辑到全局执行上下文中查找，找到test为1


// 闭包
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

// 全局执行上下文
  // 变量环境：bar=undefined，outer=null 
  // 词法环境：
// foo
  // 变量环境：myName='甘总'，innerbar=function(){}
  // 词法环境：test2=2, test1=1
// foo执行完后，foo的执行上下文出栈，可闭包会将foo中使用了的变量作为其产物保留下来
// foo的闭包
  // myName='甘总'，test1=1
  // 执行setName
  // myName='杨宝'
// 则打印 1 杨宝

// 那么什么叫闭包呢?
// 在js中，根据词法作用域的规则，内部的作用域总能访问到外部作用域中声明的变量
// 当通过调用一个外部函数返回一个内部函数后，即使该外部函数已经执行结束，
// 该外部函数的执行上下文将在调用栈中出栈，但其内部的函数引用的外部函数中的变量依然保存在内存中，
// 这些变量便是闭包的产物，这些变量的集合就叫做闭包


function abc() {
  let test = foo()
}

// 闭包是怎么回收的？
//   1. 如果引用闭包的函数是一个全局变量，那么这个闭包就会一直存在，直到页面关闭
//   2. 如果引用闭包的函数是一个局部变量，等函数销毁后，
//   在下一次JavaScript引擎执行垃圾回收时，判断闭包不再使用了，才被垃圾回收

// 所以最好在局部函数中引用闭包