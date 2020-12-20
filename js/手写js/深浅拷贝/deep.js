// 实现深拷贝
// 将引用类型一直向内找到原始数据类型，来进行赋值，完成深拷贝
let deepCopy = function(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {}
  for(key in obj) {
    if (obj.hasOwnProperty(key)) {
      // if(obj[key] instanceof Object) {
      //   deepCopy(obj[key])
      // }else {
      //   newObj[key] = obj[key]
      // }
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}