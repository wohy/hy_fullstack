<template>
<div id="app">
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
</div>
</template>

<script>
export default {
  setup() {
    const state = {
      
    }


    return { state }
  }

}
</script>


<style lang="less">

</style>
