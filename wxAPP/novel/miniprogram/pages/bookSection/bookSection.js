// miniprogram/pages/bookSection/bookSection.js

// 使用db连接数据库
const db = wx.cloud.database()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: {},
    lastData: [],
    pageData: [],
    pageArray: [],
    page: 1,  //当前页
    pre: '',
    next: '',
    preAble: false,
    nextAble: false
  },

  // 上一页
  prePage() { 
    if(this.data.preAble) return 
    this.getSection(this.data.pre)
  },

  // 下一页
  nextPage() {
    if(this.data.nextAble) return 
    this.getSection(this.data.next)
  },

  // 跳转
  bindDateChange(e) {
    let page = parseInt(e.detail.value)
    // console.log(e);
    if (page !== this.page) {
      this.setData ({
        page: page + 1
      })
      this.getSection(this.data.pageArray[page].name)
    }
  },

  // 点击看小说
  navtoUrl(e) {
    // console.log(e);
    // 已经存在书架的书记录阅读状态
    if(url) {
      db.collection('book').where({
        userId: app.globalData.openid,
        bookName: this.data.bookDetailData.name
      }).get().then(res => {
        let data = res.data || []
        if (data.length > 0) { //已加入书架
          if(data[0].bookUrl !== url) { //点击的章节不为初始的章节，才需更新保存阅读状态
            const id = data[0]._id || '';
            db.collection('book').doc(id).update({
              data: {
                bookUrl: url
              }
            }).then(res => {
              console.log(res);
            })
          }
        }
      })
    }

    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      // 拼接url，当跳转到下一个页面时，再多带上两个参数name 为 书名，imgUrl 为 小说封面图片地址，  下一个页面中的onLoad()中的options 参数会接收到这些参数
      url: `../bookContent/bookContent?url=${url}&name=${this.data.bookDetailData.name}&imgUrl=${this.data.bookDetailData.imgurl}`,

    });
      
  },

  // 加入书架
  joinBook(e) {
    let url = e.currentTarget.dataset.url
    
    // 连接数据可book
    db.collection('book').where({
      userId: app.globalData.openid,
      bookName: this.data.bookDetailData.name
    }).get().then(res => {
      // console.log(res); //可以读到数据库中的data
      const data = res.data[0] || []
      if (data.length == 0) { //即该书没有加入书架
        db.collection('book').add({
          data: {
            userId: app.globalData.openid,
            bookName: this.data.bookDetailData.name,
            bookUrl: url,
            imgUrl: this.data.bookDetailData.imgurl
          }
        }).then(res => {
          // console.log(res);
          wx.showToast({
            title: '加入成功',
            icon: 'success'
          }, 3000);           
        })
      } else {
        wx.showToast({
          icon: 'none',
          title: '本书已在书架，请到书架阅读'
        })
      }
    })

  },

  getSection(url) {
    wx.showLoading({
      title: '正在加载'
    })
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url: url
      }
    }).then(res => {
      console.log(res);
      wx.hideLoading()
      const { result } = res
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        pre: result.pre,
        next: result.next,
        preAble: result.pre === '' ? true : false,
        nextAble: result.next === '' ? true : false,
        page: (result.next.split('/')[2]) - 1
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);  //options中会有一个url属性

    // 从options中解构出url属性
    const { url } = options
    this.getSection(url)
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