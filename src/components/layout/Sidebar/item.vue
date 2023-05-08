<template>
  <div v-for="(menu, menuIdx) in route" :key="menuIdx">
    <el-sub-menu v-if="menu.children" :index="menu.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menu.meta.name }}==</span>
      </template>
      <el-menu-item
        else
        :index="item2Idx"
        v-for="(item2, item2Idx) in menu.children"
        :key="item2Idx"
      >
        {{ item2.meta.name }}
      </el-menu-item>
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import item from "./item.vue";
defineProps<{
  route: Array | Object;
}>();
</script>
