//1、拿到要操作的dom结构
//2、在这个dom上滑动鼠标能控制带渐变颜色的滑块的位置
//3、能控制这个dom的高度发生变化
//4、根据该dom高度的值来调整视频播放的速度
//步骤都应先拿到dom结构的值


var speed = document.querySelector('.speed')//定义一个变量speed，并将取得的要操作的dom结构传给speed
var bar = document.querySelector('.speed-bar')//拿到高度
var video = document.querySelector('.flex')//拿到video

speed.addEventListener('mousemove', function(e) {  
    //控制滑块的位置
    // console.log(e);可打印出鼠标移动时的各种参数
    //因为e输出内容为e{}，则e为一个对象，则可通过e.xxx,取得中某属性的值
   var y = e.pageY - speed.offsetTop  //e.pageY取到的Y轴的值是以最左上角为原点o参照的y值，所以需减去容器到浏览器顶部的距离，offsetTop方法则可获取某个dom结构到浏览器顶部的距离
   var percent = y / speed.offsetHeight //offsetHeight可获取某个dom结构自身的高度,percent为y占父容器speed高度的比值
   var min = 0.4
   var max = 4
   var height = Math.round(percent * 100) + '%' //转换为百分数,round()方法进行四舍五入
   var playbackRate = percent * (max - min) + min //用于控制播放器播放速率

   //操作bar,控制dom的高度发生变化
   bar.style.height = height   //控制bar高度的style.css里的height，使其跟随鼠标移动变化
   
   video.playbackRate = playbackRate //前面的video中playbackRate为播放速率，后边的playbackRate为上面定义的用于控制播放速率的变量
   
   bar.textContent = playbackRate.toFixed(2) + 'x' //先拿到控制文本的值，在通过playbackRate去改变它，toFixed(2)则为将值保留2位小数
}) 
//在speed上注册一个监听鼠标的移动的事件，使鼠标在speed上移动时，可触发一段代码的发生,再在回调函数function（）中编辑想要执行的代码,e为事件参数，接收鼠标移动时返回的各种参数