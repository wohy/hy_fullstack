# react 组件化 组件之间彼此独立

# 什么是 hooks (钩子)
 钩子函数：系统在某一时刻自动调用的函数
 处理消息的一种方法，用来监视指定程序的

# hooks 为什么存在
在函数组件中需要处理副作用，可以用钩子把外部的代码"钩"进来使用
发展历程：
  1. 无状态组件，缺点：没有生命周期，没有副作用
  2. HOC(高阶组件方式)，加深的组件的复杂性
  3. hooks 产生 React 16.7，为了给函数式组件加上状态。之前的版本，函数和生命周期都写在类组件中
    不再需要 类组件 ，不再有 binding ， 甚至有可能取代 redux

# 纯函数
给一个函数同样的参数，那么这个函数永远都给你返回同样的值
react 组件输入相同的参数，渲染的 UI 应该永远一样

# 副作用
与纯函数相反
指的是一个函数处理了与之返回值无关的事情
输入参数一样 而输出结果不确定的情况就是副作用

# 副作用是件坏事吗？
不是，我们需要合理的使用副作用，要让函数的副作用能让我们利用

# 常见的 hooks 函数
官方常用的：useState useEffect useContext useReducer

1. useState
  ```
  function Example() {
    // useState(0) 返回一个数组 一个元素为数据源(即状态，state)，还有一个元素为控制该数据的函数(则为一个高阶函数)，useState就是一个 hooks 函数，[] 解构出来
    const [count, setCount] = useState(0)
    return (
      <div>
        <p>你点击了{count}</p>
        <button onClick={() => {
          setCount(count + 1)
        }}>click me</button>
      </div>
    )
  }

  ```

2. useEffect
  副作用钩子
  实现三个生命周期 集合起来的功能
  默认页面更新，useEffect就会执行，应尽量避免副作用的默认执行，需要手动控制，用到 第二个参数，[] 状态列表，只有 [] 中的状态发生变化了才会执行

3. useContext

  react 中传递参数 (即通信)
    类组件中；
      组件标签上绑定 xxx={xxx}
      再通过 this.props.xxx 即可取到该组件的参数
    函数式组件：
      直接将 props 作为参数
      再通过 props.xxx 即可取到该组件的参数
  可若要给更深的子组件通信时，就需要将该 props 传递的更深( props 的深度注入)，可传递的越深的话，组件的更新的频率就会越高，UI 渲染的效率就会越慢
  这就是 props 的弊端

  - 可以使用 redux 解决，可若项目中的状态不多的话 就没有很大必要 再使用 redux
  
  - 还可以使用：
  index.js 是入口组件
  App.js 是根组件
  Robot.js 是子组件
  现在希望可以 让 Robot.js 可以用到 index.js 中的 defaultContextValue 对象的 userName
  1. 在 index.js 中
  创建一个 appContext 上下文 初始化为 defaultContextValue ，类似于 eventBus，使用 Provider 将 App 包裹起来
  2. 在 Robot.js 中
  引入创建的上下文，通过 与 Provider 对应的 Consumer ，将 JSX 模板包裹，并使用一个函数接收参数 value， 返回该 JSX 模板，对应的 index.js 中传出的 defaultContextValue 可在 value 中取到

  - 有了 hooks useContext 也可以完成
  引入 useContext
  再 const value = useContext(appContext)
  则可直接 使用 value 来 替代 appContext
  则 value 就可取到 defaultContextValue 中的 userName


4. useReducer


# hooks  useEffect 里面需要注意的细节
1. 夺命连环 call
  ```
  会无限执行 [] 里的 元素在一直变化
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(data => setRobotGalley(data))
  }, [])
  ```
  如上会无限发请求

2. 在 useEffect 中使用 async/await

3. 如何处理 loading 
  当数据请求时间过长时 需要添加一个 loading
4. hoooks 中如何处理异常
  try catch



