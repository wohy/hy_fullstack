   async function async1() {
    console.log('async1 start');
    await async2();
   }
   async function async2() {
    console.log('async2 start');
    return new Promise((resolve, reject) => {
     resolve();
     console.log('async2 promise');
    })
   }
   console.log('script start');
   setTimeout(function() {  //去到宏任务队列
    console.log('setTimeout');
   }, 0);  
   async1();
   new Promise(function(resolve) {
    console.log('promise1');
    resolve();
   }).then(function() {
    console.log('promise2');  //去到微任务队列
   }).then(function() {
    console.log('promise3');  //去到微任务队列
   });
   console.log('script end');
   //script start, async1 start, async2 start, async2 promise
   //promise1, script end, promise2, promise3, setTimeout



   
// console.log(1);
// async function bar() {
//   await fn()  // bar开始执行后，fn()会立即执行
//   console.log(6);  // 会被阻塞 会到异步中的 微任务队列
// }
// function fn() {
//   console.log(7);
// }
// function foo() {
//   return new Promise((resolve) => {
//     console.log(2);
//     resolve()
//   })
// }
// bar()
// console.log(3);

// foo().then(() => {   //Promise不会使语句变为异步的，不影响函数的执行，只是给函数一个.then()的能力。此时.then()中的语句才是异步的
//   console.log(4);  // 微任务队列
// })
// console.log(5);  // 1732564  微任务队列先进先出，则6会先打印出来
