// let key1 = 1
// let key2 = 1
// console.log(key1 === key2);  //true


// console.log('hello'.length) 原始值是没有属性没有方法的， 这里的length是String对象上的属性 字符串创建后会继承String上的方法


// 0.1 + 0.2 == 0.3   错误 精度丢失 计算时 需把0.1和0.2都转换为二进制相加后再转为十进制

// let obj = {
//     name: 'wn'
// }


// const a = []        // 假定其地址为#001
// const b = a         // 赋值即指针的复制 
// b.push(1)           // b = [1]
// console.log(a);     // a = [1] 因为此时a与b的指针都指向同一地址



function test(person) {
    person.age = 26
    person = {
        name: 'yyy',
        age: 30
    }
    return person 
}
const p1 = {
    name: 'xxx',
    age: 25
}
const p2 = test(p1)  // p2 接收的是test的返回值 
console.log(p1);  // xxx 26  为什么？ 
console.log(p2);  // yyy 30

// 1. 函数传参时传递的是对象指针的副本
// 2. p1 和 person 具有相同的指针，person被修改，p1也被修改的
// 3. 23到26 重新给person分配了一个新的内存地址 此时的person和p1没有关联了
// 返回person被 p2 接收



// console.log([] instanceof Object); // ture  数组的原型也为对象
// console.log([] instanceof Array); // ture 


// es6 实现
class PrimitiveString {
    static [Symbol.hasInstance] (x) {    // Symbol.hasInstance让我们自定义instanceof的行为
        return typeof x === 'string'
    }
}

console.log('hello' instanceof PrimitiveString);  //ture 此时使instanceof 具有了判断字符串类型的能力，其行为封装到了PrimitiveString类中
