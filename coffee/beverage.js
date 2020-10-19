//构造茶和咖啡的基类

var Beverage = function() {

}
Beverage.prototype.boilWater = function() {
    console.log('把水煮沸');
}
//把咖啡和茶的共同点写一下

//冲泡步骤不一样则先构造一个空的方法
Beverage.prototype.brew = function() {

}
Beverage.prototype.pureInCup = function() {

}
Beverage.prototype.addCondiments = function() {

}
Beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pureInCup();
    this.addCondiments();
}

var Tea = function() {
} //原型继承
Tea.prototype = new beverage();  //替换beverage的prototype
Tea.prototype.brew = function() {
    console.log(' 用沸水浸泡茶叶');
}
Tea.prototype.pureInCup = function() {
    console.log('把茶水倒进杯子')
}
Tea.prototype.addCondiments = function() {
    console.log('加柠檬')
}

var oneTea = new Tea();
onetea.init();