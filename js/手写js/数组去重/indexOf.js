let array = [1, 2, 3, 1, '1', '1']

// function unique(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     if (res.indexOf(current) === -1) {
//       res.push(current)
//     }
//   }
//   return res
// }

// console.log(unique(array));



// 排序后去重
function unique(arr) {
  let res = [];
  let sortedArr = arr.concat().sort();
  let seen;
  for (let i = 0; i < sortedArr.length; i++) {
    // 如果是第一个元素或者相邻的元素不相同
    if (!i || seen !== sortedArr[i]) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
}