// var 的缺陷，以及为什么引入let 和 const

// 作用域
// 作用域就是变量和函数的可访问范围

// 块级作用域
//   if (1) {}
//   while(1) {}
//   function foo() {}
//   for(let i = 0; i < 200; i++) {}
//   {}

// function foo() {
//   for(var i = 0; i < 7; i++) {

//   }
//   console.log(i); //7
// }
// foo()

function foo() {
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
    console.log(a); //1
    console.log(b); //3
  }
  console.log(b); //2
  console.log(c); //4
  console.log(d); //error
}
foo()
// 创建全局执行上下文
// 内部有一个foo函数的执行上下文
  // 里面会有一个
  // 第一步
  // 变量环境：a=undefined 、c=undefined 
  // 词法环境：b=undefined 
  // var 声明的会到变量环境，let声明的会到词法环境中
  // 函数作用域中嵌套的块集作用域中的let声明不会到词法作用域中，而var声明回到变量环境中

  // 第二步
  // 进入到块集作用域中，执行代码
  // 变量环境：a=1 、c=4 
  // 词法环境：d=5、b=3、b=2
  // 词法环境为一个栈结构
  // console.log(a); 开始执行，从词法环境的栈顶开始向下查找，查找不到，跳到变量环境中查找
  // 同理打印b

  // 第三步
  // 作用域块中的代码执行完后，作用域块中的词法环境会出栈
  // 变量环境：a=1 、c=4 
  // 词法环境：b=2
  // 同理开始打印
