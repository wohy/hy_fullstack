// miniprogram/pages/shoppingCart/shoppingCart.js
const db = wx.cloud.database()
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    priceSum: 0,
    checked: false,
    listNum: 1,
    listArray: []
  },


  onChange(event) {
    const listArray = this.data.listArray
    // let price = this.data.priceSum
    let price = event.currentTarget.dataset.price
    let checked = event.currentTarget.dataset.checked
    checked = event.detail
    // console.log(event);
    for(let i = 0; i < listArray.length; i++) {
      // console.log(checked);
      if( checked === true && listArray[i].check !== event.detail) {
        price += listArray[i].price
        // console.log(price);
      }
      listArray[i].check = event.detail
      if(listArray[i].check === false && checked === false) {
        price -= listArray[i].price
      }
    }

    this.setData({
      priceSum: price,
      // priceSum: priceSum,
      checked: event.detail,
      listArray
    });
  },

  Change(event) {
    const listArray = this.data.listArray
    let checked = event.currentTarget.dataset.checked
    let priceSum = this.data.priceSum
    let price = event.currentTarget.dataset.price
    listArray[event.currentTarget.dataset.index].check = event.detail
    // console.log(event);
    if(event.detail === true) {
      priceSum += price
    }
    if(event.detail === false) {
      priceSum -= price
    }
    // console.log(price);
    // console.log(priceSum);
    if(checked === true && event.detail === false) {
      this.setData({checked: event.detail})
    }
    // checked = event.detail
    // console.log(checked);
    // console.log(this.data.checked);
    this.setData({
      priceSum: priceSum,
      listArray
    })
  },

  Hidden(e) {
    const listArray = this.data.listArray
    listArray[e.currentTarget.dataset.index].hidden = 'true' 
    this.setData({
      listArray
    })
  },

  reHidden(e) {
    // console.log(e);
    const listArray = this.data.listArray
    listArray[e.currentTarget.dataset.index].hidden = !e.currentTarget.dataset.hidden
    this.setData({
      listArray
     })
  },

  add(e) {
    // console.log(e);
    const listArray = this.data.listArray
    let price = e.currentTarget.dataset.price
    let priceSum = this.data.priceSum 
    let check = e.currentTarget.dataset.check
    let num = e.currentTarget.dataset.num
    let shoppingIndex = e.currentTarget.dataset.index
    price = (price/num)*(++num);
    // console.log(priceSum);
    // console.log(this.data.priceSum);
    // console.log(check);
    if(check === true) {
      this.setData({
        priceSum: priceSum += (price - listArray[e.currentTarget.dataset.index].price)
      })
    }
    e.currentTarget.dataset.priceSum = priceSum
    listArray[shoppingIndex].num = num
    listArray[shoppingIndex].price = price
    // console.log(price, num);
    
    db.collection('shopCart').where({
      _openid: app.globalData.openid,
    }).get().then(res => {
      let data = res.data[shoppingIndex]
      // console.log(data);
      if(data.price) {
        db.collection('shopCart').doc(data._id).update({
          data: {
            num: num,
            price: price
          }
        })
      }
    })

    this.setData({
      listArray
    })
  },

  reduce(e) {
    // console.log(e);
    const listArray = this.data.listArray
    let priceSum = this.data.priceSum 
    let check = e.currentTarget.dataset.check
    let price = e.currentTarget.dataset.price 
    let num = e.currentTarget.dataset.num
    let shoppingIndex = e.currentTarget.dataset.index
    if(num > 1) {  
      price = (price/num)*(--num)
      if(check === true) {
        this.setData({
          priceSum:  priceSum -= (listArray[shoppingIndex].price - price)
        })
      }
      e.currentTarget.dataset.priceSum = priceSum
      listArray[shoppingIndex].num = num
      listArray[shoppingIndex].price = price
      // console.log(price, num);

      db.collection('shopCart').where({
        _openid: app.globalData.openid,
      }).get().then(res => {
        let data = res.data[shoppingIndex]
        // console.log(data);
        if(data.num > 1) {
          db.collection('shopCart').doc(data._id).update({
            data: {
              num: num,
              price: price
            }
          })
        }
      })
      
    }
    this.setData({
      listArray
    })
    
  },

  onClickButton(e) {
    // console.log(e);
  },

  toShopping(e) {
    console.log(e);
    let shoppingId = e.currentTarget.dataset.shoppingid

    wx.navigateTo({
      url: `../shopItem/shopItem?shoppingId=${shoppingId}`,
    });
    
  },


  getShopping() {
    wx.showLoading({
      title: '正在加载'
    })
    db.collection('shopCart').where({
      _openid: app.globalData.openid
    }).get().then(res => {
      console.log(res);
      const shopList = res.data
      let shopping = this.data.listArray
      for(let i = 0; i < shopList.length; i++) {
        shopping.push({
          imageURL: shopList[i].imageUrl.thumb,
          shopName: shopList[i].shoppingName,
          price: parseInt(shopList[i].price),
          num: shopList[i].num,
          _id: shopList[i]._id
        })
      }
      this.setData({
        listArray: shopping
      })
      wx.hideLoading();
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopping()
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