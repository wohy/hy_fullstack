import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const defaultContextValue = {
  userName: 'ceo'
}

// 创建一个 appContext 上下文 初始化为 defaultContextValue ，类似于 eventBus，使用 Provider 将 App 包裹起来
export const appContext = React.createContext(defaultContextValue)

ReactDOM.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App/>
    </appContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
