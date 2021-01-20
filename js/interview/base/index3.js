// function A() {
//     let a = 1
//     window.B = function() {
//         console.log(a);
//     }
// }
// A()
// B()   // 1 闭包使其能间接访问到函数内部的变量，垃圾回收机制在A执行后并无法回收A的AO，则把变量a及其值都将保留下来

for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i*1000)  //异步函数 不会立即执行，先执行同步代码，这时for循环先会执行完，由于什么var使声明提升，全局上会有一个i，循环执行完此时的i的值为6，for执行完1s后才会开始执行函数，而此时的i一直都为6，则会打印5个6
}

// 解决方法

// 1. 把var 改成 let 
// 2. 利用回调函数
// for (var i = 1; i <= 5; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(j);  // j 不会被垃圾回收机制回收，值会保留下来
//         }, j*1000)
//     })(i)  //自执行函数接收一个实参i
// }

// 3.利用定时器的第三个参数，即作为定时器回调函数的实参
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer(j) {
//         console.log(j);
//     }, j*1000, i)
// }
