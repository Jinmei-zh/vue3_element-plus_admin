<template>
  <div class="common-layout">
    <el-container>
      <el-aside :style="sidebar.opened ? `width: 200px` : `width:65px`">
        <Menu></Menu>
      </el-aside>
      <el-container class="common-container">
        <header-menu></header-menu>

        <el-tabs type="border-card" v-model="activeTab" @tab-click="clickTab" editable @edit="removeTab">
          <el-tab-pane v-for="(tab, index) in tabs" :key="tab.path" :closable="index > 0" :label="tab.name" :name="tab.path">
            <!-- <component :is="tab.component"></component> -->
            <!-- {{ route.meta.keepAlive }} -->
            <el-main>
              <router-view v-slot="{ Component }" v-if="tab.keepAlive">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </router-view>
              <router-view v-else></router-view>
            </el-main>
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores"
import Menu from "./Menu.vue"
import headerMenu from "./headerMenu.vue"
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router"

const { sidebar } = storeToRefs(useAppStore())

// const tabs = reactive<RouteLocationNormalizedLoaded[]>([route])
type Ttab = {
  path: string
  name: string
  keepAlive?: boolean
}

const router = useRouter()
const route = useRoute()
const tabs = ref<Ttab[]>([
  // 默认标签页
  { path: "/home", name: "主页" },
])

const activeTab = ref(route.path)

// 监听路由变化，更新标签页
watch(
  () => route.path,
  (newPath) => {
    activeTab.value = newPath
    if (!tabs.value.find((tab) => tab.path === newPath)) {
      tabs.value.push({
        path: newPath,
        name: route.meta?.name || "未命名页面",
        keepAlive: route.meta?.keepAlive ? true : false,
      })
    }
  }
)

const clickTab = (tab: any) => {
  const { props } = tab
  router.push({ path: props.name })
}

// 移除标签页
const removeTab = (targetName) => {
  const tabsWithoutRemoved = tabs.value.filter((tab) => tab.path !== targetName)
  tabs.value = tabsWithoutRemoved
  if (activeTab.value === targetName) {
    const nextTab = tabsWithoutRemoved.length ? tabsWithoutRemoved[tabsWithoutRemoved.length - 1] : null
    if (nextTab) {
      router.push(nextTab.path)
    }
  }
}
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
