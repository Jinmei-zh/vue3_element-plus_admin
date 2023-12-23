<template>
  <div class="login">
    <el-card>
      <el-form ref="formRef" :rules="rules" label-width="80px" class="login-box" :model="form">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { userStore } from "@/stores/modules/user"

const router = useRouter()
const formRef = ref()

const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
}

const form = reactive({
  username: "admin",
  password: "123456",
})

const useUserStore = userStore()

const login = () => {
  formRef?.value.validate((valid: boolean) => {
    if (valid) {
      useUserStore.login({ ...form }).then((data) => {
        console.log("data===", data)
        // const hour = new Date().getHours()
        // const thisTime = hour < 8 ? "早上好" : hour <= 11 ? "上午好" : hour <= 13 ? "中午好" : hour < 18 ? "下午好" : "晚上好"
        // ElNotification({
        //   message: `${thisTime} ${info.name},欢迎登录!`,
        //   type: "success",
        //   offset: 60,
        //   showClose: true,
        // })
      })
    }
  })
}
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
  width: 100%;
}
.login-box {
  width: 500px;
  background: #fff;
}
</style>
