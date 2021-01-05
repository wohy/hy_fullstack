// miniprogram/pages/shopItem/shopItem.js
const db = wx.cloud.database()
let app =  getApp();

  

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    price: '',
    description: '',
    localtion: '',
    shoppingName: '',
    _openid: '',
    _id: ''
  },

  insertCart() {
    const _ = db.command
    db.collection('shopCart').where({
      _openid: this.data._openid,
      shoppingName: this.data.shoppingName
    }).get().then(res => {
      console.log(res);
      if(res.data.length === 0) {
        db.collection('shopCart').add({
          data: {
            price: this.data.price,
            imageUrl: this.data.imageList[0],
            shoppingName: this.data.shoppingName,
            num: 1
          }
        })
      }else {
        this.setData({
          _id: res.data[0]._id,
          num: res.data[0].num
        })
        db.collection('shopCart').doc(this.data._id).update({
          data: {
            num: _.inc(1)
          }
        })
        .then(res => {
          console.log(res);
        })
      }
    })
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    db.collection('sellsShopping').where({
      _id: options.shoppingId
      // _openid: app.globalData.openid
    }).get()
    .then(res => {
      console.log(res);
      let shopImage = res.data[0].shopImage
      this.setData({
        imageList: shopImage,
        price: res.data[0].price,
        description: res.data[0].description,
        localtion: res.data[0].localtion,
        shoppingName: res.data[0].shoppingName,
        _openid: res.data[0]._openid,
        _id: res.data[0]._id
      })
      // console.log(this.data.imageList);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})