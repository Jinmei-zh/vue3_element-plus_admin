<script setup lang="ts"></script>

<template>
  <main>
    {{ $t("about.welcome", { website: "Jinz管理系统" }) }}
    <el-row>
      <el-col :span="12">
        <el-card header="用户统计" shadow="never"> 123456 </el-card>
      </el-col>
    </el-row>
  </main>
</template>
