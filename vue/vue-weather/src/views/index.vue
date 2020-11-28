<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{localTime}}</div>
      <div class="city">切换城市</div>
    </div>

    <div class="city-info">
      <p class="city">{{locationInfo}}</p>
      <p class="weather">阴</p>
      <h2 class="temp"><em>9</em>℃</h2>
      <div class="detali">
        <span>风力:3</span> | <span>风向:西北</span> | <span>空气湿度: 75%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      localTime: '',
      locationInfo: ''
    }
  },
  created () {
    setInterval(() => {
      this.localTime = this.getLocalTime()
    }, 1000)
     console.log(this.initMap()); 
  },
  methods: {
    getLocalTime () {
      return new Date().toLocaleTimeString()
    },
    initMap () { //获取当前城市
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,     
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        return geolocation.getCurrentPosition()
      //   AMap.event.addListener(geolocation, 'complete', onComplete)
      //   AMap.event.addListener(geolocation, 'error', onError)

      //   function onComplete (data) {
      //     // data是具体的定位信息
      //   }

      //   function onError (data) {
      //     // 定位出错
      //   }
      })  
    },
    getCurrentCityData () { //查询天气

    }
  }
}
</script>

<style lang="less">
.container{
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info{
    font-size: 26px;
    .em{
      font-size: 34px;
      font-style: normal;
    }
  }
}
</style>