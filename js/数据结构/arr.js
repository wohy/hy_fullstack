const arr = [1, 2, 3, 4]

// const arr = new Array()
// const arr = []

// const arr = new Array(7)  // arr = []，length为7

const arr = new Array(7).fill(1)  //7个1 组成的方法

// 二维数组
// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]
// // 初始化
// const arr = (new Array(7)).fill([]) 
// //fill 的入参 如果是引用类型 填充的时候就是入参的引用，则这7个[] 会是同一块地址
// arr[0][0] = 1
// console.log(arr); // 会打印7位置都为1

const arr = new Array(7)
const len = arr.length
for(let i = 0; i < len; i++) {
  arr[i] = []
}
