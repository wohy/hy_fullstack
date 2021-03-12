<template>
  <van-swipe class="my-swipe" :autoplay="3000">
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" @click="goTo" />
    </van-swipe-item>
  </van-swipe>
  
  <div class="header">为你推荐</div>

  <div class="container">
    <div
      class="bookItem"
      v-for="item in novels"
      :v-lazy="item.cover"
      :key="item.href"
    >
      <img :src="item.cover" alt="" @click="goToBook(item)" />
      <div class="bookInfo">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="auth">{{ item.auth }}</div>
      </div>
    </div>
    <p class="bottom">没有更多了~</p>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { Toast } from 'vant';
export default {
  props: {
    images: Array,
    bookList: Array,
  },
  setup(props) {
    const router = useRouter();
    const state = reactive({
      novels: []
    });

    onMounted(() => { 
      state.novels = props.bookList
    })

    const goTo = function (e) {
      // router.push({ name: "booksItem", query: { ID: e.href, title: e.title } });
    };

    const goToBook = function (e) {
      router.push({ name: "booksItem", query: { ID: e.href, title: e.title } });
    };

    return { goTo, goToBook, ...toRefs(state) };
  },
};
</script>

<style lang="less">
.my-swipe {
  height: 150px;
  margin: 55px 10px 15px 10px;
  border-radius: 5%;
  img {
    width: 100%;
    height: 100%;
  }
}
.header {
  font-size: 20px;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-weight: 400;
  margin-left: 10px;
}
.container {
  height: 350px;
  overflow-y: scroll;
  margin: 5px;
  background-color: #fff;
  .bookItem {
    display: flex;
    flex-direction: row;
    height: 150px;
    margin: 5px 10px 10px 10px;
    border: 1px solid rgb(233, 227, 227);
    border-radius: 5%;
    align-items: center;
    img {
      margin: 0 10px 0 10px;
      width: 80px;
      height: 120px;
      border-radius: 5%;
    }
    .bookInfo {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      height: 120px;
      .title {
        font-size: 10px;
        font-weight: bolder;
        margin-bottom: 5px;
      }
      .desc {
        height: 60px;
        overflow-y: scroll;
        color: rgb(216, 214, 212);
        margin-bottom: 10px;	
      }
      .auth {
        margin-top: 5px;
        width: 70px;
        border-radius: 10%;
        background-color: rgb(245, 238, 238);
        margin-bottom: 5px;
        text-align: center;
        color: rgb(212, 209, 204);
      }
    }
  }
  .bottom {
    margin-top: 10px;
    text-align: center;
    color: rgb(231, 223, 223);
    font-size: 10px;
  }
}
</style>