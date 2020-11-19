// 1 == '1'  true
// 1. 两者类型是否相同，相同的话比较大小
// 2. 类型不同，那么就进行类型转换
// 3. 会判断是否对比null和undefined，是的话返回true
// 4. 判断两者是否是string 和 number，是的话就将string转换为number
// 5. 判断其中一方是否为boolean，是的话就把boolean转为number  '1' == true
// 6. 判断其中是否为object，且另一方为string或number或symbol，是的话就把object转为原始类型后在判断
    // 判断 '1' == {name: 'ok'}
    // 即 判断  '1' == "[object object]"

[] == [] ;  //false
"" == "" ;  //true
[] == ![]   //true '!'的优先级高于'=='