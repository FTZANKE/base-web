<script setup lang="ts" name="ViewSvg">
import svgNames from 'virtual:svg-icons-names'

const svgName = (value: string): string => value.replace(/^icon-/, '')
</script>
<template>
  <el-table :data="svgNames" style="width: 100%" height="calc(100vh - 150px)" row-class-name="preview">
    <el-table-column type="index" :label="'序号(' + svgNames.length + ')'" width="100" align="center" />
    <el-table-column label="预览" align="center" width="100">
      <template #default="scope">
        <SvgIcon :name="svgName(scope.row)" size="22" class="animate-spin" />
      </template>
    </el-table-column>
    <el-table-column label="名字" align="center">
      <template #default="scope">{{ svgName(scope.row) + '.svg' }}</template>
    </el-table-column>
  </el-table>
</template>
<style lang="scss" scoped>
.preview {
  &:hover {
    .animate-spin {
      @apply animate-none;
    }
  }
}
</style>
