// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]
// ...arguements

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6, 7]
// console.log(c); ///34567

// let [a] = false 报错，等号右边要是一个可遍历的结构(迭代器)  

// set 方法 数组去重
// let arr = [1,2,2,4,6,3,4,5,4]
// let newArr = new Set(arr)
// console.log(newArr); //Set {1,2,4,6,3,5}

// let [x, y, z] = {a:'a', b:'b', c:'c'}
// console.log(x);  //报错
// let [x, y, z] = new Set(['a', 'b', 'c'])
// console.log(x); //a ,Set对象可结构

// let [foo = true] = [false]
// console.log(foo);  //false 解构允许我们指定一个默认值
// let [x, y = 'b'] = ['a',  undefined]
// console.log(y); //b 申明为undefined，y值不变，申明为null时，b值变为null


// let {x, y, z} = {x:'aaa', y:'bbb'}
// console.log(x); //aaa 对象也可解构，但x与y调换顺序是x对应的依然为aaa，与数组结构不同, z为undefined

// let{log, sin, cos, abs} = Math
// console.log(abs(-2));// 2

// const{log} = console
// log(123) //123

// let { foo: baz } = { foo: 'aaa', bar: 'bbb'}
// console.log(foo); //报错，foo未定义

// let obj = {
//     p: ['hello', { y: 'world'}]
// }
// let { p: [x, { y }]} = obj
// console.log(x + y); //helloworld

const [a, b, c, d, e] = 'hello'
console.log(c); //l 字符串也可以结构