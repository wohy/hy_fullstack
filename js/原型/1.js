// Person.protype --原型

console.log(Person.protype);  //函数被定义出来那一刻就一定具有一个portotype属性

Person.prototype.name = '蜗牛'
Person.prototype.say = function() {
    console.log('hahahaha');
}
function Person(name) {
    // this.name = name
}
var person = new Person()  //实例化一个构造函数，生成一个对象并继承构造函数上的属性
console.log(person.name);  //蜗牛

//他定义出来了构造函数制造出来的对象的公共祖先
var person1 = new Person()
console.log(person1.name);//蜗牛

person.say()  //hahahaha
