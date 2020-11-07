// 引入config.js和mock.js后统一抛出
import config from './config'    //config为名称代表core对象
import * as Mock from './mock'   //抛出多个时的引入，*代表所有

let util = {
    isDEV: config.isDev,
    log() {
        this.isDev && console.log(...arguments)  //arguments所有参数的统称,所以log（）中不用传参，用于打印
    },

    alert(title = '提示', contnet = config.defaultAlertMessage) {  //参数的默认值‘提示’,content传参了就是用content的参数
        if(typeof content === 'object') {
            //instanceof只能判断非原始值
            content = this.isDEV && JSON.stringify(content)  //this.isDEV为true时，将content转换为JSON字符串类型
        }
        wx.wx.showModal({
            title: title,
            content: content,
        });
          
    },

    //向本地存储取数据
    getStorgeData(key,cb) {    //浏览器存储在Local Storage（5M,要手动清除缓存才会清除）和Session Storage（关闭浏览器自动清除），本地存储以对象的形式存储
        wx.getStorage({  //取本地数据，传入key值，返回value值
            key: key,
            success (res) {  //传参成功，调用的回调函数
                cb && cb(res.data)
            },
            fail(err) {
                this.log(err)
            },
            complete: () => {}
        });          
    },


    //往本地存储存数据
    setStorageData(key, value='', cb) {
        wx.setStorageData({
            key: key,
            data: value,
            success () {
                cb && cb()
            }
        })
    },

    //接口请求
    request(opt) {
        let {url, data, header, method, dataType, mock = false} = opt   //let url = opt.url
        let self = this //此时的this还是指向util对象的，为了避免request到时this作用域混乱，则需保存this
        return new Promise((resolve, reject) => {
            if(mock) {
                //如果mock为true的话，就不用使用接口请求，直接取本地数据
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                if(res && res.statusCode === 200 && res.data){
                    resolve(res.data)
                }else{
                    self.alert('提示', res)
                    reject(res)
                }                
            }else{
                wx.request({
                    url: url,  //仅为示例，并非真实的接口地址
                    data: data,
                    header: header || {'Content-Type': 'application/json'},
                    method: method || 'GET',
                    dataType: dataType || 'json',  //没有配置到就用默认的，即||后面的，若配置到则用前面的
                    success (res) {
                        if(res && res.statusCode === 200 && res.data){
                            resolve(res.data)
                        }else{
                            self.alert('提示', res)
                            reject(res)
                        }
                    },
                    fall (err) {
                        self.log(err)
                        self.alert('提示', err)
                        reject(err)
                    }
                })

            }           
        })        
    }

}

export default util  //抛出