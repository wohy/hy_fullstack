// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'bandao-5g5biis93baaa2dc'

cloud.init()
const db = cloud.database({env}) //指明云函数生效的环境
// 云函数入口函数
exports.main = async (event, context) => {
    const userInfo = event.userInfo   //event中不仅包含了前端传入的参数，还会自动携带用户信息
    return await db.collection('group').add({
      data: {
        name: event.groupName,
        createeBy: userInfo.openId, //openId是每一个账号唯一的
        createTime: new Date(),
        delete: false,
        updateTime: new Date()
      }
    })
    .then(res => {
      return db.collection('user-group').add({
        data:{
          groupId: res._id,
          userId:userInfo.openId,
          invalid: false
        }
      })
    })
}