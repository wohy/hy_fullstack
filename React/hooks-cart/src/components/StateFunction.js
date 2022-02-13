import React, { useState, useReducer } from 'react';
import useLoadData from '../utils/useLoadData';
import useLocalReducer from '../utils/useLocalReducer';

// const set = new Set()
// const Context = createContext(null)

// redux 必须内容，store reducer
/*
const store = {
  num: 1
}
const reducer = (state, action) => {
  switch(action.type) {
    case "changeNum" :
      return {
        ...state,
        num: action.num
      }
    default :
      return {
        ...state
      }
  }
*/



// 使用 useState 来创建状态
// 1. 引入
// 2. 接收一个参数作为初始值
// 3. 返回一个数组，第一个值表示一个状态状态，第二个为改变该状态的函数
function StateFunction() {
  // const [num, setNum] = useState(1);
  // const [age, setAge] = useState(18);

  //  useEffect 的使用
  // 1. 接收一个函数作为参数 副作用
  // 2. 接收第二个参数 为该副作用 发生的依赖列表 只有列表中的数据发生变化 函数才会执行
  // 3. 返回一个函数 会先执行该返回函数，在执行副作用
  /*
  useEffect(() => {
    // useEffect 的使用
    // console.log('函数组件结束渲染');
    // document.body.addEventListener('ooo', () => {})
    // return () => {
      // document.body.removeEventListener('ooo', () => {}) // 可以保证 body 只会添加一次这样的事件，不会重复添加
      // console.log('销毁');  // 再执行 useEffect 的副作用函数之前，先会执行该返回的函数
    // }
    console.log('useEffect');
  }, [num]);
  */



  // useLayoutEffect 的使用
  /*
  useLayoutEffect(() => {
    console.log('useLayoutEffect'); // 执行在 useEffect 之前
    document.body.addEventListener('ooo', () => {})
    return () => {
      document.body.removeEventListener('ooo', () => {}) // 可以保证 body 只会添加一次这样的事件，不会重复添加
      console.log('销毁');  // 再执行 useLayoutEffect 的副作用函数之前，先会执行该返回的函数
    }
  }, [num])
  */

  /*
  return <div onClick={ () => { setNum(num => num + 1) }}>
      这是一个函数组件 - { num }</div>
}
  */



  /*
  // useMemo 的使用
  // function getDoubleNum() {
  //   console.log('获取当前值双倍的数值');
  //   return 2 * num
  // }
  const getDoubleNum = useMemo(() => {
    console.log('获取当前值双倍的数值');
    return 2 * num
  }, [num])
  // 没有使用 useMemo 时，这里的 getDoubleNum 事件 依然会每点击一次就会执行一次
  // 虽然每次点击改变的是 age， 而不是 num
  // 使用了 useMemo 之后，直接使用 useMemo 返回的值，不需要像函数一样再去调用，类似于未使用之前 getDoubleNum 函数调用返回的值
  // 使用后，并不会点击一次就执行一次函数 执行打印，而只有 useMemo 依赖的列表项发生改变，函数才会重新执行
  // 若依赖项为空 则 点击 不会引起页面上 num 的变化，即函数不会执行 num 不会乘以2
  return <div onClick={ () => { setAge(age => age + 1) }}>
      这是一个函数组件 - { getDoubleNum } age 的值为{ age }</div>
}
  */



  // useCallback 的使用
  // 在使用方法上，useCallback 与 useMemo 相同
  // 但返回的是一个函数
  /*
  const getDoubleNum = useCallback(() => {
    console.log('获取当前值双倍的数值');
    return 2 * num
  }, [num])
  set.add(getDoubleNum)
  console.log(set.size); // 依赖项变化时，getDoubleNum 会发生变化，set 的长度就会增加
  return <div onClick={ () => { setNum(num => num + 1) }}>
      这是一个函数组件 - { getDoubleNum() } age 的值为{ age }
      <Child callback={getDoubleNum}></Child>
    </div>
}
*/


  // useRef 的使用
  /*
  // let timer
  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setNum(num => num + 1)
  //   }, 400)
  // }, [])
  // // 在渲染过程中，timer 会丢失，所以无法达到想要的目的，将 timer clear掉
  // useEffect(() => {
  //   if (num > 10) {
  //     console.log('超过了10');
  //     clearInterval(timer) // 这里的 timer 为 undefined
  //   }
  // }, [num])

  // 这里就需要使用到 useRef，才能将 setInterval 的 id 记录下来，并成功将其 clear 掉
  // 其中手动改变 ref.current 的值，并不会引起重新渲染
  const ref = useRef()
  console.log(ref)
  useEffect(() => {
    ref.current = setInterval(() => {
      setNum(num => num + 1)
    }, 400)
  }, [])
  useEffect(() => {
    if (num > 10) {
      console.log('超过了10');
      clearInterval(ref.current)
    }
  }, [num])
  return <div onClick={ () => { setNum(num => num + 1) }}>
  这是一个函数组件 - { num }</div>
  */



  // useContext 的使用
  // return <div>
  //   这是一个函数组件 - {num}
  //   {/* 如果这里不使用 useContext， 但又有很多个子组件的话，就需要给每一个子组件都传一个参数 num */}
  //   {/* <Item1 num={num}></Item1>
  //   <Item2 num={num}></Item2> */}

  //   {/* 使用 UseContext */}
  //   <Context.Provider value={num}>
  //     <Item1></Item1>
  //     <Item2></Item2>
  //   </Context.Provider>
  // </div>



  // useReducer 的使用
  // 不需要 useState
  // const [state, dispatch] = useReducer(reducer, store)
  // return <div onClick={ () => {
  //   dispatch({
  //     type: 'changeNum',
  //     num: 100
  //   })
  // }}>
  //   这是一个函数组件 - { state.num }
  // </div>



  // 自定义 hooks 的使用
  // 模拟 异步获取接口数据的 hooks 执行，1s 后 num 会变为2
  const [num, setNum] = useLoadData()
  const [state, dispatch] = useLocalReducer()
  return <div onClick={ () => {
    dispatch({
      type: 'changeAge',
      age: '222'
    })
  }}>
    这是一个函数组件 - { num } -- {state.age}
  </div>

}

/*
// function Item1(props) {
//   return <div>
//     子组件{props.num}
//   </div>
// }
// function Item2(props)  {
//   return <div>
//     子组件{props.num}
//   </div>
// }
// 使用 useContext
function Item1() {
  const num = useContext(Context);
  return <div>
    子组件{num}
  </div>
}
function Item2()  {
  const num = useContext(Context);
  return <div>
    子组件{num}
  </div>
}
*/


/*
function Child(props) {
  useEffect(() => {
    console.log('callback更新了');
  }, [props.callback])
  return <div>Child</div>
}
*/
  

export default StateFunction