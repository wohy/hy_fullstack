Person.prototype.say = function() {
  console.log('hahaha');
}
function Person(name, age) {
  this.name = name
  this.age = age
  // 构造函数中的return不生效
}
// let person = new Person('小敏', '18')
// 实例出来的对象可以继承原型上的属性，但不会出在对象里面
// person.say()
// // console.log(person);

function myNew() {
  // 执行后，需像new一样返回一个对象
  let obj = {}
  // 有一个construct属性
  // 此处要取到外部传入的构造器
  console.log(arguments); //[Arguments] { '0': [Function: Person], '1': '小敏', '2': '18' }
  let Constructor = Array.prototype.shift.call(arguments) //所以需将第一个属性去掉，然后逐个将这些属性存入到Constructor中
  // 实现一个继承
  obj.__proto__ = Constructor.prototype
  // 把Constructor里的属性给到obj中，this也将指向obj
  let result = Constructor.apply(obj, arguments)

  return typeof result === 'Object' ? result : obj
}
let person = myNew(Person, '小敏', '18')
console.log(person);
person.say()