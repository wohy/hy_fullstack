import React, { Component } from 'react';
import './CommentApp.css'
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
  constructor() {
    super(); // 把Component 基类(父类) 它的构造函数执行以下
    this.state = {
      comments: []
    }
  }

  // 留下一个钩子函数 当CommentInput 提交了 comment 时，执行该 handleSubmtiComment
  handleSubmtiComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    return (
      <div className='wrppper'>
        {/* 这里直接将 一个 handleSubmtiComment 方法 传给 CommentInput，bind 用于绑定当前的this */}
        <CommentInput onSubmit={this.handleSubmtiComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}