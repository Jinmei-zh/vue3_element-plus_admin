<template>
  <el-dropdown trigger="hover">
    <el-menu-item index="1">
      <template #title> <i class="iconfont icon-duoyuyan"></i> {{ $t(`locale.${Trans.currentLocale}`) }} </template>
    </el-menu-item>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="switchLanguage(sLocale)" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :selected="locale == sLocale">{{ $t(`locale.${sLocale}`) }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- <el-select @change="Trans.switchLanguage">
    <el-option v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :value="sLocale" :selected="locale == sLocale"> {{ t(`locale.${sLocale}`) }}</el-option>
  </el-select> -->
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n"
import Trans from "@/i18n/translation"

const { locale } = useI18n()
const supportedLocales = Trans.supportedLocales

const switchLanguage = async (locale: string) => {
  await Trans.switchLanguage(locale)
}
// const switchLanguage = async (locale) => {
//   console.log("event", event)
//   // const newLocale = event.target.value
//   // console.log("switching language", newLocale)
//   // //   i18n.global.locale.value = locale
//   await Trans.switchLanguage(locale)
// }

// watch(locale, (newLocale) => {
//   console.log("locale changed", newLocale)
// })
</script>
<style></style>
