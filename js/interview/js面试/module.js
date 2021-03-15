// es6 有 babel 的情况下
// export  ->  import {  } from 'xxx'
// export default  -> import xxx from 'xxx'


// commonJs
// node js独有的规范，浏览器中使用需要用到 browserify 解析
// module.exports = {
//   a: 1
// }
// var module = require('xxx')  //支持动态导入


// exports.a = 1  //不支持动态导入
// module.a

// var module = {
//   exports: {}
// }
// var exports = module.exports


// AMD
// 由Require.js提出
define([
  './a',
  './b'
], function(require, factory) {
  'use strict';
  a.do()
  b.do()
});