// function foo () {
//     var a = 123   
// }
// foo()
// console.log(a);  //erro  报错：a未定义

// var a = 2;
// (function() {
//     var a = 3;
//     console.log(a);  // 3
// })()  // 匿名函数自执行，减少全局变量污染。自执行函数会编译成一个表达式
// console.log(a);     //2

//块集作用域
// for (var i = 0; i < 10; i++) {  //这是for语句上的变量i为全局变量
//     console.log(i);  //打印 0-9
// }
// console.log(i); //10
// // 当将var 改为 let 时，将无法打印出10

// console.log(a)  //打印undefined ,而非报错erro，因为var a 变量声明，声明提升了
// var a = 2
// var 改为let 或 const, console.log(a) 将报错，创建出的块集作用域中定义的变量仅在该变量中生效