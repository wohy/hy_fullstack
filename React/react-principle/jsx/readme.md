# babel 编译
利用 babel 将 JSX 语法代码转化为，React.createElement('标签名'， {类名....一些属性内容})
JSX 的本质实际就是 React.createElement 函数调用的语法糖，JSX 充分具备 JavaScript 的能力

# 为什么不直接用 React.createElement 创建元素呢
JSX 代码层次更分明，更清晰。
JSX 的语法糖，可以使用 类 HTML 标签语法来创建虚拟 DOM ，提高研发效率和体验

# React.createElement
主要功能就是在处理数据，将数据格式化
1. 二次处理 key、ref、self、sourse 四个属性
2. 遍历 config，筛出可以放入 props 里的属性
3. 提取子元素，推入到 childArray 中 （即props.children）数组
4. 格式话 defaultProps
结合入参，处理出 type、key、ref、self、sourse、ReactCurrentOwner.current、props 数据发起 ReactElement 调用

# ReactElement
ReactElement 同过入参的描述 组装出 元素 返回给 React.createElement ，最终 React.createElement 将 ReactElement 对象返回出来，返回出来的 对象即为虚拟 DOM 元素。可以试着打印出 JSX 元素，可以看到为一个标准的 ReactElement 实例，即为虚拟 DOM 

# ReactDOM.render
- 入参
```
```
ReactDOM.render(
    <!-- 需要渲染的元素(ReactElement) -->
    element,
    <!-- 元素挂载的目标容器(一个真实的DOM节点) -->
    container,
    <!-- 回调函数，可选参数，可以用来处理渲染结束后的逻辑 -->
    [callback]
)
```


