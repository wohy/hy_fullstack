// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList: []  //数据源里的数据只有使用setdata进行改动
  },

  updataArrList() {
    let arr = this.data.arrList
    arr.push(...this.createData()) /*...,为解构，将数组中的每一个成员都取出来 */
    this.setData({
      arrList: arr
    })
  },

  // 创建一些假数据的函数,this指向全局Page
  createData() {
    let length = this.data.arrList.length
    if (length >= 30) return[]
    return Array.from({length: 3}, (v,i) => `数据${1+i+length}`)  //把类数组强制转化为数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 即加载更多
   */
  onReachBottom: function () {
    console.log("到底了");
    this.updataArrList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})