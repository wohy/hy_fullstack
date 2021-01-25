// const arr = [1, 2]
// // arr.unshift(0)

// // arr.push(3)

// arr.aplice(1, 0, 3) //从第一个位置开始，切割0个，位置添加3
// console.log(arr); // [1, 3, 2]


// stack
const stack = []
stack.push('a')
stack.push('b')
stack.push('c')
stack.push('d')

while(stack.length) {
  const top = stack[stack.length - 1]
  console.log(top); // d c b a
  stack.pop()
}