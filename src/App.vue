<script setup lang="ts">
import { RouterView } from "vue-router"
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
import en from "element-plus/dist/locale/en.mjs"
import { useSettingStore } from "@/stores"

const lang = {
  "zh-cn": zhCn,
  en: en,
}
const { locale } = storeToRefs(useSettingStore())
</script>

<template>
  <ElConfigProvider :locale="lang[locale] ?? zhCn">
    <router-view />
  </ElConfigProvider>
</template>

<style scoped></style>
