import React, { Component } from 'react';
import './CommentList.css'
import Comment from './Comment'

export default class CommentList extends Component {
  render() {
    return (
      <div>
        {/* 在 react 中没有指令的概念，
          循环通过遍历 直接返回一个 html 结构，再将对应的参数 通过 prop 传给子组件即可
          数组中的每一个对象 需要一个唯一 的 key
        */}

        {
          this.props.comments.map((comment) => <Comment key={comment.key} comment={comment}/>)
        }
        
      </div>
    )
  }
}