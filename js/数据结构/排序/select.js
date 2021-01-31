// 思想：关键字是最小值
// 循环遍历数组 每次都找当前范围内的最小值
// 把它放在当前范围的头部，然后所范围，直至数组有序为止

let arr = [5, 3, 2, 4, 1]

function selectSort(arr) {
  const len = arr.length
  let minIndex
  for(let i = 0; i < len - 1; i++) {
    minIndex = i;
    for(let j = i; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      // let q = arr[i];
      // arr[i] = arr[minIndex];
      // arr[minIndex] = q;
      // 或解构交换
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectSort(arr));