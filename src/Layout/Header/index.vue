<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const router = useRouter()
const globalStore = useGlobalStore()
const { proxy } = getCurrentInstance()
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
const switchLanguage = lang => {
  proxy.$i18n.locale = lang
  globalStore.setGlobalState('locale', lang)
}
</script>
<template>
  <el-row>
    <el-col :span="12" class="flex_center_start">
      <SvgIcon :name="isCollapseSvgName" size="22" @click="handleClick" class="cursor-pointer" />
    </el-col>
    <el-col :span="12" class="flex_center_end">
      <el-dropdown @command="switchLanguage">
        <SvgIcon name="translate" size="22" class="cursor-pointer" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh_CN">{{ $t(`languages.zh_CN`) }}</el-dropdown-item>
            <el-dropdown-item command="en_US">{{ $t(`languages.en_US`) }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-divider direction="vertical" class="mx-[15px]" />
      <SvgIcon :name="screenIcon" size="22" class="cursor-pointer" @click="$useFullscreen.toggle" />
      <el-divider direction="vertical" class="mx-[15px]" />
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
.el-dropdown * {
  outline: none;
}
</style>
