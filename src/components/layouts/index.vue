<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="sidebar.opened ? `width: 200px` : `width:65px`">
        <Menu></Menu>
      </el-aside>
      <el-container class="common-container">
        <header-menu></header-menu>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores";
import Menu from "./Menu.vue";
import headerMenu from "./headerMenu.vue";

const { sidebar } = storeToRefs(useAppStore());
</script>

<style less="scss" scoped>
.common-layout {
  height: 100%;
  width: 100%;
  max-height: 100vh;

  .el-container {
    display: flex;
    overflow: hidden;
    height: 100%;

    .common-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
@/stores/modules/app
