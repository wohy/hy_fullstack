// 1. async 函数在声明形式上跟普通的函数没有区别，函数声明，函数表达式，
// 对象方法，class方法，箭头函数都可以声明async函数

// 2. 任何一个await语句后面的Promise对象变成reject状态，那么整个async函数都会中断，await后面的代码会放到返回的Promise对象的.then里面执行

// 3. async函数返回Promise对象，必须等到内部所有的await命令后面的Promise对象执行完，才会发生状态
// 改变，除非遇到return

// promise resolve出来的值会给到.then()，reject出来的值会给到.catch()抛出异常