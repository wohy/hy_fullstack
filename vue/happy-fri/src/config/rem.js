//动态识别用户设备屏幕大小，并设置项目的根字体大小
(function (doc, win) {
  let docEl = doc.documentElement,
    // window中是否有属性，有则用，没则定义为resize
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      // 监测宽度
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
    }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false); //屏幕大小发生变化时触发
  doc.addEventListener('DOMContentLoaded', recalc, false) //dom结构加载完成时触发
})(document, window)