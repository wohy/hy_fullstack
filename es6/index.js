// es6 新增 
// let const 防止声明提升
// 字符拼接
let example = 'Tom'
// 给foo赋值为 "this is Tom"
const foo = 'this is' + example  //es5
const foo = `this is ${example}` //es6




// 数组的拓展方法
// 原有 pop push unshift shift
// es6 新增的

// let arr = ['a', 'b', 'c']
// // console.log(Object.keys(arr)); //['0', '1', '2']
// let newArr = [...arr.keys()] //新增的
// console.log(newArr); // [0, 1, 2]


// let iter = arr.entries()
// for (let e of iter) {
//   console.log(e); //取到键值对  [0, 'a'] [1, 'b'] [2, 'c']
// }


// let eArr = arr.values()
// for (let e of eArr) {
//   console.log(e); //取到每一个元素 a b c
// }


// function test (fruit) {
//   const redFruits = ['apple', 'straberry', 'cherry']
//   if (redFruits.includes(fruit)) { //若数组中有该元素，则打印red
//     console.log('red');
//   }
// }
// test('cherry') //red 


let people = [
  { name: '小陶', age: '20' },
  { name: '叶总', age: '18' },
  { name: '大陶', age: '21' }
]
function findFriend(preson){
  return preson.name === '叶总'
}
console.log(people.find(findFriend)); //打印符合preson.name === '叶总'的所有数据，find需传入一个回调函数


let test =  ['a', 'b', 'c', 'd']
function index(i) {
  return i === 'b'
}
console.log(test.findIndex((index))); // 找出符合回调函数条件的位置