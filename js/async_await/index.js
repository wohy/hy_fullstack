// function a() {
//     setTimeout(() => {
//         console.log('aaaa');
//     }, 1000)
// }

// function b() {
//     console.log('bbbb');
// }

// a()
// b()  //先打印出b 在打印a

// function a() {
//     return new Promise((reslove,reject) => {
//         setTimeout(() => {
//             console.log('aaaa');
//             reslove('ok');
//         }, 1000)
//     })    
// }

// function b() {
//     console.log('bbbb');
// }

// a().then(b)  //先打印a 在打印b



function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('你好');
            resolve()
        }, ms)
    })
}

// async声明该函数内部可能存在一步情况
async function asyncPrint(value, ms) {
    await timeout(ms)   // async函数中遇到await其后代码会立即执行，还会阻塞后面的代码
    console.log(value);  // 在await作用下将去到微任务队列
}

asyncPrint('hello world', 1000);
console.log('ok');  // ok  你好  hello world