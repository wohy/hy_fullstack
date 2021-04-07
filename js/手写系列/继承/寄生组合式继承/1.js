function Animal(name) {
  this.name = name;
  this.color = ['black', 'white']
}
Animal.prototype.getName = function() {
  return this.name
}
function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}
// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog
Dog.prototype = Object.create(Animal.prototype);  // 继承了 Animal 原型上的方法
Dog.prototype.constructor = Dog;                  // 继承了 Dog 构造函数的属性


let dog1 = new Dog('a', 2)
dog1.color.push('brown')
let dog2 = new Dog('b', 1)
console.log(dog2);
console.log(dog2.getName());