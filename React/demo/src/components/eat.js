import React, { Component, Fragment } from 'react'
// import PropType from 'prop-types'
import '../style/eat.css'
import EatItem from './eatItem'
import axios from 'axios'

class Eat extends Component {
  constructor(props) {
    super(props)  //超级继承 访问到父类
    this.state = {
      inputValue: 'hello',
      list: ['宫保鸡丁', '醋溜肥肠']
    }
    
  }

  inputChange() {
    // console.log(e.target.value);
    // 此处的 this 为undefined，inputChange的调用是input执行的
    // 所以需要 通过bind() 方法 将 inputChange拿到 Eat 构造函数中, 此时this才能访问到Eat的成员属性
    // 而此时react依然不会对组件中的数据源进行改变
    // this.state.inputValue = e.target.value

    // 正确的操作 实现数据源中 inputValue 的双向绑定
    this.setState({
      inputValue: this.input.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    console.log(index);
    // react 禁止直接操作数据源 性能会很差
    // 所以需要 一个值先接受 this.state.list
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  componentDidMount() {
    axios.get('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {
        console.log(res);
      })
  }

  render() {
    return (
      <Fragment>
        <div>
          <div>
            {/* <label for="addGoods">加菜：</label> */}

            <input id="addGoods" 
              className="input" 
              value={this.state.inputValue} 
              onChange={this.inputChange.bind(this)}
              ref={(input) => {this.input = input}}
            ></input>
            <button onClick={this.addList.bind(this)}>下单</button>
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                // return <li key={index+item} onClick={this.deleteItem.bind(this, index)}>{item}</li>
                return (
                  <EatItem index={index} content={item} list={this.state.list} deleteItem={this.deleteItem.bind(this)} key={index+item}/>
                )
              })
            }
            
          </ul>
        </div>
      </Fragment>
    )

  }
}

export default Eat