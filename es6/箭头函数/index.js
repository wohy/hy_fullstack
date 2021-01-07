// let foo = {
//   value: 1,
//   getValue: () => console.log(this.value) //箭头函数中没有this的概念，此时的this会指向window 省去{} 会直接return后面的内容
// }

// foo.getValue()  //undefined 若把其声明为一个function函数则会打印1

function Foo() {
  this.value = 1
}

Foo.prototype.getValue = () => console.log(this.value);

let foo = new Foo()

foo.getValue() //undefined