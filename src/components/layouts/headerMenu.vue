<template>
  <el-header>
    <div style="width: 30px">
      <el-icon @click="appStore.toggleSideBar()" :size="20">
        <Fold v-if="sidebar.opened" />
        <Expand v-else />
      </el-icon>
    </div>

    <!-- 面包导航 -->
    <Breadcrumb style="flex-grow: 2" />

    <!-- 用户登陆 -->
    <div class="menu">
      <el-menu mode="horizontal" :ellipsis="false">
        <LanguageSwitcher />
        <el-sub-menu index="2">
          <template #title>
            <el-avatar
              :size="35"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686918632&t=973851af485768045318f8624f767f07"
            />
          </template>
          <el-menu-item index="2-1">{{ $t("system.profile") }}</el-menu-item>
          <el-menu-item @click="logout">{{ $t("system.logout") }}</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores"
import { storeToRefs } from "pinia"
import { removeToken } from "@/utils/auth"
import Breadcrumb from "./Breadcrumb.vue"
import LanguageSwitcher from "../LanguageSwitcher.vue"

// const sidebar = mapState(useAppStore, ["sidebar"]);
const router = useRouter()
const appStore = useAppStore()
const { sidebar } = storeToRefs(appStore)

const logout = (item) => {
  removeToken()
  router.push("/login")
}
</script>
<style less="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}
</style>
@/stores/modules/app
