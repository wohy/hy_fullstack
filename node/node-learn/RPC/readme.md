# Remote Procedure Call 远程过程调用

和Ajax有什么相同点？
1. 都是两个计算机之间的通信 (Ajax我们的电脑和服务器；RPC是服务器与服务器之间的通信)
2. 都需要双方约定一个数据格式

和Ajax有什么不同点？
1. RPC通信为内网通信 不一定使用 DNS(域名解析) 作寻址服务，使用会浪费资源
2. RPC应用层协议 一般不使用HTTP协议
3. RPC基于TCP 或者 UDP 协议

- 寻址/负载均衡
  ·Ajax：浏览器 --域名--> DNS --IP--> 浏览器 --通过IP--> 找到服务器
  ·RPC：使用特有服务进行寻址 --id--> 寻址 --IP-->
- TCP通信方式
  ·Ajax：单工通信 客户端向服务端 或者 服务端向客户端通信
  ·RPC：多种形式(半双工通信、全双工通信)
- 二进制协议
  ·Ajax：采用的是HTTP协议(html, json文本数据)
  ·RPC：二进制协议(更小的数据包体积，更快的编码速率)


# RPC的调用：Buffer编码解码二进制数据包
  - 00 00 00     0000         0000
    write(x, 0)  write(x, 3)  write(x. 5)

  protocol buffer 
  - npm包 https://www.npmjs.com/package/protocol-buffers
  - $ npm install protocol-buffers
  - 打包为二进制数据包后，再传给服务器

# RPC调用：net模块去建立多路复用的RPC通道
- 
