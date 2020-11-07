// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'bandao-5g5biis93baaa2dc'

cloud.init()
const db = cloud.database({env}) 

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  //查找user-group这个库里是否有该openId  查找用where()方法 .get()得到数据
  //按照这个openId把user-group里对应的数据取出
  //去group这个库里面查找所有的_id和groupId相同的数据
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get()
  let returnResult = []
  for(let item of groupList.data) {
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()
      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = item._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)  //创建时间大的排在前面，即时间降序排列，当a创建时间小于b的时返回1(true)即需要sort方法操作，否则返回false不需要sort操作
}