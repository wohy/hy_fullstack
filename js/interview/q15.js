var arr = Array(3)  //开辟一个大小为3的数组空间
arr[0] = 2

console.log(arr.map(function(elem) {  //map中的callback函数，只会在有值的索引上调用，会遍历空的位置，但不会对其进行操作
  return '1'
}));

// ['1', undefined, undefined]