<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const router = useRouter()
const globalStore = useGlobalStore()
const handleClick = () => {
  console.log(globalStore.isCollapse)
  globalStore.setGlobalState('isCollapse', !globalStore.isCollapse)
}
const isCollapseSvgName = computed(() => (globalStore.isCollapse ? 'indent-right' : 'indent-left'))
const avatarDropdownEvent = (command: string) => {
  if (command === 'logout') {
    globalStore.setGlobalState('token', '')
    router.push('/login')
  }
}
// 切换全屏
const $useFullscreen = useFullscreen()
const screenIcon = computed(() => ($useFullscreen.isFullscreen.value ? 'off-screen-two' : 'full-screen-one'))
</script>
<template>
  <el-row>
    <el-col :span="12" class="flex_center_start">
      <SvgIcon :name="isCollapseSvgName" size="22" @click="handleClick" class="cursor-pointer" />
    </el-col>
    <el-col :span="12" class="flex_center_end">
      <SvgIcon :name="screenIcon" size="22" class="w-[40px] cursor-pointer" @click="$useFullscreen.toggle" />
      <el-dropdown @command="avatarDropdownEvent">
        <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout"><SvgIcon name="logout" />退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.el-row {
  height: inherit;
}
</style>
