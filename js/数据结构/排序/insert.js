// 思想：找到元素在它前面序列中的位置，插入到正确位置，
// 使遍历到的该元素前的序列是有序的
// 从后往前去寻找当前元素在前面的序列中的位置

let arr = [5, 3, 2, 4, 1]
// 从3 开始
// 3前面的序列是[5]
// 3 应该插入到 5 的前面
// [empty, 5, 2, 4, 1] // 3
// 则此时为 [3, 5, 2, 4, 1]
// 以此类推 所有元素都插入到在其前面序列中比他大的第一个元素之前
// 找到插入位置时，需腾出该位置，该位置之后的所有元素都后移


function insertSort(arr) {
  let len = arr.length;
  // temp保存当前要插入的元素
  let temp;
  for (let i = 1; i < len; i++) {
    let j = i //j 用来帮助temp寻找自己应该有的定位
    temp = arr[i]
    // 判断j前面一个元素是否比temp大
    while(j > 0 && arr[j-1] > temp) {
      arr[j] = arr[j - 1]  //将之前的元素依次后移，为了腾出需要插入的那个位置
      j--;
    }
    arr[j] = temp
  }
  return arr
}


console.log(insertSort(arr));