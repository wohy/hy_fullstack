import React, { Component } from 'react';
import './Login.css'
import config from './config.js'
import { Form, Input, Button, Row } from 'antd';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="form">
        <div className="logo">
          <img src={config.logoPath} alt="logo" />
          <span>{config.siteName}</span>
        </div>
        <Form>
          <Form.Item label="username" name="username">
            <Input placeholder='请输入用户名'></Input>
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input placeholder='请输入密码'></Input>
          </Form.Item>
          <Row>
            <Button type='primary' htmlType='submit'>Sign In</Button>
            <p>
              <span className="margin-right">
                Username:guest
              </span>
              <span>Password:guest</span>
            </p>
          </Row>
        </Form>
      </div>
    )
  }
}