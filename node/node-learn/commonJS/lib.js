// console.log('hello world');  // 被lib.js 引入后 终端执行libs将打印 hello world

// 模块化抛出对象
// exports.hello = 'world'  // 被lib.js 引入后 终端执行libs将打印 {hello: world}

// exports.add = function(a, b) {  // 被lib.js 引入后 终端执行libs将打印 {add: Function}
//     return a + b;
// }

// module.exports = function minus(a, b) { // 被lib.js 引入后 终端执行libs将打印 {minus: Function}
//     return a - b;
// }

setTimeout(() => {
    console.log(exports);
}, 1000)