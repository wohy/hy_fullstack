// 背包模型

// 有 n 件物品，物品体积用一个名为 w 的数组存起来，
// 物品的价值用一个名为 value 的数组存起来；
// 每件物品的体积用 w[i] 来表示，
// 每件物品的价值用 value[i] 来表示。
// 现在有一个容量为 c 的背包，问你如何选取物品放入背包
// 才能使得背包内的物品总价值最大？

// 注意：每种物品都只有1件


// f(i,c) 表示 此时背包中 有i件物品 体积刚好占满c
// 取出商品 若要取出的 第i件 商品不再背包中，则
f(i, c) = f(i - 1, c)
// 要取出的商品在背包中
// f(i, c) - value[i] = f(i - 1, c - w[i])
f(i, c) = f(i - 1, c - w[i]) + value[i]

dp[i][v] = Math.max(dp[i - 1][v], dp[i - 1][v - w[i]] + c[i])



function knapsack(n, c, w, value) {
  // 规划一个数组来动态的保存状态
  const dp = (new Array(c + 1)).fill(0) // [0, 0, 0, 0, 0, 0, 3]  [0, 0, 0, 0, 0, 0, 5]
  // res 用来记录所有的组合方案中的最大值
  let res = -Infinity
  for (let i = 0; i < n; i++) {
    for (let v = c; v >= w[i]; v--) {
      dp[v] = Math.max(dp[v], dp[v- w[i]] + value[i])

      if (dp[v] > res) {
        res = dp[v]  // 3
      }
    }
  }
  return res
}