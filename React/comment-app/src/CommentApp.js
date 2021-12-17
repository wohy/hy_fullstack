import React from 'react';
import './CommentApp.css'

class CommentApp extends React.Component { // 通过继承快速创建好一个组件
  constructor() {
    super();
    this.state = {
      name: 'CommentApp'
    }
  }
  // 至少要实现的方法
  render() {
    return ( // JSX  react 中有一种 JSX 的语法来方标签 react template XML in JS
      // 用于网页标签的 XML 叫做 HTML
      <div class="wrapper">
        {this.state.name}
      </div>
    )
  }

}

export default CommentApp; // 向外输出 挂载到 root 节点上