# 生命周期
- 注意：在componentwillmount 中的定时器 记得在 componentWillUnmount() 中 通过 window.clearXXXX 方法清除定时器 防止内存泄漏

- 在 react 中尽量的减少 DOM 操作，应该使用 ref 属性去获取 dom


# 插槽的使用 this.props.children


# app.tsx app组件
tsx 文件会由 webpack 交给 ts-loader，再交给 babel-loader 进行解析

# index.tsx
  入口文件 由 webpack 的 entry 进行打理
