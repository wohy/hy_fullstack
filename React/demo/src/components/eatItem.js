import React, { Component } from 'react';
class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillUnmount() {  //只在页面刷新的时候执行一次  1
    console.log('componentWillUnmount---组件将要挂载到页面');
  }

  componentDidMount() { //只在页面刷新的时候执行一次 3
    console.log('componentDidMount---组件挂载完成');
  }

  shouldComponentUpdate(nextProps, nextState) {  //组件发生更新之前执行 4
    console.log('shouldComponentUpdate---组件发生更新之前');
    console.log(nextProps);
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  componentDidUpdate() {  // 7
    console.log('componentDidUpdate---组件更新完成');
  }

  componentWillUpdate() { //组件发生改变之前执行 5
    console.log('shouldComponentUpdate---组件发生改变之前');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }

  render() { //2  //6
    console.log('render---组件正在挂载中');
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }

  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
    // this.props.list = [] 无法更改list 父组件传过来的 list 是只读的
  }
}
 
export default EatItem;