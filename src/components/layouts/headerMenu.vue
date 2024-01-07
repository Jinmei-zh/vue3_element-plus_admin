<template>
  <el-header>
    <div style="width: 30px">
      <el-icon @click="appStore.toggleSideBar()" :size="20">
        <Fold v-if="sidebar.opened" />
        <Expand v-else />
      </el-icon>
    </div>

    <!-- 面包导航 -->
    <el-breadcrumb style="flex-grow: 2" :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 用户登陆 -->
    <div class="menu">
      <el-menu mode="horizontal" :ellipsis="false">
        <el-dropdown ref="dropdown1" trigger="hover">
          <el-menu-item index="1">
            <template #title> 语言 </template>
          </el-menu-item>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="switchLanguage(sLocale)" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :selected="locale == sLocale">{{
                t(`locale.${sLocale}`)
              }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- <LanguageSwitcher /> -->
        <!-- <el-menu-item index="1">语言</el-menu-item> -->
        <!-- <el-sub-menu index="1">
          <template #title> 语言 </template>
          <el-menu-item @click="switchLanguage(sLocale)" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale" :selected="locale == sLocale">{{
            t(`locale.${sLocale}`)
          }}</el-menu-item>
        </el-sub-menu> -->
        <el-sub-menu index="2">
          <template #title>
            <el-avatar
              :size="35"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1686918632&t=973851af485768045318f8624f767f07"
            />
          </template>
          <el-menu-item index="2-1">个人中心</el-menu-item>
          <el-menu-item @click="logout">退出登陆</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { useAppStore } from "@/stores"
import { storeToRefs } from "pinia"
import { ArrowRight } from "@element-plus/icons-vue"
import { removeToken } from "@/utils/auth"
// import LanguageSwitcher from "../LanguageSwitcher.vue"
import { useI18n } from "vue-i18n"
import Trans from "@/i18n/translation"

const { t, locale } = useI18n()
const supportedLocales = Trans.supportedLocales

const switchLanguage = async (locale: string) => {
  // console.log("switching language", newLocale)
  await Trans.switchLanguage(locale)
}

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
