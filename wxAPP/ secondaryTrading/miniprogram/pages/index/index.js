// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    backGroundImg: [
      '../../images/1.png',
      '../../images/2.png',
      '../../images/3.png',
      '../../images/4.png'
    ],
    homeImageUrl: [
      {
        imageUrl: '../../images/home1.jpg',
        shopName: '美菱冰箱',
        price: '2000'
      },
      {
        imageUrl: '../../images/home2.jpg',
        shopName: '茶壶',
        price: '300'
      },
      {
        imageUrl: '../../images/home3.jpg',
        shopName: '热水壶',
        price: '100'
      },
      {
        imageUrl: '../../images/home4.jpg',
        shopName: '洗衣机',
        price: '2000'
      },
      {
        imageUrl: '../../images/home5.jpg',
        shopName: '双开门冰箱',
        price: '2999'
      },
    ],
    eleImageUrl: [
      {
        imageUrl: '../../images/ele1.jpg',
        shopName: '显示器',
        price: '2400'
      },
      {
        imageUrl: '../../images/ele2.jpg',
        shopName: '劳力士手表',
        price: '30000'
      },
      {
        imageUrl: '../../images/ele3.jpg',
        shopName: 'IWC手表',
        price: '40000'
      },
      {
        imageUrl: '../../images/ele4.jpg',
        shopName: 'GENEVE手表',
        price: '43380'
      },
      {
        imageUrl: '../../images/ele5.jpg',
        shopName: '照相机',
        price: '3000'
      },
    ]
  },

  // getShopList() {
  //   wx.showLoading({
  //     title: '正在加载'
  //   })
  //   wx.cloud.callFunction({
  //     name: 'getShopList',
  //     data: {}
  //   }).then(res => {
  //     console.log(res);
  //     wx.hideLoading();
  //   })
      
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getShopList()
    // console.log(options);
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