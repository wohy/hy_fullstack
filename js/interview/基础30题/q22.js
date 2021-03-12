var a = [1, 2, 3]
var b = [1, 2, 3]
var c = [1, 2, 4]

a == b //false
a === b //false

// 对象、数组 比较 大小 会先调用toString方法转为字符串转换 
// 会将a、c分别转换为  "1, 2, 3"  和   "1, 2, 4"
a > c // false
a < c // true