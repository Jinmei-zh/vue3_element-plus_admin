<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="name">
        <el-input v-model="formInline.user" placeholder="name" />
      </el-form-item>
      <el-form-item label="address">
        <el-select v-model="formInline.region" placeholder="address">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination
      background
      v-model:current-page="pages.currentPage"
      v-model:page-size="pages.pageSize"
      :page-sizes="[20, 50, 100, 150, 200]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pages.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import request from "@/utils/request"
// 查询表单
const formInline = reactive({
  user: "",
  region: "",
})
const onSubmit = () => {}

// 表格
const pages = reactive({
  total: 400,
  currentPage: 1,
  pageSize: 20,
})
const handleSizeChange = (size: number) => {
  pages.pageSize = size
}
const handleCurrentChange = (page: number) => {
  pages.currentPage = page
}

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]
</script>

<style lang="scss"></style>
