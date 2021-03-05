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

我们知道Promise中的异步体现在then和catch中，所以写在Promise中的代码是被当做同步任务立即执行的。而在async/await中，在出现await出现之前，其中的代码也是立即执行的

执行顺序：
1. 首先执行同步代码，同步代码也是属于宏任务的
2. 同步代码执行完后，全局任务就执行完毕了，执行栈就为空了，此时就会去查看是否有异步代码要执，异步代码也会分为两个部分，宏任务队列(setTimeout队列...等)和微任务队列(promise队列等)中的代码
3. 每次执行完一个宏任务之后，会去检查是否存在 Microtasks(微任务)；如果有，则执行 Microtasks 直至清空 Microtask Queue。
3. 执行完所有的微任务
4. 但所有的微任务执行完后，有必要的情况下页面会开始渲染
5. 然后开始下一轮的Event-Loop，依旧从宏任务队列开始
此时宏任务中的有异步代码(setTimeout, setInterval等)，则也开始执行