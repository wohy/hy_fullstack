// 将一个数字，插入数组，让数组保持有序，输出该数字插入的位置
// 排好序，二分法

function cb(func, context) {
  // void 0 => undefined
  if (context === void 0) return func;
  // 绑定好cb中的this context
  return  function() {
    return func.apply(context, arguments)
  } 
}

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context) //作用域不会被更改的函数
  
  // 二分法
  let low = 0, high = array.length;
  while(low < high) {
    let mid = Math.floor((low + high) / 2)
    if(iteratee(array[mid]) < iteratee(obj)) {
      low = mid + 1
    } else {
      high = mid
    }
  }
  return high
}




// console.log(sortedIndex([10, 20, 30], 25));  //2 

var stooges = [{name: 'moe', age: 10}, {name:'wn', age: 20}]
let result = sortedIndex(stooges, {name: 'larry', age: 15}, function(stooge) {
  return stooge.age
})
console.log(result); //1