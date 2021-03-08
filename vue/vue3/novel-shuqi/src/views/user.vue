<template>
  <van-button v-show="login" type="primary" class="toLogin" round @click="tologin"
    >请先登录</van-button
  >
  <div class="userBox"  v-show="!login" >
    <div class="userInfo">
      <img class="avator" :src="userInfo.avator" alt="" />
      <div class="info">
        <span>昵称：{{ userInfo.userName }}</span>
        <span>用户名：{{ userInfo.account }}</span>
      </div>
    </div>

    <div class="myCell">
      <van-cell is-link icon="point-gift" title="我的账户"/>
      <van-cell is-link icon="chat" title="我的消息"/>
      <van-cell is-link icon="todo-list" title="浏览历史"/>
      <van-cell is-link icon="thumb-circle" title="我的点评"/>
    </div>

    <van-button class="outLogin" type="primary" round @click="outlogin">退出登录</van-button>
  </div>
  <navbar />
</template>

<script>
import navbar from "@/components/Navbar.vue";
import { getLocal, clearLocal } from "@/common/js/utils";
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, toRefs } from "vue";
export default {
  components: {
    navbar,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const userId = route.query;
    console.log(userId);
    // console.log(user);
    const state = reactive({
      login: true,
      userInfo: {
        avator: "https://yue08.sogoucdn.com/cdn/image/book/6236482528_1600423208330.jpg",
        userName: "wn",
        account: "admin",
      },
    });

    const tologin = function () {
      router.push({ name: "login" });
    };

    const outlogin = function () {
      clearLocal()
      state.login = true
    };

    onMounted(() => {
      const token = getLocal("token");
      if (token) {
        state.login = false;
      }
    });

    return { ...toRefs(state), tologin, outlogin };
  },
};
</script>

<style lang="less" scoped>
.toLogin {
  margin: 200px 30%;
  width: 40%;
  height: 50px;
}
.userBox {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .userInfo {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    margin-left: 20px;
    .avator {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    .info {
      font-size: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

  }
  .myCell {
    margin-left: 15px;
  }
  .outLogin {
    margin-top: 30px;
    width: 40%;
    height: 50px;
    margin-left: 30%;
  }
}
</style>