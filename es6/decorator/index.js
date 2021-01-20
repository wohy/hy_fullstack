// 不能换行，要紧跟着想要装饰的类
// @annotation
// class MyClass {
  
// }

// function annotation(target) {
//   target.annotated = true
// }



// 装饰类里面的方法
class MyClass {
  @umenumerable
  @readonly
  method() {

  }
}

function readonly(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}

function umenumerable(target, name, descriptor) {
  descriptor.enumerable = false
  return descriptor
}