// [ [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow) ] // 该数组展示结果？

let arr = [3, 2, 1]
let pow = function(a, b) { 
  console.log(a, b); //3 2  //9 1
  return a ** b  // 9
}
console.log(arr.reduce(pow)); //9

// [ 9, error ]
