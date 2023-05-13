<template>
  <template v-for="item in menuList" :key="item.id">
    <el-sub-menu v-if="!!item.children && item.children.length > 0" :index="item.id">
      <template #title>
        <SvgIcon :name="item.icon" size="20" v-if="checkEmpty(item.icon)" />
        <span>{{ item.name }}</span>
      </template>
      <NestedSidebars :data="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <SvgIcon :name="item.icon" size="20" v-if="checkEmpty(item.icon)" />
      <span>{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import NestedSidebars from './nestedSidebars.vue'
import { checkEmpty } from '@/utils'
import { MenuList } from '@/Layout/interface'

defineOptions({ name: 'NestedSidebars' })

const props = defineProps<{
  data: MenuList[]
}>()
const menuList = toRef(props, 'data')
</script>
