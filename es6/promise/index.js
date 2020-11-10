function a() {
    setTimeout(() => {
    console.log('蜗牛');
    }, 1000)
}
function b() {
    console.log('酒神');
}
function c() {
    console.log('婷婷');
}

a()  //需一秒后才会执行，定时器将其变为了异步执行
b()
c()  // 打印 酒神 婷婷 蜗牛