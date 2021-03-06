let fetch = require('node-fetch')

function* gen() {  //创建一个generator函数 gen
  let r1 = yield fetch('https://api.github.com/users/github');
  let json1 = yield r1.json()

  let r2 = yield fetch('https://api.github.com/users/github/followers');
  let json2 = yield r2.json()

  let r3 = yield fetch('https://api.github.com/users/github/repos');
  let json3 = yield r3.json()
  
  console.log([json1.bio, json2.documentation_url, json3.message].join('\n'));
}

// let g = gen()  //遍历器对象
// let result1 = g.next()  
//执行异步任务的第一阶段 fetch(url) 返回一个Promise对象 { value: Promise { <Pending> }, done: false }
// result1.value.then(function(data) {
//   return data.json()
// }).then(function(data) {
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   return g.next(data).value
// }).then(function(data) {
//   return data.json()
// }).then(function(data) {
//   g.next(data)
// })

function run(gen) {
  let g = gen()
  function next(data) {
    let result = g.next(data)

    if (result.done) return

    result.value.then(function(data) {
      next(data)
    })
  }
  next()
}
run(gen)

