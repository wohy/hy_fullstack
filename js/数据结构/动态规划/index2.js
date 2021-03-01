// 给定不同面额的硬币 coins 和 一个总金额amount
// 编写一个函数来计算可以凑成总金额所需的最少硬币个数
// 如果没有任何一种硬币组合能完成，返回-1

// 最值问题 最优解
// coins[1, 2, 5], amount = 11
// 5 + 5 + 1

// coins = [2], amount = 3
// -1

// 如何将 amount 表示为有几个1
// 如何将 amount 减为0

// 最少硬币数 
// c1/c2/c3....是不同的面值
// f(amount-c1) + 1 是amount拿掉一个c1后 剩下的值需要的硬币数是f(amount-c1)，需要的硬币总个数是f(amount-c1) + 1
// f[x] = Math.min(f(amount-c1) + 1, f(amount-c2) + 1, f(amount-c3) + 1, ..., f(amount-cn) + 1)

const coinChange = function(coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = []
  // 已知
  f[0] = 0
  for(let i = 1; i <= amount; i++) {
    f[i] = Infinity;
    // 遍历每个可用的硬币面额
    for(let j = 0; j < coins.length; j++) {
      // 目标总额要大于硬币面额
      if (i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }
  // f[i] 循环到最后 i=amount 时 目标总额依然小于硬币面额，则说明凑不出amount
  if(f[amount] === Infinity) {
    return -1
  }

  return f[amount]
}

