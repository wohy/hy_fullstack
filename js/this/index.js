// function identify() {
//     return this.name.toUpperCase()
// }

// function speak() {
//     var greeting = "Hello I am" + identify.call(this)
//     console.log(greeting);
// }

// var me = {
//     name: 'wn'
// }

// var you = {
//     name: 'yangbao'
// }

// speak.call(you) 


// function foo() {
//     let person = {
//         name: 'wn',
//         age: 18
//     }
//     console.log(this);  
// }

// function bar() {
//     let person = {
//         name: '蜗牛',
//         age: 20
//     }
//     foo()
// }
// bar()

// function foo() {
//     console.log(this.a);
// }

// var a = 2;  //这时全局上有一个a值为2

// (function() {
//     'use strict'
//     foo()  // 2 ,
// })()


//隐式绑定
// function foo() {
//     console.log(this.a);
// }
// var obj2 = {
//     a : 3,
//     foo: foo
// }
// var obj1 = {
//     a : 2,
//     obj2 : obj2
// }
// obj1.obj2.foo() //3 ，在obj2中找到了foo标识，foo()一直都在obj2中生效


// 隐式丢失
// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a = 3,
//     foo : foo
// }
// var bar = obj.foo //多重引用后丢失，foo一直被引用没有执行，直至引用到bar上，通过bar()在window上执行，则此时的this指向window
// var a = 'Hello' 
// bar()  //打印Hello


//显式绑定
var a = {
    user: '蜗牛',
    fn: function(q, w) {
        console.log(this.user);
        console.log(q + w);
    }
}
var b = a.fn     
//b() this指向window，拿不到user的值，报错
// b.call(a, 2, 3)   //让b的this指向a中, 打印 蜗牛 5
// b.call(null)      //this指向依然为window，apply、bind也一样
// b.apply(a, [2, 3])   //apply 以数组传参

//bind() 执行返回的是一个函数
var c = b.bind(a, 2, 3)  //c接收返回的函数,传参与call类似，还可直接c(3, 4)传参，若两边都传参时输出的是bind中参数的和5
c()  //执行 打印 蜗牛 5



