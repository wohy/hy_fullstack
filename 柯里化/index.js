// function add(a, b) {
//   return a + b
// }
// add(1, 2) //3
// let addCurry = curry(add)
// addCurry(1)(2)  //3


// function ajax(type, url, data) {
//   let xhr = new XMLHttpRequest()
//   xhr.open(type, url, true)
//   xhr.send(data)
// }
// ajax('POST', 'www.test.com', 'name = "wn"')
// ajax('POST', 'www.test1.com', 'name = "wn"')
// ajax('POST', 'www.test2.com', 'name = "wn"')
// // 利用curry改造
// let ajaxCurry = curry(ajax)

// let post = ajaxCurry('POST')
// let postFormTest = post('www.test.com')
// postFormTest('name = "wn"')


// let person = [{name: 'jiushen'}, {name: 'taotao'}]
// let name = person.map(function(item) {
//   return item.name
// })

// let props = curry(function(key, obj) {
//   return obj[key]
// })
// let name2 = person.map(prop('name'))
