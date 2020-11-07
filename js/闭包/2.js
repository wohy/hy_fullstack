function a() {
    function b() {
        var bbb = 234
        console.log(aaa);
    }
    var aaa = 123
    return b
}
var glob = 100
var demo = a() //执行函数a，将返回值赋给demo，但由于函数b被拿到了a的外面，则无法确定a是否执行完成，则垃圾回收机制无法直接将aAO:{}回收 
demo()  //即，将函数b拿到window下来执行，通过原型链步骤查询，可找到aaa = 123，则可打印出123
// 这就是闭包