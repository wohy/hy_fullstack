let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: 'jiushen',
  age: 18,
  sex: 'boy'
}

// 遍历数组
// for ( let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); //多了一个下标可以使用
// }

// for (let i of arr) {
//   console.log(i);
// }

for (let key in arr) {
  console.log(arr[key]);
}

// 遍历对象obj
// Object.keys(obj).length 可以拿到obj中的key个数
// for ( let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

for(let key in obj) {
  console.log(obj[key]);
}