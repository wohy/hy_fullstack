// 分治  时间复杂度:nlog(n)
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

var list = [1, -1, 7, -9, 100, 6, -1, 4, -5]
var helper = function(list, m, n) {
  if(m === n) {
    return list[m]
  }
  let sum = 0;
  let lmax = -Infinity;
  let rmax = -Infinity;
  const mid = ((n - m) >> 1) + m;
  const l  = helper(list, m, mid)  //分
  const r = helper(list, mid + 1, n) //分
  // 最大值出现在左数组
  for (let i = mid; i >= m; i--) {
    sum += list[i]
    if (sum > lmax) {
      lmax = sum
    }
  }
  // 重置一下sum
  sum = 0;
  // 最大值出现在右数组
  for (let i = mid + 1; i <= n; i++) {
    sum += list[i]
    if (sum > rmax) {
      rmax = sum
    }
  }
  return Math.max(l, r, lmax + rmax)
}

function maxSubArray2(arr) {
  helper(arr, 0, arr.length)
}

console.log(maxSubArray2(list));