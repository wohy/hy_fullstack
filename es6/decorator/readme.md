```
@decorator
class A {}
<!-- 等同于给A添加属性 -->
class A {}
A = decorator(A) || A
```