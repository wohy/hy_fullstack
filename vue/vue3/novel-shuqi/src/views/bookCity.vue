<template>
  <div class="tabsHeader">
    <van-tabs
      background="red"
      title-active-color="white"
      title-inactive-color="white"
      v-model:active="active"
      swipeable
    >
      <van-tab
        v-for="index in bookCityArea"
        :key="index.id"
        :to="index.path"
        :title="index.title"
      >
      </van-tab>
    </van-tabs>
    <div class="serchIcon">
      <p class="iconfont icon-search" @click="search" />
    </div>
    <van-popup v-model:show="show" position="top" class="popup">
      <van-field v-model="value" placeholder="输入搜索内容" />
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
    navbar,
  },

  setup() {
    const state = reactive({
      bookCityArea: [
        {
          id: "recommend",
          title: "推荐",
          path: "/",
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
      active: "",
      popSearch: false,
      show: false,
      // serchInput: ''
    });

    const search = function () {
      state.show = true;
    };

    return { ...toRefs(state), search };
  },
};
</script>

<style lang="less">
 .tabsHeader {
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
      height: 52px;
      .van-cell {
        border: 3px solid red;
      }
    }
  }
</style>