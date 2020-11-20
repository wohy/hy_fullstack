# 原始类型有几种？
- boolean null unidefined number string symbol

# null 是对象吗？
- 是的 
    typeof(null) 返回 object
    000 代表的是对象， 而null的二进制都是0

# 原始类型和对象类型有什么差别
    原始类型存的是值
    而对象类型存的是地址 (指针)

# typeof 能正确判断的类型是？
    typeof 只能判断原始类型 (null 除外)
    instanceof 只能判断引用类型 与原型有关 而原始类型没哟属性

# 让instanceof也具有判断引用类型的能力

# instanceof 的原理 
    instanceof.js

# 类型转换
    转为布尔值
    转为数字
    转为字符串
## 对象转原始值 
对象在转类型的时候会调用一个内置的[[ToPrimitive]]属性
- 如果已经是原始类型那就不用转换了
- 调用x.valueOf(), 如果转为了基础类型,就返回值
- 如果还未转换为原始类型，再调用x.toString(),如果转为了基础类型,就返回值
- 如果还未转换为原始类型,就报错
String([]) 返回一个"" 空字符串

## 四则运算
- 加法运算:运算中其中一方为字符串，另一方一定会转换为字符串，如果一方或另一方不是字符串那么就会将它转换为数字或字符串进行运算
   例如， 1 + '1' 返回 '11'
         true + '1' 返回'true1'
         true + true 返回2
         4 + [1, 2, 3] 返回 "41, 2, 3"   先把数组转换为原始值 通过valueof() 和 toString() 转换为"1,2,3" , 则最终返回"41, 2, 3"
         'a' + + 'b' 就相当于 'a' + (+ 'b') 而 +'b' 又将转换为NAN 所以最终返回 "aNAN"

- 乘法 除法 加法：只要其中一方为数字，另一方一定会转为数字来运算 


# 面试
Vue

Vue组件间通信($refs)
Vue key值作用（diff)
Vue 数据双向绑定（v-model语法糖）
this.$nextTick(() => {}) (引申Event loop)
Vue router原理(hashchange, popstate)加分Vue patch函数解析

React

React fiber架构
React Hoc
React 生命周期 （重渲染）
Redux reducer解析

CSS

盒模型
清除浮动（BFC）
flex(flex: 1展开描述)

JS

this指向（手写call, this指向调用它的对象）
prototype
JS继承
JS事件委托（冒泡、捕获）
柯里化

性能

HTTP
强缓存、协商缓存（200, 304）
垃圾回收
设计模式（单例、工厂、装饰器、策略、观察者） 加分


# == 和 === 的区别?
- == 判断值相等  === 判断值和属性相等  
- 原理：== index2.js

# 什么是闭包？ index3.js
- 在一个函数体内嵌套的一个函数，拿到函数体外执行，即产生闭包

# 深浅拷贝   copy.js
- 什么是深浅拷贝，如何实现
