const mongoose = require('mongoose')

const Schema = mongoose.Schema; //数据库映射

// 将这些 属性 映射到 user 表中
const UserSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    require: true
  },
  account: {
    type: String
  },
  userName: {
    type: String
  },
  userAvator: {
    type: String
  },
  loveNovels: {
    type: Array
  }
}, { collection: 'user', versionKey: false });

module.exports = mongoose.model('user', UserSchema);
