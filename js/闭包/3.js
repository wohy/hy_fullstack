function add() {
    var num = 0;
    function a() {
        console.log(++num);
    }
    return a;
}
var result = add()
result()
result()  //垃圾回收机制，无法使原型链上的num被回收，则调用result，num会一直累加
