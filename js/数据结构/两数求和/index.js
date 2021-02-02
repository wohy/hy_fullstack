// Leetcode 1
let nums = [2, 7, 11, 15]
let target = 9
// [0, 1]

// 暴力法
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; i < nums.length; j++) {
//       if(nums[i] === target - nums[j]) {
//         return [i, j]
//       }
//     }
//   }
// }



// var twoSum = function (nums, target) {
//   let stack = [];
//   stack.push(nums[0])
//   for (let i = 1; i < nums.length; i++) {
//     stack.push(nums[i])
//     if()
//   }
// }


// Map
var twoSum = function (nums, target) {
  const diffs = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [diffs[target - nums[i]], i]
    }
    diffs[nums[i]] = i
  }
}


// 双指针
