// var p = document.createElement('p')
// p.innerText = 'text';

// var root = document.getElementById('root');
// root.appendChild(p);
import React from 'react';
import ReactDom from 'react-dom';
import TestComponent from './test.jsx';


ReactDom.render(<TestComponent/>,document.getElementById('root'))