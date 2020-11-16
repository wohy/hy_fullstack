var obj = {} //对象字面量
// var obj1 = new Object()

// Object.create(原型)
var obj = {
    name: 'wn',
    age: 18 
}
var obj1 = Object.create(obj)
// 此时obj.__proto__ 会指向obj

//网易面试题
// 所有对象最终都会继承自 Object.prototype (对/错)  错  
// 如 特例：
var obj = Object.create(null)  //此时obj1会继承自null，但此时的obj依然为一个对象，空对象


 