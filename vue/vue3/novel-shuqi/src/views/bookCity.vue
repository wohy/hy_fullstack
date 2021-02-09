<template>
  <div class="tabs">
    <van-tabs background="red" title-active-color="white" title-inactive-color="white" v-model:active="active" swipeable>
      <van-tab
        v-for="index in bookCityArea"
        :key="index.id"
        :to="index.path"     
        :title="index.title"
      >
      </van-tab>  
    </van-tabs>
    <div class="serchIcon">
      <p class="iconfont icon-search" @click="search"/>
    </div>
    <input :class="serchInput" type="text" v-show="show"> 
    <van-popup v-model:show="show" position="top" :style="{ height: '10%' }" :teleport="myContainer" />  
  </div>
  <navbar />
  <router-view></router-view>

  

  
</template>

<script>
import navbar from "@/components/Navbar.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    navbar
  },

  setup() {
    const state = reactive({
      bookCityArea: [
        {
          id: "recommend",
          title: "推荐",
          path: "/recommend",
        },
        {
          id: "girls",
          title: "女生",
          path: "/girls",
        },
        {
          id: "boys",
          title: "男生",
          path: "/boys",
        },
        {
          id: "newNovel",
          title: "新书",
          path: "/newNovel",
        },
      ],
      active: '',
      popSearch: false,
      show: false,
      // serchInput: ''
    });

    const myContainer = document.querySelector('.my-container');


    const search = function() {
      state.show =  true
    }

    return { ...toRefs(state), search, myContainer};
  },
};
</script>

<style lang="less">
  .tabs {
    z-index: 1000;
    width: 100%;
    position: absolute;
    top: 0px;
    display: flex;
    flex-direction: row;
    background-color: red;
    .van-tabs--line .van-tabs__wrap {
      width: 300px;
      height: 50px;
      .van-tab {
        font-weight: bold;
        font-size: 20px;
      }
      .van-tabs__nav--line {
        padding-bottom: 10px;
      }
      .van-tabs__line {
        background-color: #fff;
      }
    }
    .serchIcon {
      position: absolute;
      text-align: center;
      align-items: center;
      right: 20px;
      height: 44px;
      .icon-search {
        color: white;
      }
    }
  }
</style>