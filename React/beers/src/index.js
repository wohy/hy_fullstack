import React from 'react';
import { render  } from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Main from './components/Main.js';
import Beer from './components/Beer.js';

// 路由的配置 最新 6.x 版本的写法
const Root = function () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/beer' element={<Beer/>}></Route>
      </Routes>
    </Router>
  )
}

render(<Root />, document.getElementById('root'))