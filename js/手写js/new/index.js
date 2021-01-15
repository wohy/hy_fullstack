Person.prototype.say = function() {
  console.log('hahaha');
}
function Person(name, age) {
  this.name = name
  this.age = age
}
let person = new Person('小敏', '18')
person.say()
console.log(person);

// function myNew() {
//   // 执行后，需像new一样返回一个对象

//   // 有一个construct属性
// }
// let person = myNew(Person, '小敏')
// console.log(person);