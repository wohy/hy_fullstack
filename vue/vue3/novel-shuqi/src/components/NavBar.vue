<template>
  <div class="nav-bar">
    <ul class="nav-list">
      <router-link tag="li" class="nav-list-item active" to="bookCity">
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

</script>

<style lang="less" scoped >
@import "../common/style/mixin";
.nav-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .nav-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .nav-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
      }
      i {
        text-align: center;
        font-size: 22px;
      }
      span {
        font-size: 12px;
      }
      .van-icon-shopping-cart-o {
        margin: 0 auto;
        margin-bottom: 2px;
      }
    }
  }
}
</style>