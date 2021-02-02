let arr = [1, 2, 3, 2, 4, 1]

let newArr = [...new Set(arr)] 
//Set 处理 arr, 会返回一个不包含重复项的arr
//此时的newArr这会为arr去重后的数组


// function test(color) {
//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry']
//     case 'yellow':
//       return ['banana', 'pear']
//     case 'green':
//       return ['watermelon']
//     default:
//       return []
//   }
// }
// console.log(test('yellow'));


// const fruitColor = {
//   red: ['apple', 'straberry'],   //对象的key值只能是字符串类型
//   yellow: ['banana', 'pear'],
//   green: ['watermelon']
// }
// function test(color) {
//   return fruitColor[color] || []
// }
// console.log(test('yellow'));


// const fruitColor = new Map()
// console.log(fruitColor);


// let obj = new Map()
// let  a = 1  
// obj.set(a, 123) //Map对象中添加键值对 key值可为任意类型
// console.log(obj.get(a)); //123 get()获取key对应的值

const fruitColor = new Map()
  .set('red', ['apple', 'straberry'])
  .set('yellow', ['banana', 'pear'])

function test(color) {
  return fruitColor.get(color)
}
test('yellow')

