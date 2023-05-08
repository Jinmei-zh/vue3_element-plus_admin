<template>
  <el-menu><item :route="showRoutes"></item> </el-menu>
</template>

<script lang="ts" setup>
import { routes } from "@/router";
import item from "./item.vue";

const showRoutes = computed(() => {
  return routes[0].children;
});

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style lang="scss" scoped></style>
