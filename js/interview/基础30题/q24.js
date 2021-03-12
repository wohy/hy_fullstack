// function f() {}
// var a = f.prototype; // {}
// var b = Object.getPrototypeOf(f) // Function.prototype

// a === b //false

function Person() {}
var p = new Person()

// 实例的 __proto__ (隐式原型)，等于构造出它的那个构造函数的 prototype (显式原型)
var a = p.__proto__  //p是哪里来的  拿到的就是这个构造函数的原型 Person() {} 这个对象
var b = Object.getPrototypeOf(p)  //b 直接取到构造当前对象的原型 Person() {}
var c = Person.prototype // 拿到Person 的 原型 Person() {}
var d = Person.__proto__  //谁把我造出来的？ 是Function.prototype
var e = Object.getPrototypeOf(Person) //获取构造出它的原型 即Function的原型prototype，Function.prototype
var f = Function.prototype


// Object.getPrototypeOf(p) 其实等于 Person.prototype
// Object.getPrototypeOf(Person) 其实等于 Function.prototype

console.log(a === b, a === c, b === c);