const { rejects } = require('assert');
const fs = require('fs');

// 异步任务
fs.readFile('./index.html', 'utf8', (err, file) => {
  console.log(file);
})

// 包装一层Pomise
let p = (url) => new Promise((resolve, reject) => {
  fs.readFile(url, 'utf8', (err, file) => {
    if(err) {
      reject();
    }else {
      resolve(file);
    }
  })
})

p('./index.html').then((file) => {
  console.log('file', file);
})