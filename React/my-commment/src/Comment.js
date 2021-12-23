import React, { Component } from 'react';
import './Comment.css'

export default class Comment extends Component {
  render() {
    return (
      <div className='commentItem'>
        <div className="username">
          {this.props.comment.username}: {this.props.comment.content}
        </div>
        <div className="content">
          
        </div>
      </div>
    )
  }
}
