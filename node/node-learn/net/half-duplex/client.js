const net = require('net')


// 课程id的列表
const lessonids = [
  "136797",
  "136798",
  "136799",
  "136800",
  "136801",
  "136803",
  "136804",
  "136806",
  "136807",
  "136808",
  "136809",
  "141994",
  "143517",
  "143557",
  "143564",
  "143644",
  "146470",
  "146569",
  "146582"
]

const socket = new net.Socket({})

socket.connect({
  host: '127.0.0.1',
  port: 4000
})

// socket.write('good morning wn')

let buffer = Buffer.alloc(4)
let index = Math.floor(Math.random() * lessonids.length)
buffer.writeInt32BE(
  lessonids[index]
)
socket.write(buffer)

// 接收到服务器端往socket管道里面添加数据
socket.on('data', (buffer) => {
  console.log(buffer.toString());

  buffer = Buffer.alloc(4)
  index = Math.floor(Math.random() * lessonids.length)
  buffer.writeInt32BE(
    lessonids[index]
  )
  socket.write(buffer)

})