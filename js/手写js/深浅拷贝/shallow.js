// 实现浅拷贝
let shallowCopy = function(obj) {
  // 只拷贝对象
  if (typeof obj !== 'object') return;
  // 根据obj的类型判断是新建一个数组还是对象
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    // 为了避免将原型上的属性也遍历过来，需判断是否为自身真正有的值，而非继承自原型的值
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}