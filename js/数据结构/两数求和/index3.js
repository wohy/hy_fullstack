// 三数求和 leetCode 15
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

let nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

const threeSum = function(nums) {
  let res = []
  nums = nums.sort((a, b) => { // 做好排序
    return a - b;
  })
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1; //左指针
    let k = len - 1; //右指针

    if(nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while( j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        // 左指针过小 需要右移
        j++;
        // 处理左指针重复的情况
        while(j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 右指针过大 需左移
        k--;
        while(j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([nums[i], nums[j]], nums[k]);
        j++;
        k--;
        while(j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while(j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res;
}
