<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="/">
        <i class="iconfont icon-shuchengpress"></i>
        <span>书城</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="bookShelf">
        <i class="iconfont icon-shujia"></i>
        <span>书架</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="finding">
        <i class="iconfont icon-faxian"></i>
        <span>发现</span>
      </router-link>
      <router-link tag="li" class="nav-list-item" to="user">
        <i class="iconfont icon-wodedangxuan"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    
  }
}
</script>

<style lang="less">
@import "../common/style/mixin";
.nav-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  background-color: #fff;
  .nav-list {
    display: flex;
    margin: 10px;
    height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: @icon;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 25px;
      }
      span {
        font-size: 15px;
      }
    }
  }
}
</style>