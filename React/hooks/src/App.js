import React, { useState, useEffect } from 'react';
import Robot from './Robot'

// class Example extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//       robotGalley: []
//     }
//   }

// //   componentDidMount() {
// //    不同时间，即使传入相同的参数 得到的结果可能不同，该函数具有副作用
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //       .then((res) => res.json)
// //       .then((data) => {
// //         this.setState({
// //           robotGalley: data
// //         })
// //     })
// //   }

//   componentDidUpdate() {
//     document.title = `点击${this.state.count}次`
//   }
//   render() {
//     return (
//       <div>
//         <p>你点击了{this.state.count}</p>
//         <button onClick={() => {
//           this.setState({count: this.state.count + 1})
//         }}>click me</button>

//         <p>{this.props.userName}</p>
//       </div>
//     )
//   }

// }

// 没有副作用
// const Robot = ({id, name, email}) => {
//   return (
//     <div>
//       <img src={`https://ruioerhrow.org/${id}`}></img>
//       <h2>{name}</h2>
//       <p>{email}</p>
//     </div>
//   )
// }


function Example(props) {
  // useState(0) 返回一个数组 一个元素为数据源(即状态，state)，还有一个元素为控制该数据的函数(则为一个高阶函数)，useState就是一个 hooks 函数，[] 解构出来
  // state 的更新是 异步的
  const [count, setCount] = useState(0)
  const [robotGalley, setRobotGalley] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { 
    // 默认页面更新，useEffect就会执行，应尽量避免副作用的默认执行，需要手动控制
    // 用到 第二个参数，[] 状态列表，只有 [] 中的状态发生变化了才会执行
    document.title = `点击${count}`
  }, [count])


  // 会无限执行 [] 里的 元素在一直变化
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then(data => setRobotGalley(data))
  // }, [])

  // 使用 async/await
  // 会报错：Effect callbacks are synchronous to prevent race conditions. Put the async function inside:
  // useEffect(async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   setRobotGalley(data)
  // }, [])

  // 需要这样写
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setRobotGalley(data)
      } catch(e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <p>你点击了{count}</p>
      <button onClick={() => {
        setCount(count + 1)
        // 不能同步，需要用到 useEffect 钩子
        // document.title = `点击${count}`
      }}>click me</button>

      <div>
        {/* && 运算符 如果前面符合的话 后面就会执行  */}
        {error !== '' && <div></div>}
        { !loading ?
          <div>
            {
              robotGalley.map((r) => {
                return (
                  <Robot key={r.id}>{r.id}</Robot>
                )
              })
            }
          </div>
          : <h2>loading...</h2>
        }
      </div>

      <hr/>

      <div>
        <Robot></Robot>
      </div>
    </div>
  )
}

export default Example