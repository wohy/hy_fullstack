let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github'); //yield后面的表达式执行返回的值(此处即fetch的返回值) 会给到yield返回的对象的value属性上去
  // let json1 = yield r1.json()
  
  let r3 = yield fetch('https://api.github.com/users/github/repos');
  // let json2 = yield r2.json()
  
  let r2 = yield fetch('https://api.github.com/users/github/followers');
  // let json3 = yield r3.json()

  console.log([r1.bio, r2[0].login, r3[0].full_name].join('\n')); //join 以什么间隔连接在一起
}

let g = gen()
let result1 = g.next()

// result1.value.then(function(data) {  //data 拿到第一个fetch的执行结果
// console.log(data);
//   return data.json()
// }).then(function(data) {
//   return g.next(data).value  //执行第二个fetch表达值 next() 指针移到下一个yield
// }).then(function(data) {
//   return data.json()  //data. 拿到第二个fetch的执行结果 .json() json格式化一下
// }).then(function(data) {
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   g.next(data)
// })

// 递归
function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)

    if (result.done) return

    result.value.then(function(data) {
      return data.json()
    }).then(function(data) {
      next(data)
    })
  }
  next()
}
run(gen)