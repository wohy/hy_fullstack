let arr = [1, 2, ,3]

// 1. arr 的 长度？ 4
// 2. 取出arr中的空元素  arr.filter(() => true)

// 3. arr2 = arr.map(parseInt) 
// arr.map((val, index, arr) => {
//   console.log(val, index);
// })
// // 相当于执行以下三个parseInt 
// parseInt(1, 2)  // 1
// parseInt(2, 1)  // NaN
// parseInt(3, 3)  // NaN
//则 arr2 = [1, NaN, NaN]

// 4. arr 和 arr2 合成的结果
let arr2 = [1, NaN, NaN]
arr.concat([1,2,NaN]); //[1, 2, , 3, 1, NaN, NaN]