// 允许在队列的两端进行插入和删除的队列
// Leecode 滑动窗口的最大值
const queue = [1, 2, 3, 4]
queue.push(1) // 双端队列的尾部入队
queue.pop() // 双端队列的尾部出队
queue.shift()  // 双端队列的头部出队
queue.unshift() // 双端队列的头部入队

// 双指针 + 遍历
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  let left = 0
  let right = k - 1
  if(!nums || !nums.length) {
    return nums
  }
  while (right < len) {
    // 计算左右指针内部的最大值
    const max = calMax(nums, left, right)
    res.push(max)
    right ++;
    left ++;
  }
  return res
};
function calMax(arr, left, right) {
  let maxNum = arr[left]
  for(i = left; i <= right; i++) {
    if(arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}


// 双端队列法 有效的递减队列
// 窗口滑动一下，只移除了一个值，只需看一下移除的这个值是否为最大值
// 在窗口发生移动的同时，对发生变化的值，来更新数组
var maxSlidingWindow = function(nums, k) {
  const len =  nums.length
  const res = []
  // 初始化双端队列
  const deque = []
  for(let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    // 当队头的元素索引已经出现在滑动窗口之外
    while(deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    if(i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res;
}