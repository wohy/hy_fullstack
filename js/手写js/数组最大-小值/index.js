let array = [1, 2, 3, 2, 0, 5]

// console.log(Math.max(...array));
// console.log(Math.min(...array));
// 但若该方法中存在无法被隐式转化为number类型的值时，将无法判断，打印出NaN

// max,min 方法中的BUG
// console.log(Math.max()); //-Infinity
// console.log(Math.min()); //Infinity
// console.log(Math.min() > Math.max()); //true
// console.log(Math.max(1, true, false, '2')); //2
// console.log(Math.max(1, true, false, {})); //NaN

// 原始方法
let arrayMax = function(arr) {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

// reduce
function max(prev, next) {
  return Math.max(prev, next) 
}
console.log(arry.reduce(max));

// 排序
array.sort(function(a, b) {
  return b - a
})
console.log(array[0]);

// eval
let max = eval("Math.max(" + array + ")")
 
//apply
Math.max.apply(null, array)
// 此时array就具有了Math.max这个方法