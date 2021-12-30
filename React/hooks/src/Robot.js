import React, { useContext } from 'react';
import './Robot.css'
import { appContext } from './index'

const Robot = ({ id, name, email }) => {
  const value = useContext(appContext)
  return (
    // 不使用 useContext 的话
    //  与 Provider 对应的为 Consumer
    // <appContext.Consumer>
    //   {(value) => {
    //     return (
          // <div className="item">
          //   <img src={`https://robohash.org/${id}`}></img>
          //   <h2>{name}</h2>
          //   <p>{email}</p>
          //   <p>作者：{value.userName}</p>
          // </div>
    //     )
    //   }}
    // </appContext.Consumer>

    // 使用 useContext
    <div className="item">
      <img src={`https://robohash.org/${id}`}></img>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
    </div>
    
  )
}

export default Robot