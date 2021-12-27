import React, { Component } from 'react';
import './Post.css'
import { Tabs } from 'antd'

const { TabPane } = Tabs;
const EnumPostStatus = { // 文章有不同的状态
  PUBLISHED: '1',  // 私有
  UNPUBLISH: '2'   // 公开的
}
// Post 列表 后台就是做这样的事情s

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      status: '1'
    }
  }
  handleTabClick(key) {
    this.setState({
      status: key
    })
  }
  render() {
    const { status } = this.state
    return (
      <div>
        <Tabs
          onTabClick={this.handleTabClick.bind(this)}
          activeKey={status === EnumPostStatus.UNPUBLISH ? EnumPostStatus.UNPUBLISH : EnumPostStatus.PUBLISHED}
        >
          <TabPane key={EnumPostStatus.PUBLISHED} tab="Published"></TabPane>
          <TabPane key={EnumPostStatus.UNPUBLISH} tab="UnPublish"></TabPane>
        </Tabs>
      </div>
    )
  }
}