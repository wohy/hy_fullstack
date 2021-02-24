// 栈溢出

// 创建出执行上下文的情况
// 1. 当JavaScript执行全局代码的时候，一定会编译全局代码并创建全局执行上下文，并且全局执行上下文只有一份
// 2. 当一个函数被调用函数体内，代码会被编译，创建函数执行上下文(气泡，即作用域)，函数执行结束，创建出来的函数执行上下文会被销毁
// 3. 当使用eval函数时，eval的代码会被编译并创建执行上下文

// 调用栈
// 用来管理函数调用关系的一种数据结构
var a = 2
function add () {
  var b = 10;
  return a + b
}
add()
// js引擎创建出一个全局执行上下文
// 一块变量环境 存放：a = undefined; add = function(){b = 10; return a+b}
// 一块词法环境 存放：
// 代码中全局变量和函数，都是保存在变量环境中
// 函数调用时，到变量环境中取出add，会创建一个add的执行上下文 
var a = 2
function add (b, c) {
  return b + c
}
function addAll (b, c) {
  var d = 10;
  result = add(b, c)
  return a + result + d
}
addAll(3, 6)
// 创建一个调用栈 call stack
// 调用栈中一个全局执行上下文，有一块变量环境、一块词法环境
// addAll调用时，创建出addAll函数的执行上下文，压入调用栈中
// 开始执行函数
// add调用时，再创建add的执行上下文
// 等add执行完后，add的执行上下文出栈
// 继续执行addAll，执行完后，addAll函数的执行上下文出栈

// 栈溢出
// 调用栈是有大小的
function division(a, b) {
  return division(a, b)
}
console.log(division(1, 2));  //出现栈溢出