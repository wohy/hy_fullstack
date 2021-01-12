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
    _id: '',
    openAnswer: false,
    openicon:'../../images/openUp.png',
    comment: [
      {
        avator: '../../images/ele3.jpg',
        nickname: '蜗牛大帅哥',
        content: '这个用了多久了？',
        answerContent: [
          {
            text: '180天了'
          }
        ]
      }
    ]
  },

  navToComment(e) {
    let shoppingId = e.currentTarget.dataset.shoppingid
    wx.navigateTo({
      url: `../comment/comment?shoppingid=${shoppingId}`
    })
  },

  answer() {

  },

  openAnswer() {
    let openStatus = this.data.openAnswer
    this.setData({
      openAnswer: !openStatus
    })
    if (this.data.openAnswer) {
      this.setData({
        openicon: '../../images/closeUp.png'
      })
    } else {
      this.setData({
        openicon: '../../images/openUp.png'
      })
    }
  },


  insertCart() {
    const _ = db.command
    db.collection('shopCart').where({
      _openid: this.data._openid,
      _id: this.data._id
    }).get().then(res => {
      // console.log(res);
      if(res.data.length === 0) {
        db.collection('shopCart').add({
          data: {
            _id: this.data._id,
            price: this.data.price,
            imageUrl: this.data.imageList[0],
            shoppingName: this.data.shoppingName,
            num: 1
          }
        })
        .then(res => {
          wx.showToast({
            title: '加入购物车成功',
            icon: 'success'
          })
        })
      }else {
        const priceOne = res.data[0].price/res.data[0].num
        // console.log(res.data[0].num);
        // console.log(priceOne);
        db.collection('shopCart').doc(this.data._id).update({
          data: {
            num: _.inc(1),
            price: _.inc(priceOne)
          }
        })
        .then(res => {
          console.log(res);
          wx.showToast({
            title: '加入购物车成功',
            icon: 'success'
          })
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
      _id: options.shoppingId,
      // _openid: app.globalData.openid
      // shopImage: options.shoppingImage
    }).get()
    .then(res => {
      console.log(res);
      let shopimage = res.data[0].shopImage
      this.setData({
        imageList: shopimage,
        price: parseFloat(res.data[0].price),
        description: res.data[0].description,
        localtion: res.data[0].localtion,
        shoppingName: res.data[0].shoppingName,
        // _openid: res.data[0]._openid,
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