const { rejects } = require('assert');
const fs = require('fs');

// 异步任务
fs.readFile('./index.html', 'utf8', (err, file) => {
  console.log(file);
  fs.readFile('./a.js', 'utf8', (err,file) => {
    console.log(file);
  })
})

// 包装一层Pomise 使多个异步任务串行
let p3 = (url) => new Promise((resolve, reject) => {
  fs.readFile(url, 'utf8', (err, file) => {
    if(err) {
      reject();
    }else {
      resolve(file);
    }
  })
})

// p3('./index.html').then((file) => {
//   console.log('file', file);
// })

p3('./index.html').then((c1) => {
  return p3('./a.js')
}).then((c2) => {
  
})