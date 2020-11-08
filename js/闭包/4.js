function test() {
    var food = 'apple'
    function a() {
        console.log(food);
        food = 'banana'
    }

    function b() {
        console.log(food);
    }
}

a()  //apple
b()  //apple


function fruit() {
    var food = 'apple'
    var obj = {
        eatfood: function() {
            if (food != '') {
                console.log('I am eating' + food);
                food = ''
            }else {
                console.log('There is nothing');
            }
        },
        pushFood: function(myfood) {
            food = myfood
        }
    }
    return obj
}
var person = fruit()
person.eatfood() //I am eating apple
person.eatfood() //There is nothing，上一次调用eatingFood时已经把food置为空了
person.pushFood('banana') //此时fruit执行完了，但不会被垃圾回收机制回收，此时的food被定义为banana
person.eatfood() //则此时打印I am eating banana