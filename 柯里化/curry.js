function sub_curry(fn) {
  let arg = [].slice.call(arguments, 1)
  return function() {
    let newArgs = arg.concat([...arguments])
    return fn.apply(this, newArgs)
  }
}

function curry(fn, length) {
  // function的length 表示形参的个数
  length = length || fn.length
  // let slice = Array.proptype.slice
  return function() {
    if (arguments.length < length) {//一次性没传完所有的参数
      let combined = [fn].concat([...arguments])
      // 递归调用 sub_curry，返回函数都被 curry 作用，递一次最初参数的长度 length 就减去当次传入的参数 这样直到传入的参数都传完了，即arguments.length = length，就不用再递了
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else { // 一次性传完了参数
      return fn.apply(this, arguments)
    }
  }
}

// function add() {
//   let args = [...arguments]
//   console.log(args.reduce((a, b) => a + b))
// }
// let addCurry = curry(add, 1, 2)

let add = curry(function(a, b, c) {
  console.log(a + b + c)
})
add(2, 2, 3)
add(2)(2)(3)