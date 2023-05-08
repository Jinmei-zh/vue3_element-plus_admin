<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>admin</template>
        <el-menu-item index="2-1">个人中心</el-menu-item>
        <el-menu-item index="2-2">退出登陆</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts" setup></script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
