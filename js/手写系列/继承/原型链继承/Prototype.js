// 原型链继承
function Animal() {
  this.color = ['black', 'white'];
}
Animal.prototype.getColor = function() {
  return this.color
}
function Dog() {}
Dog.prototype = new Animal()

let Dog1 = new Dog()
Dog1.color.push('brown');
let Dog2 = new Dog()
console.log(Dog2.color);  // [ 'black', 'white', 'brown' ]

// 这就是原型链继承的一个问题：
// 1. 原型中包含的引用类型属性被所有实例共享
// 2. 子类在实例化的时候不能给父类构造函数传参