function test() {

}

//函数也拥有属性 
// test.prototype函数的原型  
// test.[[scope]] 函数的作用域，但其为隐式属性，不能被拿出来使用

// 垃圾回收机制
// test() 执行完后，预编译形成的 AO:{}对象将会被回收，下一次再执行test()是需再次预编译

function a() {
    function b() {
        var b = 222
    }
    var a = 111
    b()
    console.log(a);  // 111
}
var glob = 100
a()

// a 定义 a.[[scope]] 内出现--> 0: GO:{}
// a 执行 a.[[scope]] 内变为--> 0: aAO:{} 1: GO:{}
// b 定义 a.[[scope]] 内变为--> 0: aAO:{} 1: GO:{}
// b 执行 a.[[scope]] 内变为--> 0: bAO:{} 1: aAO:{} 2: GO:{}
// b 执行完之后 bAO:{} 就要销毁 
// a 也执行完了 aAO:{} 也销毁，又因为aAO{}中包含了函数b, 则b函数会失效

// a的定义带来 [[scope]] --> 0: GO:{} this、document、window... 
// a的执行带来 [[scope]] --> 0:aAO:{} this、document、window... a:111 b:function() {}    1: GO:{} this、document、window... 
// b的执行带来 [[scope]] --> 0:bAO:{} this、document、window... b:222   1:aAO:{} this、document、window... a:111 b:function() {}    2: GO:{} this、document、window... 
// 这时的作用域[[scope]]链为: 0: 1: 2:   从作用域链的顶端0开始找到2,找到停止

function a() {
    
    function b() {
        
        function c() {

        }
        c()
    }
    b()
}
a()
