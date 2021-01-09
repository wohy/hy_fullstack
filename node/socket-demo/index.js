const http = require('http')
const fs = require('fs')

// 搭建一个web服务
var server = http.createServer(function(req, res) {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, {"Content-type": "text/html"})
    const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html','utf-8')
    myreadstream.pipe(res)
  }
})

var io = require('socket.io')(server)
// 此时的io代表一个socket服务
io.on('connection', function(socket) {  //声明一个IO的使用
  console.info("一个socket连接成功了");
  // 客户端emit出来的，会被服务端on中的回调函数的参数接收
  socket.on('link_to_server', (msg) => {
    // 终端打印
    console.info(`我收到一个问题${msg}`)
    // 响应客户端
    io.emit('link_to_client', msg)
  })
})

server.listen(8888, () => {
  console.log('server is running...');
})