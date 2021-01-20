const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {  //运行成一个进程 启动3000端口 进行监听 让3000端口提供http服务 分别request response
  console.log(req.url);
  if (req.url === '/favicon.ico') {
    res.writeHead(200);
    res.end();
    return;
  }
  res.writeHead(200);
  // 创建好读写流，读取当前文件下的index.html，pipe res输出给前端
  fs.createReadStream(__dirname + '/index.html')
    .pipe(res)
}).listen(3000)

// npm 中 有一个httpserver 模块 快速启动一个http服务