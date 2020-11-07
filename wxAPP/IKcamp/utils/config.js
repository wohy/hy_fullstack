// 配置常量
'use strict'
//严格模式

const env = 'dev'

//接口错误弹出文案
const defaultAlertMessage = '亲！好像哪里出错了呢，请再来一次'

const defaultbarTitle = {
    en: 'iKcamp英语学习'
}

const defaultImg = {
    articleImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7e8f7b63dba6fa3849b628c0ce2c2a46.png',
    coverImg: 'https://n1image.hjfile.cn/mh/2017/06/07/7472c035ad7fe4b8db5d2b20e84f9374.png'
}

//变量统一通过core对象来取出
let core = {
    env: env,
    defaultAlertMessage: defaultAlertMessage,
    defaultbarTitle: defaultbarTitle,
    defaultImg: defaultImg,
    isDev: env === 'dev',
    isProduction: env === 'production'
}

// 引入core对象到各个页面中
export default core 