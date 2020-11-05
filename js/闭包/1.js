function test() {
    var arr = []
    for (var i = 0; i < 10; i++) { //for中的var i = 0,会使声明提升，则全局上会有一个var i的声明
        arr[i] = function() {  //arr[]中不断存入函数，但不会执行
        console.log(i);
        }
    }
    return arr
}
var myArr = test()
for (var j = 0; j < 10; j++) {
    myArr[j]()  //将arr[]中的函数执行，打印出10个10，因为此时全局上有一个i = 10，函数在全局执行时，即只会打印出10
}