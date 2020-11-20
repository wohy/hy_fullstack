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
// 此时不符合上方任何一点，判断两个引用类型是否相等，判断的是指针是否相等
// 而上述两个[]，需分配两块不同的地址，所以指针指向肯定不同，则返回false

"" == "" ;  //true
[] == ![]   //true 
// 1.'!'的优先级高于'==',!使[]强行先转为boolean型,[]转为boolean为true,则!true为false
// 2.判断 [] == false ,此时一方为boolean型遵从上方第5条,false就转为0
// 3.判断 [] == 0 ,此时的一方为object,另一方为number类型,遵从第6条, []转为原始类型""
// 4.判断 "" == 0 ,此时一方为string,遵循第4条,""转为number型为0
// 5.判断 0 == 0 ,返回true