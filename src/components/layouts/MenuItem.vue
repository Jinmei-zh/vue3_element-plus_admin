<template>
  <template v-for="route in routes">
    <!-- 如果有子集 -->
    <template v-if="route.children && route.children.length > 0">
      <el-sub-menu :index="route.path" :key="route.path">
        <template #title>
          <component class="icons" :is="route.meta?.icon"></component>
          <span>{{ route.meta.name }}</span>
        </template>
        <MenuItem :routes="route.children" />
      </el-sub-menu>
    </template>
    <!-- 如果没有子集 -->
    <template v-else>
      <el-menu-item
        :key="route.path"
        :index="route.path"
        :disabled="route.meta?.disabled"
      >
        <template #title>
          <component class="icons" :is="route.meta?.icon"></component>
          <span>{{ route.meta.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>
<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";
import MenuItem from "./MenuItem.vue";
import { useAppStore } from "@/stores";

const { sidebar } = storeToRefs(useAppStore());

defineProps<{
  routes: RouteRecordRaw[];
}>();
</script>

<style>
.icons {
  width: 16px;
  height: 16px;
  margin-right: 2px;
}
</style>
