- 区别：
  definedProperty 只能定义属性的读(get)和写(set)
  Proxy可以定义代理更多的行为，比如：in，delete...

- Proxy 代理

```let proxy = new Proxy(target, handler)```
- target：表示的是要拦截的对象
- handler：表示一个对象，要来定制拦截行为

