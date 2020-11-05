var saleOffices = {}  //售楼处  发布者 楼价多少
// 如果售楼处 有消息出来的时候
// addEventListener 如何实现？
saleOffices.clientList = [];  //买房的人 客户列表

saleOffices.listen = function(fn) {
    this.clientList.push(fn);
}
saleOffices.trigger = function(price, squareMeter) {
    for(var i = 0; i < this.clientList.length; i++) {
        console.log(this.clientList[i]);
        this.clientList[i](price, squareMeter);
    }
}
// document.body   callback  

//两个函数为listen方法的参数，被传入到了clientList数组中
saleOffices.listen(
    function(price, squareMeter) {
    if(price > 18000) {
        console.log('我的菜');
    }else{
        console.log('只卖贵的 不买对的');
    }
    console.log('价格:' + price); 
    console.log('面积:' + squareMeter);
})
saleOffices.listen(
    function(price, squareMeter) {
    if(squareMeter < 120) {
        console.log('不是我的菜');
    }else{
        console.log('内心的宽广有地方安放');
    }
    console.log('价格:' + price); 
    console.log('面积:' + squareMeter);
})

// trigger方法将两个listen方法取出并逐个调用
saleOffices.trigger(20000, 88);