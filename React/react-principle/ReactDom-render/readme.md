# ReactDom.render 渲染链路
## ReactDom.render 调用栈的逻辑分层
通过浏览器 performance 可以观察到渲染过程中调用的方法
### 主要方法
- scheduleUpdateOnFiber 方法
用于调度任务
- performSyncWorkRoot 方法
开启 render 阶段
- commitRoot 方法
开启真实的 DOM 渲染过程( commit 阶段)
### 三个阶段
通过 scheduleUpdateOnFiber 方法 和 commitRoot 方法 可以将链路划分为三个阶段
1. 初始化阶段
2. render 阶段
3. commit 阶段

## 初始化阶段 --- 拆解 ReactDOM.render 调用栈
完成 fiber 树中基本实体的创建
### 调用 legacyCreateRootFromDOMContainer 方法
1. 创建 container._reactRootContainer 对象，并赋值给 root
2. 将 root 上的 _internalRoot 属性赋值给 fiberRoot
3. 将 fiberRoot 与方法入参一起，传入 updateContainer 方法， 形成回调
4. 将 updateContainer 回调作为参数传入，调用 unbatchedUpdates 方法