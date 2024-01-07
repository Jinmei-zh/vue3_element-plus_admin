<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in route.matched.slice(1)" :key="item.path">{{ item.meta.name }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue"
const route = useRoute()
</script>
<style lang=""></style>
