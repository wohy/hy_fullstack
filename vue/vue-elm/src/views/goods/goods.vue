<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li class="menu-item" @click="selectMenu(index)" 
        v-for="(item, index) in goods" :key="index"
        :class="{'current' : currentIndex === index }">
        <!-- 若 currentIndex === index 则给li加一个类名 current -->
          <span class="text">
            <!-- <span class="icon" v-if="item.type > 0"></span> -->
            <support-ico v-if="item.type > 0" :size=3 :type="item.type"></support-ico>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li class="food-list">
          <h1 class="title">热销榜</h1>
          <ul>
            <li class="food-item">
              <div class="icon">
                <img src="" alt="">
              </div>
              <div class="content">
                <h2 class="name">皮蛋廋肉粥</h2>
                <p class="desc">咸粥</p>
                <div class="extra">
                  <span class="count">月售229份</span>
                  <span>好评率90%</span>
                </div>
                <div class="price">
                  <span class="now">￥30</span>
                  <span class="old">￥36</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from '@/api';
import BScroll from 'better-scroll';
import SupportIco from '@/components/support-ico/Support-ico'
export default {
  data() {
    return {
      goods: [],
      currentIndex: 0
    }
  },
  created() {
    getGoods().then(goods => {
      console.log(goods);
      this.goods = goods
      this.$nextTick(() => {
        this._initScroll()
      })
    })
  },
  components: {
    SupportIco
  },
  methods: {
    selectMenu(idx) {
      this.currentIndex = idx
    },
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/variable.styl';
.goods
  display flex
  position absolute
  top 177px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background $color-background-ssss
    .menu-item
      display flex
      width 60px
      height 54px
      padding 0 10px
      line-height 14px
      justify-content center
      text-align center
      align-items center
      font-size $fontsize-small
      &.current
        background #fff
        font-weight 700
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      top 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size $fontsize-small
      color rgb(147, 153, 159)
      background $color-background-ssss
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      &:last-child
        margin-bottom 0
</style>