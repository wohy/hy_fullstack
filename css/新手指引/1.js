 // package.json
 ['2.3.4', '2.3.5', '2.3.4.1', '11.9']    //leetcode版本号比较
 // 排序
 let arr = [0, 1, 2, 3, 9, -1]
 // 通过两值相减的返回值的正负值来判断两数谁大谁小
 arr.sort( (a, b) => b-a);  //从大到小排列
 arr.sort( (a, b) => a-b);  //从小到大排列 
 console.log(arr); 

 function compare(str1, str2) {
     let arr1 = str1.split('.'), arr2 = srt2.split('.');
     let len = Math.max(arr1.length, arr2.length);
     for(let i = 0; i <  len; i ++) {
         let a = arr1[i] ? arr1[i] : 0;  //若没取到的话，即没有值的话，取0
         let b = arr2[i] ? arr2[i] : 0;
         a = Number(a);
         b = Number(b);  //取出的字符串类型转换为Number类型进行比较
         if(a > b) {
             return 1;
         }else if (a < b) {
             return -1;
         }
     }
     return 0;
 }