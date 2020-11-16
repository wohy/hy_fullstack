var num = 123
// var name = new Number(123).toString()  //'123'
Number.prototype.toString = function() {
    return 'hehe'
}
num.toString()  //初始为'123'，当重写原型上的toString方法后num.toString()将会将其转化为字符串'hehe'

// Number.prototype.__proto__ = Object.prototype

var str = 'hello'  // var str = new String('hello')
console.log(str.length);

// 方法重写
Object.prototype.toString = function() {}


Person.prototype.toString = function() {
    return 'hehe'
}


function Person() {

}
var person = new Person()
console.log(person.toString());
