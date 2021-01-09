// 在一定的时间内，如果持续请求，就一直不执行，只有在规定的时间内没有第二次操作才执行
function debounce(fn, delay) {
  // timer不会被垃圾回收机制所清理，会累计时间
  let timer = null

  // 形成一个闭包
  return function() {

    let context = this
    let arg = arguments
    clearTimeout(timer)
    // 箭头函数不会干扰到this
    // timer = setTimeout(() => {
    //   fn(arg)
    // }, delay)

    //当不使用箭头函数时，需防止this的指向发生更改
    timer = setTimeout(function() {
      fn.apply(context, arg)
    }, delay)  
  }

}