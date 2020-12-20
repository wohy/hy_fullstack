let arr = [1, [2, [3, 4]]]

// 可学习flatten源码实现

// function faltten(a) {
//   let newArr = []
//   for(let i = 0; i < a.length; i++) {
//     if(a[i] instanceof Array) { 
//       newArr = newArr.concat(faltten(a[i]))
//     }else {
//       newArr.push(a[i])
//     }
//   }
//   return newArr
// }

// console.log(arr.toString()); //如果元素都为number类型时1,2,3,4

// reduce实现
// function faltten(arr) {
//   return arr.reduce(function(prev, next) {
//     return prev.concat(Array.isArray(next) ? faltten(next) : next)
//   }, [])
// }

// ...解构运算符 先会将第一层[]去掉将其中的值取出来，后开始执行，将第二层[]去掉 ...arr会返回一个1,2，[3, 4]
// 高级实现法
function faltten(arr) {
  // 当arr中不存在数组时，跳出循环，some方法接收一个回调函数，判断函数返回的值
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(faltten(arr)); //[1, 2, 3, 4]