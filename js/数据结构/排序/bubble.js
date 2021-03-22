// 思想：从第一个元素开始重复比较相邻的两项，
// 若第一项比第二项大，则交换两者的位置，反之则不动
let arr = [5, 3, 2, 4, 1]
// 35241 32541 32451 32415
// 23415 23415 23145 23145
// 23145 21345 21345 21345
// 12345 12345 12345 12345
// 12345 12345 12345 12345

// function bubbleSort(arr) {  //O(n^2)
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for(let j = i + 1; j < len; j++) {
//       if(arr[i] > arr[j]) {
//         let q = arr[i];
//         arr[i] = arr[j];
//         arr[j] = q
//       }
//     }
//   }
//   return arr
// }


// 优化
function bubbleSort(arr) {  //O(n^2)
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let flag = false
    for(let j = i + 1; j < len ; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[j]];
        flag = true
      }
    }
    if(flag == false) return arr //位置不变了 flag一直为false 则已经排好序了
  }
  return arr
}

console.log(bubbleSort(arr));
