import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// class AutoFocusElement extends Component {
//   componentDidMount() { // 挂载后 获取 dom 节点
//     this.input.focus(); // 通过 ref 后，可以通过 this 去获取到该 dom，并调用 该 dom 提供的方法
//   }
//   render() {
//     return (
//       <input ref={(input) => this.input = input} />
//     )
//   }
// }
// ReactDOM.render(
//   <AutoFocusElement/>,
//   document.getElementById('root')
// );


class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content"></div>
        {/* 通过 props 传递一段 html , 实际可以通过插槽去完成*/}
        {/* {this.props.content} */}

        {/*插槽  组件引用处， 内部嵌入的 html 可以通过 children 取到*/}
        { this.props.children }
      </div>
    )
  }
}
ReactDOM.render(
  // <Card content={
  //   <div>
  //     <h2>React.js 小书</h2>
  //     <div>开源、免费、专业、简单</div>
  //     订阅：<input />
  //   </div>
  // } />,

  <Card>
    <div>
      <h2>React.js 小书</h2>
      <div>开源、免费、专业、简单</div>
      订阅：<input />
    </div>
  </Card>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
