// let addFun = function() {
//   args = [...arguments]
//   if(args.length === 1) {
//     return args[0]
//   } else {
//     return args.reduce((a, b) => a + b)
//   }
// }

// function curry(cb) {
//   let arg = [].slice.call(arguments, 1)
//   return function() {
//     args = [...arguments].concat(arg)
//     return cb.apply(this, args)
//   }
// }

// let add = curry(addFun)



function add(a) {
  function sum(b) { // 使用闭包
    a = a + b; // 累加
    return sum;
  }
  sum.toString = function() { // 重写toString()方法
      return a;
  }
  return sum; // 返回一个函数
}


console.log(add(1)(4)(3));







