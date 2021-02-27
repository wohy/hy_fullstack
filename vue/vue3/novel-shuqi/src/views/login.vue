<template>
  <div class="login-container">
    <myheader :name="isLogin == true ? '登录' : '注册'"></myheader>
    <img src="@/assets/logo.png" alt="" class="logo" />

    <van-cell-group class="box">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        type="password"
      />
      <van-field
        v-show="!isLogin"
        v-model="rePassword"
        label="重复密码"
        placeholder="请再次输入密码"
        type="password"
      />
      <van-field
          v-model="verify"
          label="验证码"
          placeholder="输入验证码"
        >
          <template #button>
            <myverify ref="verifyRef"/>
          </template>
        </van-field>
    </van-cell-group>

    <van-row>
      <van-button size="small" type="default" @click="handleRegister">{{
        isLogin ? "注册" : "已有账号"
      }}</van-button>
      <van-button
        size="small"
        type="primary"
        class="btn-login"
        @click="handleLogin"
        >{{ isLogin ? "登录" : "注册并登录" }}</van-button
      >
    </van-row>
  </div>
</template>

<script>
import myheader from "@/components/header";
import myverify from "@/components/verify";
import { Toast } from "vant";
import { setLocal } from '../common/js/utils'
import  register from "../../axios/interface/register";
import  tologin from "../../axios/interface/login";
import { onMounted, reactive, toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    myheader,
    myverify
  },
  setup() {
    const verifyRef = ref(null)
    const router = useRouter()
    const state = reactive({
      username: '',
      password: '',
      rePassword: '',
      isLogin: true,
      verify: '',
      imgCode: ''
    })

    onMounted(() => {
      // console.log(tologin.tologin);
    })

    const showLoginTip = function(status) {
      Toast.loading({
        message: status,
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0
      })
    }

    const login = function() {
      tologin.tologin({ 
        username: state.username,
        password: state.password
      }).then(res =>{
        console.log(res);
        setLocal('token', res.data.userId)
        state.verify = ''
        Toast.clear()
        router.push({path:'/user',query:{userInfo: res.data.userId}})
      })
    }

    const handleLogin = function() {
      console.log(verifyRef);
      state.imgCode = verifyRef.value.imgCode || ''
      if (state.verify.toLowerCase() !== state.imgCode.toLowerCase()) {
        Toast.fail('验证码有误');
        return
      }
      if (state.username.trim() === '' || state.password.trim() == '') {
        Toast.fail('用户名或密码不能为空')
        return
      }
      if (state.isLogin) {
        showLoginTip('正在登录')
        login()
      } else {
        if(state.rePassword !== state.password) {
          Toast.fail('两次输入的密码不一致')
          return
        }
        showLoginTip('注册并登录中')
        register.register({
          username: state.username,
          password: state.password
        }).then(res => {
          console.log(res);
          state.verify = ''
          setLocal('token', res.data.userId)
          Toast.clear()
          router.push({path:'/user',query:{userInfo: res.data.userId}})
        })
      }
    }

    const handleRegister = function() {
      state.isLogin = !state.isLogin
    }

    return { ...toRefs(state), handleLogin, handleRegister, verifyRef}
  },
};
</script>

<style lang='less' scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 200px;
    margin: 50px 0 50px;
  }

  .box {
    width: 100%;
    margin-bottom: 20px;
  }

  .btn-login {
    margin-left: 20px;
  }
  
}
</style>