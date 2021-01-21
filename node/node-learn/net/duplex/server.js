const net = require('net')

// 和socket建立连接
const server = net.createServer((socket) => {
  socket.on('data', function(buffer) {
    // 切割下前两个字节 为 包序号
    const seqBuffer = buffer.slice(0, 2)
    // 第二位及之后的 就为该课程的id
    const lessonid = buffer.readInt32BE(2);
    setTimeout(() => {
      // 将数据从socket中取出 将 seqBuffer 与 data中对应的lesson 拼接起来 编码为二进制数据包
      const buffer = Buffer.concat([
        seqBuffer,
        Buffer.from(data[lessonid])
      ])
      // 再将该buffer数据包写入到 socket 中
      socket.write(
        buffer
      )
    }, 10 + Math.random() * 1000)     //10ms到1s内随机时间做出响应
  })
})

// 假数据
const data = {
  136797: "01 | 课程介绍",
  136798: "02 | 内容综述",
  136799: "03 | Node.js是什么？",
  136800: "04 | Node.js可以用来做什么？",
  136801: "05 | 课程实战项目介绍",
  136803: "06 | 什么是技术预研？",
  136804: "07 | Node.js开发环境安装",
  136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
  136807: "09 | 模块：CommonJS规范",
  136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
  136809: "11 | 模块：npm",
  141994: "12 | 模块：Node.js内置模块",
  143517: "13 | 异步：非阻塞I/O",
  143557: "14 | 异步：异步编程之callback",
  143564: "15 | 异步：事件循环",
  143644: "16 | 异步：异步编程之Promise",
  146470: "17 | 异步：异步编程之async/await",
  146569: "18 | HTTP：什么是HTTP服务器？",
  146582: "19 | HTTP：简单实现一个HTTP服务器"
}

server.listen(4000)