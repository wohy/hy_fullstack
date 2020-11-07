//index.js
const db = wx.cloud.database()  //wx 指微信服务命名空间；database 引入数据库
const _ = db.command  //CRUD, 增删改查一些数据,将它传给“_”
const productsCollection = db.collection('products') //当前页面需要与'products'表进行交流,这里的collection就相当于table
const photos = db.collection('photos')

const app = getApp()


Page({
  data: {
    products: [],
    photos: [],
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
upload() {
    // console.log('点了按钮');
    // 云开发， SQL ，
    // html 能力是浏览器提供的
    // weixin 给予小程序能力
  wx.chooseImage({
    count: 9,  //几张图片
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: res => {
    console.log(res);
    const tempFilePaths = res.tempFilePaths;
     for(var i = 0; i < tempFilePaths.length; i++) {
       let randString = + new Date() + '' + Math.floor(Math.random()*1000000) + '.png';
        console.log(randString);
        wx.cloud.uploadFile({   //上传到云端
          cloudPath: randString,
          filePath: tempFilePaths[i],
          success: res => {
          //  console.log(res);
          if(res.statusCode == 200) {
            photos.add({  //将数据上传到photos数据库中
              data: {
                image: res.fileID
              }
            })
            .then(res => {
              wx.showToast({
                title: '上传成功',
                icon: 'success'
              })
            })
          }
          }
        }) 
      }
    } 
  })
},

  onLoad: function() {
    productsCollection
    .get()  //取到数据
    .then(res => {    //后将数据交给res
      // console.log(res)
      this.setData({
        products: res.data
      })
    })
    photos
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          photos: res.data
        })
      })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
