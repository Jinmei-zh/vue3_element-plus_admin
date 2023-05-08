<template>
  <div class="common-layout">
    <el-container>
      <el-header><header-menu></header-menu> </el-header>
      <el-container>
        <el-aside width="180px">
          <sidebar></sidebar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";
import sidebar from "./Sidebar";
import headerMenu from "./Sidebar/headerMenu.vue";
</script>

<style scoped>
/* 
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
} */
</style>
