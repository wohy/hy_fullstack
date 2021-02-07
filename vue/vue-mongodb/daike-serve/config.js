module.exports = {
  port: 3000,
  db: 'mongodb://localhost:27017/daike', //mongodb默认占用的端口 + daike为该数据库名 
  saltTimes: 3 //加盐的次数 用户注册时 将其密码进行3次加密 后再存到数据库
}