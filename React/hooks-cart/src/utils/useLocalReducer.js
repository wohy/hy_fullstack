import { useReducer } from "react";

// 数据仓库
const store = {
  age: '111'
}

// 管理者
const reducer = (state, action) => {
  switch(action.type) {
    case "changeAge" :
      return {
        ...state,
        age: action.age
      }
    default :
      return {
        ...state
      }
  }
}

function useLocalReducer() {
  const [state, dispatch] = useReducer(reducer, store)
  return [
    state,
    dispatch
  ]
}

export default useLocalReducer