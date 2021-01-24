没有es6的情况下实现继承
1. 原型链继承
  - 一般类型的属性能够正常被继承，而引用类型的属性，实例会将这些属性继承在__proto__中，并且每个实例都能够共享这些属性，并对其进行改变，这就带来了问题

2. 构造函数继承
  - 将父类拿到构造函数中去生效，并绑定构造函数的this，此时的构造函数就继承到了父类的属性，并通过构造函数去创建实例对象
  - 此时创建出来的实例，就不会共享这些实例，且相互影响

  - 缺点：代码无法复用 继承不到原型链上的东西

3. 组合继承
- 为解决以上两种继承方法的弊端，需要将两种继承方法结合

- 缺点：无论在什么情况下，都会调用两次Parent函数，不够优雅

4. 原型式继承
- 存在与原型链继承类似的问题

5. 寄生式继承
- 仅仅只是创建一个封装继承过程的函数

6. 寄生组合式继承
终极解决办法
将```Child.prototype = new Parent()```
替换为
```
  let anotherPrototype = Object.create(Parent.prototype) 
  //create 创建出来的对象没有constructor属性
  anotherPrototype.constructor = Parent
  Child.prototype = anotherPrototype
```
减少了一次Parent的执行