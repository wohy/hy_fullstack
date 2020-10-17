window.onload = function() {   //加载完成执行函数
    imgLocation('container', 'box')
}

//获取到当前有多少张图片要摆放
function imgLocation(parent, content) {
    var cparent = document.getElementById(parent)
    var ccontent = getChildElement(cparent, content)  //拿到cparent中的子元素
    var imgWidth = ccontent[0].offsetWidth     //拿到每一个要摆放的box的宽度
    var num = Math.floor((document.documentElement.clientWidth / imgWidth))  //一行能放多少张图片，可视区宽度document.documentElement.clientWidth除以每一个box的宽度后取整，window.offsetWidth
    cparent.style.cssText = `${imgWidth * num}px`    //设置container的宽度

    //拿到第二行的第一张图片，放到第一行高度最小的图片下面
    var BoxHeightArr = []
    for(var i = 0; i < ccontent.length; i++) {
       if (i < num) {
           BoxHeightArr[i] = ccontent[i].offsetHeight
       } else {
           var minHeight = Math.min.apply(null, BoxHeightArr) //将Math里的min方法给数组使用
           var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)  //BoxHeightArr.indexOf(minHeight)
           ccontent[i].style.position = 'absolute'
           ccontent[i].style.top = minHeight + 'px'
           ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
           BoxHeightArr[minIndex] += ccontent[i].offsetHeight 
        }
    }
}

//拿到所有图片的DOM结构
function getChildElement(parent, content){
    var contentArr = []
    var allContent = parent.getElementsByTagName('*') //标签名获取DOM结构
    for (var i = 0; i < allContent.length; i++) {
        if(allContent[i].className == content) {
            contentArr.push(allContent[i])
        }
    }
    return contentArr
}

//拿到最小高度图片的i
function getMinHeightLocation(BoxHeightArr, minHeight) {
    var i;
    for(i = 0; i<BoxHeightArr.length; i++){
        if(BoxHeightArr[i] == minHeight) {
            return i
        }
    }

    // var i, min = BoxHeightArr[0];
    // for(i = 0; i<BoxHeightArr.length; i++){
    //     if(BoxHeightArr[0] > BoxHeightArr[i]) {
    //         min = BoxHeightArr[i]
    //     }
    //     return i
    // } 取到最小值
}