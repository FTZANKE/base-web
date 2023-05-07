<script setup lang="ts" name="Sidebar">
import NestedSidebars from '@/Layout/Sidebar/nestedSidebars.vue'
import sidebarData from './sidebar.json'
import { MenuList } from '@/Layout/interface'

const route = useRoute()
const router = useRouter()
const props = defineProps<{
  isCollapse: boolean
}>()
const menuActive = ref<string>(route.path)
const isCollapse = toRef(props, 'isCollapse')
const menuList = ref<MenuList[]>(sidebarData)
const handleOpen = (path: string) => {
  menuActive.value = path
  if (path) router.push({ path })
}
</script>

<template>
  <div class="h-[55px] bg-[#eee]"></div>
  <el-scrollbar height="100%">
    <el-menu :default-active="menuActive" :collapse="isCollapse" @select="handleOpen" :collapse-transition="false">
      <NestedSidebars :data="menuList" />
    </el-menu>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.el-menu {
  border: 0;
}
</style>
