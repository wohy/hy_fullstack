import React, {Component} from 'react'
// {Component} 解构出React中的Component
class App extends Component {
  render() {
    return ( //jsx的语法
      <ul className="items">
        <li>vue</li>
        <li>{false ? 'react' : 'REACT'}</li>
      </ul>
    )
  }
}

export default App