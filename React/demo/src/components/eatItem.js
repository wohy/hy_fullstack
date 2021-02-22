import React, { Component } from 'react';
class EatItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // console.log(this.props.index);
    this.props.deleteItem(this.props.index)
    // this.props.list = [] 无法更改list 父组件传过来的 list 是只读的
  }

  render() { 
    return ( 
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }
}
 
export default EatItem;