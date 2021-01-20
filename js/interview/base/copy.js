// 什么是浅拷贝？如何实现一个浅拷贝？
// 什么是深拷贝？如何实现一个深拷贝？

let a = {
    age: 1
}
let b = a  
a.age = 2
console.log(b.age); // 2 b指针指向的地址与a相同，拷贝后a的变化会是b发生改变，此时就为浅拷贝

// 实现其深拷贝 JSON.parse(JSON.stringify())
let a = {
    age: 1
}
let b = JSON.parse(JSON.stringify(a)) //先通过stringify将a对象转换为JSON字符串，再通过parse将JSON字符串转换为JSON对象, 最后赋值给b
a.age = 2
console.log(b.age);

// object.assign() 拼接对象 浅拷贝方法
let a = {
    age: 1,
    info: {
        name: 'wn'
    }
}
let b = Object.assign({}, a)
a.age = 2
a.info.name = "蜗牛"
console.log(b.info.name); // 蜗牛  如果拷贝的属性为引用类型，那么为浅拷贝
console.log(b.age); // 1  如果拷贝的属性为原始类型，那么为深拷贝

// 浅拷贝方法
let c = {
    age: 1,
    jobs: {
        first: 'coding'
    }
}
let d = {...c} //解构赋值，为浅拷贝方法
c.jobs.first = 'waiter'
c.age = 2
console.log(d.jobs.first); // waiter 拷贝属性为引用类型，体现浅拷贝的效果
console.log(d.age); // 1 但显示的为深拷贝的效果

//JSON.parse(JSON.stringify())的缺陷 会忽略undefined 和 symbol 不能解决循环引用的对象
let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj); //会报错

let test = {
    age: undefined,
    sex: Symbol('man'),
    name:'wn'
}
let o = JSON.parse(JSON.stringify(test))
console.log(o); // {name: 'wn'}  sex和age拷贝不出来