beers 项目
安装 react-router react-router-dom
# 打开 react-router 的学习
使用 BrowserRouter 包裹，内部使用 Route 标签来指定每一个路径对应的 component 组件
BrowserRouter 多个页面，内部对应多个路由，可进行浏览器的路由切换
- 常规处理:
  ```js
  // 先引入
  import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
  ```
  ```js
  // 使用 6.x 版本
  // Route 使用 Routes 包裹；
  <Router>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/beer' element={<Beer/>}></Route>
    </Routes>
  </Router>

  // 老版本 不需要使用 Routes 去包裹
  <Router>
    <div>
      <Route path='/' component={Main}></Route>
      <Route path='/beer' component={Beer}></Route>
    <div/>
  </Router>
  ```

-  路由跳转
 - 常规处理：
  ```js
  import { Link } from 'react-router-dom';
  render() {
    return (
      <div>
        Main
        <Link to="/beer">Beer</Link>
      </div>
    )
  }
  ```
  老版本 需要 通过 在根路径的 Route 配置时，在 Route 标签中加上 exact 属性，表示精准匹配，避免在 / 下显示 其他path含/在内的路径 页面；
  老版本的模糊匹配规则：
    只要location.pathname以path开头就算匹配成功
    匹配成功就加载对应组件；
    整个匹配过程是逐一匹配，一个匹配成功了，并不会停止匹配。

- 路由传参
  父组件在引入的子组件的标签上 以 attribute 的形式，声明传给 子组件的参数 xxx="xxxx"
  - 例如 Main.js 中 引入 Header 子组件
  ```js
    // 父组件 传参
    <Header siteName="哈啤"/>
  ```
  ```js
    // Header.js 子组件接收
    {this.props.siteName}
  ```

## 安装 prop-types
npm i prop-types 
prop 检测工具
可用于 约束 传参类型