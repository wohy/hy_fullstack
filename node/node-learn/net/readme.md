# 半双工通信 
- 是一种相互通信
  客户端 <--socket--> 服务端
  你走一步 我走一步
  c --id-->s  s--lesson-->c

# 全双工通信
每次传递时，加上一个2个字节的数据包序号
支持高并发
不完整包 或 包丢失

- 数据包的乱序
  客户端请求时  服务端发出的是对上一个请求的响应
  - 可当前加上2个字节的包序号时，还是可通过该序号对应正确的数据包返回给前端