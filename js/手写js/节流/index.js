//在规定的时间内只触发一次

function throttle(fn, delay) {
  let prev = Date.now() - delay //从1970年到现在隔了多少秒 减delay第一次可出现效果 之后更新了prev的值必须每隔delay秒才会出现效果 上次点击的时间 闭包使这个prev不会被释放 可保存上一次的时间
  return function () {
    let now = Date.now() //这一次点击的时间戳
    let arg = arguments
    let context = this
    if (now - prev >= delay) {
      fn.apply(context, arg)
      prev = Date.now() //将prev更新为这次点击的时间 记录下来
    }
  }
}