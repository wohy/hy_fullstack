var a = /123/;
var b = /123/;
// 正则每一个表达式都是一个单独的实例 new RegExp

a == b  //false
a === b //false