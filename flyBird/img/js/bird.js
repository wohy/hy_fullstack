//面向对象编程
var bird = {
    fiyTime: null,     // 小鸟飞翔的定时器
    wingTimer: null,  // 小鸟翅膀摆动的定时器

    div: document.createElement('div'), //createElement（'div'）创建一个div标签
    showBird: function(parentObj) {  //出现一只小鸟
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'  //防止背景图平铺
        this.div.style.position = 'absolute'  //相对'relative'所在的容器绝对定位
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'  //层级,zIndex的值越大，层级越高,就会在其他更低的图层之上
        parentObj.appendChild(this.div)  //将该div标签插入到parentObj中，appendChild()往父容器中插入一个子容器


    },
    fallSpeed: 0,  //小鸟下落速度
    flyBird: function() {  //控制小鸟下落的函数,
        bird.flyTime = setInterval(fly, 60)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ +'px' 
            //函数每隔60ms发生一次，及每隔60ms，小鸟距离容器顶部的距离加1
            if(bird.div.offsetTop >= 395){ //掉到地面时，清除定时器
                bird.fallSpeed = 0
                clearInterval(bird.flyTime)
                clearInterval(bird.wingTimer)
            }  
            //不让小鸟飞出界
            if(bird.div.offsetTop < 0) {
                bird.div.style.top = '0px'
                bird.fallSpeed = 2
            }

            if (bird.fallSpeed > 12){
                bird.fallSpeed = 12
            }
           
        }
    },
    wingWave: function() {  //控制小鸟翅膀扇动的函数
        var up = ['url(./img/up_bird0.png)', 'url(./img/up_bird1.png)']
        var down = ['url(./img/down_bird0.png)', 'url(./img/down_bird1.png)']
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing, 120)
        function wing() {
            if(bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++]
                if(i == 2) {
                    i = 0
                }
            }
            if(bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++]
                if(j == 2) {
                    j = 0
                }
            }
        }
    }
}