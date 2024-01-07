<template>
  <div class="login">
    <el-card>
      <el-form ref="formRef" :rules="rules" label-width="80px" class="login-box" :model="form">
        <el-form-item :label="$t('login.username')" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">{{ $t("login.login") }}</el-button>
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
        router.push("/")
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
