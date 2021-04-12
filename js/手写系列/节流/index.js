// 触发高频率事件，且 N 秒内只执行一次

// 初级版 立即执行一次，然后每 N 秒执行一次
function throttle(func, wait) {
  let context, args;
  let previous = 0;
  return function() {
    let now = +new Date();
    context = this;
    args = arguments;
    if(now - previous > wait) {
      func.apply(context, args);
      previous = now
    }
  }
}

// 最终版
// 支持取消节流；另外通过传入第三个参数
// options.leading 来表示是否可以立即执行一次
// options.trailing 来表示结束调用的时候，是否还要执行一次
// 默认都为 true
// 注意不能 把 options.trailing 和 options.leading 都设置为 false

function throttle1 (func, wait, options) {
  let timeout, context, args, result;
  let previous = 0;
  if(!options) options = {};

  let later = function() {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if(!timeout) context = args = null;
  };

  let throttled = function() {
    let now = new Date.getTime();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null
  }

  return throttled

}