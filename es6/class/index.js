class Foo {
  // 加一个construct, 则该类通过new构建实例，new出来的实例将继承Foo的方法
  constructor() {

  }
  //静态方法 为私有的 无法被new出来的实例继承 该方法无需给外界调用，可以设为私有，可降低代码的耦合度，避免与外界方法命名冲突
  static bar() {
    this.bar()
  }
  static baz() {
    console.log('hello');
  }

  // 若不加static时，js中默认为共有方法
  // baz() {
  //   console.log('hello');
  // }
}
let foo = new Foo()
foo.baz()

class Shape {
  constructor (width, height) {
    this._width = width
    this._height = height
    // this.area = width * height
  }
  get area () { //方法前加一个get 方法会自动执行掉
    return width * height
  }

}
const square = new Shape(10, 10)
console.log(square.area); //若没有get 后要加一个()，将函数执行