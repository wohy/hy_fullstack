function a() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve();
      // reject();
    }, 1000)
  })

}
// 异步 宏任务队列
function b() {
  setTimeout(() => {
    console.log('bbbb');
  })
}

// reslove 完成后 .then 可以生效
// a().then(b)

a().then(
  () => {
    b()                // 默认完成 执行b
  }, 
  () => {
    console.log(123);  //reject 会执行 
  }
)

// 三种状态