<template>
  <h1>书架</h1>
  <p class="isLogin" v-show="!isLogin"></p>
  <div class="shelf" v-show="isLogin">
    <div class="container" v-for="items in bookSelf" :key="items.bookId">
      <img :src="items.imgUrl" alt="">
      <p class="title">{{items.title}}</p>
    </div>
    <van-button icon="plus" color="rgb(247, 240, 240)" type="primary" />
  </div>
  <navbar/>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import { getLocal } from '../common/js/utils'
import { onMounted, reactive, toRefs } from 'vue'
export default {  
  components: {
    navbar
  },
  setup() {
    const userId = getLocal('token')
    console.log(userId);
    const state = reactive({
      bookSelf: [
        {
          title: '女总裁的顶...',
          bookId: '6236482528',
          imgUrl: 'https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg'
        },
        {
          title: '武道神尊',
          bookId: '6232872035',
          imgUrl: 'https://yue08.sogoucdn.com/cdn/image/book/6232872035_1568101221739.jpg'
        },
        {
          title: '超极品兵王',
          bookId: '6632080997',
          imgUrl: 'https://yue02.sogoucdn.com/cdn/image/book/6632080997_1548994966177.jpg'
        }
      ],
      isLogin: false
    })
    onMounted(() => {
      if(userId) {
        state.isLogin = true
      }
      
    })

    return { ...toRefs(state) }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin-left: 10px;
}
.isLogin {
  margin: 50%;
}
.shelf {
  margin-top: 10px;
  margin-left: 20px;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, 110px);
  .container {
    display: flex;
    flex-direction: column;
    height: 150px;
    img {
      width: 80px;
      height: 110px;  
    }
  }
  .van-button {
    width: 80px;
    height: 110px;
  }
}
</style>