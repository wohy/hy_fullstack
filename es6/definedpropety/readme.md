- 数据劫持
Object.definedPropety(obj, prop, descriptor) 监听对象
- 参数：
  1. obj：监听的对象； 
  2. prop：对象中要定义或被修改的属性名，有则修改，没则添加； 
  3. descriptor：将要被修改的属性的描述符(是否可遍历、枚举、修改、删除、添加等), 还有set 和 get属性。 defined.js前两个属性为数据描述符
  get 属性的值 接getter拿到的值（被js中被get修饰的函数可以直接拿到该函数的返回值，又称为getter）
  set 类似
  只能出现 数据描述符 或者 属性描述符 不能同时出现
第三个参数必须有

- defineProperty 类似与vue中的watch方法，watch和computed的区别在于computed会留下缓存