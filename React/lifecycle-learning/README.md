# 生命周期
- 注意：在componentwillmount 中的定时器 记得在 componentWillUnmount() 中 通过 window.clearXXXX 方法清除定时器 防止内存泄漏

- 在 react 中尽量的减少 DOM 操作，应该使用 ref 属性去获取 dom


# 插槽的使用 this.props.children
