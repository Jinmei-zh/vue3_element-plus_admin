<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card shadow="never">
        <el-avatar style="margin: 0 auto 15px" :size="50" src="https://th.bing.com/th/id/R.735abdd4080d5d0a2f32870e685085e5?rik=hV1EPUDXQaMf6g&pid=ImgRaw&r=0" />

        <p>超级管理员</p>
        <el-text>格言信息</el-text>
        <div class="user-list">
          <div class="user-list__item">
            <el-icon><Message /></el-icon>
            <span>admin@example.com</span>
          </div>
          <div class="user-list__item">
            <el-icon><Message /></el-icon>
            <span>广东省广州市番禺区</span>
          </div>
        </div>
        <el-divider border-style="dashed" />
        <el-text tag="b">技术标签</el-text>
        <el-space>
          <el-tag>Vue3</el-tag>
          <el-tag>Vite</el-tag>
          <el-tag>Pinia</el-tag>
          <el-tag>Javascript</el-tag>
          <el-tag>Typescript</el-tag>
          <el-tag>Axios</el-tag>
          <el-tag>Element-Plus</el-tag>
        </el-space>
      </el-card>
    </el-col>
    <el-col :span="16">
      <el-card shadow="never">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane label="基本信息" name="first">
            <el-form>
              <el-form-item label="昵称">
                <el-input v-model="form.username" />
              </el-form-item>
              <el-form-item label="性别">
                <el-select v-model="form.sex">
                  <el-option label="男" :value="1" />
                  <el-option label="女" :value="0" />
                </el-select>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="安全认证" name="second">安全认证</el-tab-pane>
          <el-tab-pane label="绑定第三方应用" name="third">绑定第三方应用</el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
const activeName = ref("first")
const form = reactive({
  username: "admin",
  sex: 0,
  email: "admin@example.com",
})
</script>
<style lang="less"></style>
