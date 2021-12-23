import React, { Component } from 'react';
import './CommentInput.css'

export default class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      content: '',
      key: 1
    }
  }
  handleUsernameChange(event) { // state 数据与用户名输入框中输入的用户名同步
    this.setState({ // 通过 setState 方法去改变 this.state 中的属性值
      username: event.target.value
    })
  }
  handleContentChange(event) { // state 数据与内容输入框中输入的内容同步
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit() { // 提交
    const newKey = this.state.key + 1 
    this.setState({
      key: newKey
    })
    if(this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        key: this.state.key
      })
    }
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input 
              value={this.state.username} 
              onChange={this.handleUsernameChange.bind(this)} 
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea 
              value={this.state.content} 
              onChange={this.handleContentChange.bind(this)}
            ></textarea>
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    )
  }
}