<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/Header'
import { getSeller } from '@/api'
import qs from 'query-string'

export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components:  {
    'v-header': header
  },
  created() {
    getSeller({
      id: this.seller.id
    }).then((seller) => {
      // console.log(seller); //显示该店铺的所有信息
      // 将两个对象拼接起来
      this.seller = Object.assign({}, this.seller, seller)
    })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/variable.styl';
.tab
  width 100%
  display flex 
  flex-direction row
  text-align center
  line-height 36px
  height 36px
  &-wrapper
    flex 1
    a
      width 100%
      height 100%
      display inline-block
      color #666
      text-decoration none 
    .router-link-exact-active
      color $color-red
      border-bottom 2px solid $color-red

</style>