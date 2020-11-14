// Person.prototype.lastName = 'Liu'

// function Person(name) {
//     this.name = name 
// }

// var person = new Person('zhipeng')
// console.log(person.lastName);  //Liu

// person.lastName = 'Wang'  //没有改动原型属性，只是在自己的对象中添加了lastname属性,值为Wang
// Person.prototype.lastName = 'Wang' 需直接改变Person上的原型

// delete person.lastName  //不生效
// delete Person.prototype.lastName

function Bus() {

}
Car.prototype = { 
    constructor: Bus
}
function Car() {

}
var car = new Car()


console.log(Car.prototype);  //function Car() {}
// 函数自带的一个构造器属性 constructor 指向的是Car(), 目的是让Car() 构造出来的对象想要找到自己的来历时能找到，该属性是通过实例化出来的
// car.constructor 
console.log(car.constructor); //打印function Bus() {}
