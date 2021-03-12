// 3.toString   error 报错 因为 . 运算符的优先级更高，会被js执行引擎识别为小数点
console.log((3).toString()); //'3'
console.log(3..toString()); // '3' ===> (3.).toString
// console.log((3）...toString()); // 多了一个没有意义的' . '