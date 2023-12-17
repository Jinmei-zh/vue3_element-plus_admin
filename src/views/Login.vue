<template>
  <div class="login">
    <el-card>
      <el-form
        ref="formRef"
        :rules="rules"
        label-width="80px"
        class="login-box"
        :model="form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
const formRef = ref();

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
};

const form = reactive({
  username: "",
  password: "",
});

const login = () => {
  formRef?.value.validate((valid) => {
    if (valid) {
      console.log("success", form);
    }
  });
};
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
