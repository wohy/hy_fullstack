function mytypeof(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
}

console.log(mytypeof({})) //object
console.log(mytypeof([])) // array
console.log(mytypeof(new Date)) //date