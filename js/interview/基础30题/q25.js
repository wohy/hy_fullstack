function foo() {}
var oldName = foo.name
console.log(oldName); //foo

foo.name = 'bar'  //函数名是禁止被修改的 所以此处不生效

console.log([oldName, foo.name]); // ['foo', 'foo']
