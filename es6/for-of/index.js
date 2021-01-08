let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: 'jiushen',
  age: 18,
  sex: 'boy'
}

obj.height = 180

// 遍历数组
// for ( let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); //多了一个下标可以使用
// }

for (let i of arr) {
  console.log(i);
}

// for (let key in arr) {
//   console.log(arr[key]);  //不介意使用for in 遍历数组，内含bug，for in会将数组原型上的属性也遍历过来 
// }

// 遍历对象obj
// Object.keys(obj).length 可以拿到obj中的key个数
// for ( let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

// for (let i of obj) {
//   console.log(i);  //报错 对象不具备iterable 迭代器 for of 只能遍历具有迭代器的结构
// }

for(let key in obj) {
  console.log(obj[key]); //height也会被遍历到
}