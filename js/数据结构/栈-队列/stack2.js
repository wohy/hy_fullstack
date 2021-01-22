// 739
// 请根据每日 气温 列表，重新生成一个列表。
// 对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。
// 如果气温在这之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]

// var dailyTemperatures = function(T) {
//   let newqeueu = [];
//   const len = T.length
//   let res = []
//   for(let i = 0; i < len; i++) {
//     let currentT = T[i];
//     if(currentT > newqeueu) {

//     }
//     if()
//     newqeueu.push(T[i])
//   }
//   return res;
// };


// var dailyTemperatures = function(T) {
//   let stack = []; // 定义一个栈来存入下标
//   const len = T.length
//   let res = (new Array(len)).fill(0)  //初始化返回结果
//   for(let i = 0; i < len; i++) {
//     // 如果栈不为0，且存在打破递减趋势的温度值
//     while(stack.length && T[i] > T[stack[stack.length - 1]]) {
//       // 将栈顶的温度值对应的索引出栈
//       const top = stack.pop()
//       // 计算 当前栈顶的温度值 与 第一个高于它的温度值的索引的差
//       res[top] = i - top
//     }
//     // 往栈里面存入索引
//     stack.push(i)

//   }
// };