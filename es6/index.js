// es6 新增 
// let const 防止声明提升
// 字符拼接
let example = 'Tom'
// 给foo赋值为 "this is Tom"
const foo = 'this is' + example  //es5
const foo = `this is ${example}` //es6