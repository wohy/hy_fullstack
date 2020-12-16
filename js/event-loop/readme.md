# 进程与线程的区别
- 进程：CPU在运行指令及加载和保存上下文所需要的时间，即指令从写入到执行完毕所有耗时
- 线程：是进程中更小的单位，描述了执行一段指令所需要的时间 
- js为单线程语言，一段时间中只能让一个线程工作

# JS单线程带来什么好处
1. 节约资源，节省内存
2. 更安全的渲染，避免冲突

# 执行栈
执行栈可以认为是一个存储函数调用的栈结构

# Event Loop  js中的时间执行机制
- 微任务包含的东西：process.nextTick, promise的.then(), MutationOvserver
- 宏任务：script, setTimeout, setInterval, setImmediate, I/O, UI-rendering

执行顺序：
1. 首先执行同步代码，同步代码也是属于宏任务的
2. 同步代码执行完后，执行栈就为空了，此时就会去查看是否有异步代码要执，异步代码也会分为两个部分，宏任务队列和微任务队列中的代码
3. 执行完所有的微任务
4. 但所有的微任务执行完后，有必要的情况下页面会开始渲染
5. 然后开始下一轮的Event-Loop，执行宏任务中的异步代码