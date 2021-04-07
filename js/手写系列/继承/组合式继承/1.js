function Animal(name) {
  this.name = name;
  this.color = ['black', 'white']
}
Animal.prototype.getName = function() {
  return this.name
}
function Dog(name, age) {
  Animal.call(this, name)  // 一次调用
  this.age = age
}
Dog.prototype = new Animal()   // 两次调用
Dog.prototype.constructor = Dog

let dog1 = new Dog('a', 2)
dog1.color.push('brown')   // 改变不了 dog2 继承的color
let dog2 = new Dog('b', 1)
console.log(dog2);

// 将共享的方法放在 原型链上继承，拥有独立的属性就 再借用构造函数继承属性
// 问题：调用了两次父类构造函数