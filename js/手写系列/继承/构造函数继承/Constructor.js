// 构造函数继承
// 解决了原型链继承的两个问题，引用类型共享问题，以及传参问题
function Animal(name) {
  this.name = name
  this.getName = function() {
    return this.name
  }
}
function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = new Animal()

let Dog1 = new Dog('aaa')
let Dog2 = new Dog('bbb')
console.log(Dog1.getName());  // aaa
console.log(Dog2.getName());  // bbb

// 问题
// 方法都定义在了构造函数中，所以会导致每次创建子类实例都会 创建一遍方法

