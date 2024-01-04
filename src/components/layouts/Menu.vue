<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff" :router="true" :collapse="!sidebar.opened" style="height: 100vh">
    <MenuItem :routes="showRoutes" />
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores"
import MenuItem from "./MenuItem.vue"

const { sidebar } = storeToRefs(useAppStore())

import { routes } from "@/router"
import type { RouteRecordRaw } from "vue-router"

const showRoutes = computed<RouteRecordRaw[]>(() => {
  return routes[0].children
})

const handleOpen = () => {}
const handleClose = () => {}
</script>

<style scoped>
.icons {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
</style>
