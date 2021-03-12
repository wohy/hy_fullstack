var a = {}
var b = Object.prototype;

[a.prototype === b, Object.getPrototypeOf(a) == b]

// 对象是没有 prototype 属性的  原型是函数独有的
// 对象的原型是__proto__  函数的原型是prototype
// Object.getPrototypeOf(a) 相当于 找到 __proto__
[false, true]