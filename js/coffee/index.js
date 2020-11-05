//talk in js
// 一杯热咖啡
// es5 类 大写的函数
// 1. 把水煮开
// 2. 用沸水冲泡咖啡
// 3. 把咖啡倒进杯子
// 4. 加糖和牛奶
// constructor
// 类是抽象的
// 实例化的是对象
// 一个封装和一个调用
// js 类的构建 = 火车头 构造`函数名（首字母大写） + 好多节车厢（方法）prototype
// 构造函数与普通函数的区别是new
// 函数是一等对象
// JS里本没有类,只有对象。new 的时候会有{}
// 任何函数都有一个prototype
//原型链


var Coffee = function(type) {

    this.type = type
}
// 原型
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function() {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMillk = function() {
    console.log('加糖和牛奶');
}
Coffee.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugarAndMillk();
}

 var oneCoffee = new Coffee("猫屎咖啡")
 console.log(oneCoffee.type);
 console.log(oneCoffee.__proto__ == Coffee.prototype); //true  oneCoffee.__proto__原型对象
//  oneCoffee.boilWater();
//  oneCoffee.brewCoffeeGriends();
//  oneCoffee.pureInCup();
//  oneCoffee.addSugarAndMillk();
oneCoffee.init();

// console.log(Coffee.prototype.constructor == Coffee);  //true

// console.log(Coffee.prototype.__proto__);   //{}
console.log(Coffee.prototype.__proto__.__proto__);  //null

