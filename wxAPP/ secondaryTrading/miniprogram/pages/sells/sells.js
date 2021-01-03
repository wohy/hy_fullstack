// miniprogram/pages/sells/sells.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeOfShopping: '',
    shoppingName: '',
    message: '',
    fileList: [],
    show: true,
    showlocal: false,
    localtion: '',
    complete: true,
    columns: ['家用电器', '服饰', '潮鞋', '手机', '电子/数码', '书籍'],
    showpop: false,
    price: '',
  },

  getLocaltion() {
    wx.getLocation({
      type: 'wgs84',
      altitude: false,
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.chooseLocation({
          latitude,
          longitude,
          success: (result) => {
            if(result.name) {
              this.setData({
                localtion: result.name,
                show: false,
                showlocal: true,
                complete: false
              })
              // console.log(result.name);
            }            
          }
        });
      },
      fail: () => { console.log('定位出错了'); },
    });
  },

  onConfirm(e) {
    console.log(e);
    this.setData({
      typeOfShopping: e.detail.value,
      showpop: false
    })
    // console.log(this.data.typeOfShopping);
  },
  onCancel() {
      this.setData({
        showpop: false
      })
  },

  openPicker() {
    this.setData({
      showpop: true
    })
  },

  afterRead(e) {
    console.log(e);
    const {file} = e.detail;
    if(file.type === "image"){
      let randString = + new Date() + '' + Math.floor(Math.random()*1000000) + '.jpg';
      wx.cloud.uploadFile({
        cloudPath: randString, 
        filePath: file.url,
        success: (res => {
          // 上传完成需要更新 fileList
          console.log(res);
          const { fileList = [] } = this.data;
          fileList.push({ ...file, url: res.fileID});
          this.setData({ fileList });  
          console.log(this.data.fileList); 
        })
      }); 
    }   
    
    // const { file } = e.detail;
    // // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    // wx.uploadFile({
    //   url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
    //   filePath: file.url,
    //   name: 'file',
    //   formData: { user: 'test' },
    //   success(res) {
    //     // 上传完成需要更新 fileList
    //     const { fileList = [] } = this.data;
    //     fileList.push({ ...file, url: res.data });
    //     this.setData({ fileList });
    //   },
    // });

  },

  sells() {
    if(this.data.fileList !== '' && this.data.typeOfShopping !== '' && this.data.shoppingName !== '' && this.data.message !== '' && this.data.localtion !== '') {
      // console.log(this.data);
      db.collection('sellsShopping').add({
        data: {
          typeOfShopping: this.data.typeOfShopping,
          shoppingName: this.data.shoppingName,
          price: this.data.price,
          shopImage: this.data.fileList,
          localtion: this.data.localtion,
          description: this.data.message
        }
      }).then(res => {
        wx.showToast({
          title: '上传成功',
          icon: 'success'
        })
        this.setData({
          complete: true,
          typeOfShopping: '',
          shoppingName: '',
          message: '',
          price: '',
          fileList: [],
          description: '',
          localtion: ''
        })
      }) 
    }
  },

  onChangePrice(e) {
    this.setData({
      price: e.detail
    })
  },

  onChange(e) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      shoppingName: e.detail
    })
  },

  onChangedescrip(e) {
    this.setData({
      message: e.detail
    })
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
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})