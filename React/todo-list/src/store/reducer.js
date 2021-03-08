import { CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reduce 可以接收state，但不能修改state
export const reducer = (state = defaultState, action) => {
  // state处理之前的数据，action当前的动作
  // console.log(state, action);
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState // 返回的东西会自动到 store 里，页面可以通过this.setState(store.getState())来更新数据
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    // 此时的 inputValue 已经更新
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  return state
}