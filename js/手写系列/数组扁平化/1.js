let arr = [1, [2, 3, [4, [5]]]]
// console.log(arr.flat(3)); // [ 1, 2, 3, 4, 5 ]

// 实现 flat(3) 的效果


// es5 实现
function flatten(arr) {
  let res = [];
  for(let i = 0, len = arr.length; i < len; i++) {
    if(Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i])) // 是数组的话就递归 并将递归后返回的结果数组 拼接到 res 中
    } else {
      res.push(arr[i])
    }
  }
  return res;
}
// console.log(flatten(arr));  // [ 1, 2, 3, 4, 5 ]


// es6 实现
function flatten1(arr1) {
  while (arr1.some(item => Array.isArray(item))) { 
    // 若 arr 中一直有 元素 为数组的 就一直执行 解构 再进行 拼接拷贝，知道 与没有数组类型的子元素，就跳出循环
    arr1 = [].concat(...arr1);
  }
  return arr1;
}

console.log(flatten1(arr));