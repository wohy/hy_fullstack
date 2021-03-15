for(var i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i*1000)
}

// 解决
// 立即执行函数 将 i 作为函数传进去
// let i
// 通过 setTimeout 的第三个参数 保留i