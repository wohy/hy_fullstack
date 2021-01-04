// miniprogram/pages/home/home.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: []
  },

  getShopList() {
    wx.showLoading({
      title: '正在加载'
    })
    const shopList = []
    db.collection('sellsShopping').where({
      typeOfShopping: '服饰'
    }).get()
      .then(res => {
        wx.hideLoading();
        const shopping = res.data
        for (let i = 0; i < shopping.length; i++) {
          shopList.push({
            price: shopping[i].price,
            shopName: shopping[i].shoppingName,
            imageUrl: shopping[i].shopImage[0].thumb,
            _id: shopping[i]._id
          })
        }
        // console.log(shopList);
        this.setData({
          shopList: shopList
        })
      })
  },

  toShopItem(e) {
    console.log(e);
    let shoppingId = e.currentTarget.dataset.shoppingid
    wx.navigateTo({
      url: `../shopItem/shopItem?shoppingId=${shoppingId}`,
    });
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopList()
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