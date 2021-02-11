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
    <van-popup v-model:show="show" position="top" class="popup" :teleport="myContainer">
      <input class="serchInput" type="text" v-show="show"> 
    </van-popup> 
  </div>
  <navbar />
  <router-view></router-view>

  

  
</template>

<script>
import navbar from "@/components/Navbar.vue";
import { reactive, ref, toRefs } from "vue";
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

    const myContainer = ref(document.querySelector('.serchInput'))


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
    .popup {
      height: 44px;
      opacity: 0;
      text-align: center;
      
      .serchInput {
        height: 40px;
        margin-right: 5%;
        width: 90%;
        border: 3px solid red;
        background-color: #000;
      }
    }
  }
</style>