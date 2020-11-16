// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的
var num = 123
num.abc = 'aaa'
// console.log(num); //123

var num = new Number(123)
num.abc = 'aaa'
// console.log(num * 2);  //246

var str = 'abcd'  //var str = new  String(abcds)
// console.log(str.length); //length是str继承自String的属性

var num = 4
num.len = 3

//以上操作相当于 
// num.Number(4).len = 3  先添加
// delete num.len  后发现是一个原始值，不应该具备属性所以会删除
console.log(num.len); //undefined而不会报错，因为删除后，又会重新new Number(4).len，但已经没有了值

//以上这种隐式的过程叫做包装类

var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr);  //[1, 2]

var str = 'abcd'
str.length = 2  
// str本身是不含length属性的，而是继承自String，于是与其上相似 str.length = 2 将会被delete掉
console.log(str.length);  //4 所以str的属性依然为4没有被改变,在其父级String上能找到一个length属性为4

// 思考 面试题(阿里)
var str = 'abc'
str += 1 //'abc1'
var test = typeof(str)
if(test.length == 6) {
    test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign); 