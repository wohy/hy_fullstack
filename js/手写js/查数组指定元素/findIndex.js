// 满足函数条件的一个元素的索引
// function isBigEnough(element) {
//   return element >= 15
// }
// let arr = [12, 1, 5, 8, 123, 44]
// console.log(arr.findIndex(isBigEnough)); // 4

// 实现
function findIndex(array, predicate, context) {
  for (let i = 0; i < array.length; i++) {
    if (predicate.call(context, array[i], i, array)) return i
  }
  return -1
}
console.log(findIndex([1, 2, 3, 4], function(item, i, array) {
  if (item == 3) return true
})); //2