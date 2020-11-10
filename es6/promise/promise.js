// Promise.prototype.then = function() {}
// Promise.prototype.catch = function() {}

// class Promise {
//     constructor() {

//     }

//     all () {

//     }

//     race () {

//     }
// }




function xq() {  
    return new Promise((resolve,reject) => {  //让xq()具有Promise的能力
        setTimeout(() => {
            console.log('相亲！');
            resolve('成功')
            // rejects('你太丑');
        }, 1000)
    })
   
}

function marry() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('结婚大吉');
            resolve('如洞房')
        }, 500) 
    })
   
}

function baby() {
    console.log('小酒神出生')
}

xq()
    .then((res) => {
        console.log(res);  //相亲 成功  结婚大吉
        return marry()  //要形成链式结构需将上面的执行结果返回
    })  //.then()只执行resolve
    .then((result) => {
        console.log(result);
        baby()
    })
    // .catch((err) => {
    //     console.log(err);  // 相亲 你太丑
    // })