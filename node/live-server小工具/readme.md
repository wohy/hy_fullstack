http: 超文本传输协议 协议有固定的格式

输入 URL -> 看到页面
可是如 img文件 sp ：空格  cr if ：回车换行

请求：
GET www.baidu.com HTTP/1.1
user-agent: XXX IE/Chrome

上面这个格式 放到传输层中(TCP，http是基于TCP，还有一个叫UDP)

拿到响应

响应：
HTTP/1.1 200 ok
content-type: text/html
key:value

