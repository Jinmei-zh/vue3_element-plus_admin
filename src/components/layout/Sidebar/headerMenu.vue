<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      {{ sidebar }}11
      <el-icon>
        <Fold />
        <Expand />
      </el-icon>
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>
          <el-avatar :size="50"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686918632&t=973851af485768045318f8624f767f07" />
        </template>
        <el-menu-item index="2-1">个人中心</el-menu-item>
        <el-menu-item @click="logout">退出登陆</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
const sidebar = mapState(useAppStore, ['sidebar'])
console.log('sidebar==', sidebar)
const logout = () => {
  console.log('logout')
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
