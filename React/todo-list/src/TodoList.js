import React, { Component } from 'react';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)  //观察者，store 发生变化 handleStoreChange 就会自动执行
  }

  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      handleInputChange={this.handleInputChange}
      handleButtonClick={this.handleButtonClick}
      handleItemDelete={this.handleItemDelete}
      list={this.state.list}
    ></TodoListUI>
  }

  componentDidMount() { //生命周期
    const action = getTodoList() 
    store.dispatch(action) //若 action 接收的是一个函数的话，函数会自动执行掉
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    // 将这个 action 传给 store 里的 reducer
    // dispatch 收走 action 先到 store
    // 源码中的机制， reducer 相当于 store 的秘书
    // 通过 dispatch 接收到的数据 会自动传入到 reducer 的第二个参数 
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange() { // 感知到store的变化
    console.log('store change');
    // 拿到 store 的State 重新设置数据源 更新数据
    this.setState(store.getState()) 
  }

  handleButtonClick() {
    const action = getAddItemAction()
    store.dispatch(action)
    this.setState(store.getState()) 
  }
}

export default TodoList