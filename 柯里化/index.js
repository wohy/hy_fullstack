function add(a, b) {
  return a + b
}

add(1, 2) //3

let addCurry = curry(add)
addCurry(1)(2)  //3

function ajax(type, url, data) {
  let xhr = new XMLHttpRequest()
  xhr.open(type, url, true)
  xhr.send(data)
}

ajax('POST', 'www.test.com', 'name = "wn')