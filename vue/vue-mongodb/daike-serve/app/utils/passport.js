// 密码的加密解密操作
const bcrypt = require('bcrypt')

// 加密
const encrypt = async (password, slatTimes) => {
  // 拿到接口配置中的加盐次数
  const hash = await bcrypt.hash(password, slatTimes)
  return hash;
}

// 解密
const validate = async (password, hash) => {
  const math = await bcrypt.compare(password, hash)
  return math;
}

module.exports = {
  encrypt,
  validate
}