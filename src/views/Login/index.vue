<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const router = useRouter()
const setT = () => {
  router.push({ path: '/' })
  globalStore.setGlobalState('token', 'token')
}
const userLoginForm = reactive({
  userName: '',
  password: '',
})
</script>
<template>
  <div id="login">
    <div id="contain">
      <div id="right_card">
        <el-card class="el-card">
          <h2>欢迎登录</h2>
          <form class="login" action="">
            <input type="text" v-model="userLoginForm.userName" placeholder="请输入账号" />
            <input type="password" v-model="userLoginForm.password" placeholder="请输入密码" />
          </form>
          <div id="btn">
            <button class="loginbtn" @click="setT">登陆</button>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
#login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #a7a8bd;
  background-size: 100% 100%;
  #contain {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 400px;
    text-align: center;
    background-color: rgb(255 255 255 / 10%) !important;
    border-radius: 25px;
    box-shadow: -5px -5px 10px rgb(39 65 65), 5px 5px 20px aqua;
    transform: translate(-50%, -50%);
    animation: animate 5s linear infinite;
    backdrop-filter: blur(5px);
    #right_card {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 400px;
      .el-card {
        margin: 0 45px;
        background-color: rgb(255 255 255 / 10%);
        border-radius: 25px;
      }
      h2 {
        margin-bottom: 5px;
      }
      .login {
        input {
          width: 80%;
          height: 45px;
          padding-left: 20px;
          margin-top: 10px;
          font-size: inherit;
          background-color: rgb(255 255 255 / 50%);
          border: 1px solid white;
          border-radius: 10px;
          outline: none;
        }
      }
      .loginbtn {
        width: 100%;
        height: 35px;
        margin-top: 10px;
        background-color: rgb(207 38 38 / 80%);
        border-radius: 10px;
      }
    }
  }
}
</style>
