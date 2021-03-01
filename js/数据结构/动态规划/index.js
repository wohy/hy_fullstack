// 爬楼梯 每次只能爬 1 或 2 阶，问到达目的的方案有多少种

// 被问到给出 达到某个目的的方案数相关的问题，多用到动态规划思想
// 需要到着分析问题：1. 定位到问题的终点。2.站在终点的视角，来思考后退的可能性
// 从n开始每次都只能下 1 或 2 阶楼梯 到最下面有多少种方案

// f(n) = f(n - 1) + f(n - 2)
// f(n - 1) = f(n - 2) + f(n - 3)
// ...
// 下n阶楼梯的方案数时下 n-1阶 和 n-2阶楼梯方案数的和
// 例 下 4 阶台阶的方案 是下 3阶 和 2阶楼梯方案数的和

// 记忆化搜索 优化之后的递归 自顶向上
const f = []
const climStairs1 = function(n) {
  if(n === 1) {
    return 1
  }

  if(n === 2) {
    return 2
  }
  // 递归计算 如果f[n] 不存在 也就是之前没有计算过 就递归计算，如果存在则之前计算过直接返回
  if(f[n] === undefined) f[n] = climBstairs1(n - 1) + climBstairs1(n - 2)
  return f[n]
}

// 动态规划 自底向上
const climStairs2 = function(n) {
  const f = []
  // 初始化的已知值
  f[1] = 1
  f[2] = 2
  for(let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f [i - 2]
  }
  return f[n]
}

