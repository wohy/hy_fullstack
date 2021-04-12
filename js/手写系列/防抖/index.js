// 防抖：触发高频事件 N 秒后只会执行一次
// 若 N 秒内重复触发，则会从新计时，即 clearTimeout 将以前的 setTimeout 给去除掉然后重新定义一个 setTimeout，重新开始计时
// 防抖函数返回的是被防抖绑定后的一个函数，这个函数才是正真的事件触发后会执行的函数

// 初级版
function debounce(func, delay) {
  let timeout
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, delay)
  }
}

// 最终版
// 支持立即执行函数
// 函数可能有返回值
// 支持取消功能
function debounce1(func, delay, immediate) {
  let timeout, reslut;
  let debounced = function() {
    let context = this;
    let args = arguments;
    if (immediate) {

      // 如果 此时的 timeout 为 NULL 的话，callNow 就为 true 则会立即执行函数
      // 重新触发函数后，!timeout 会变为 false，函数就不会立即执行，而会 走到 else 中去 重新定义一个timeout
      let callNow = !timeout;

      timeout = setTimeout(function() {
        timeout = null;
      }, delay)

      if (callNow) {
        reslut = func.apply(context, args)
      } else {
        timeout = setTimeout(function() {
          func.apply(context, args)
        }, delay)
      }

      return reslut;
    }
  };

  // 取消
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  }

  return debounced;
}

