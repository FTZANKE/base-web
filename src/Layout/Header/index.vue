<script setup lang="ts">
import { getCurrentInstance, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores'
import useLoading from '@/hooks/useLoading'

defineOptions({ name: 'Header' })

const i18n = useI18n()
const router = useRouter()
const globalStore = useGlobalStore()
const { proxy } = getCurrentInstance()
const handleClick = () => {
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
const screenIcon = computed<'off-screen-two' | 'full-screen-one'>(() => ($useFullscreen.isFullscreen.value ? 'off-screen-two' : 'full-screen-one'))
const switchLanguage = lang => {
  useLoading({
    fullscreen: true,
    text: i18n.t('switchLanguage.switchingLanguage'),
  })
  setTimeout(() => {
    proxy.$i18n.locale = lang
    globalStore.setGlobalState('locale', lang)
    useLoading(false)
    ElNotification.success({
      title: 'Success',
      message: i18n.t(`switchLanguage.switchMSG`, { lang: i18n.t(`languages.${lang}`) }),
      offset: 100,
    })
  }, 1500)
}
const languages = ref([
  { label: '中文', value: 'zh_CN' },
  { label: 'English', value: 'en_US' },
])
</script>
<template>
  <el-row class="h-[inherit]">
    <el-col :span="12" class="flex_center_start">
      <SvgIcon :name="isCollapseSvgName" size="22" @click="handleClick" class="cursor-pointer" />
    </el-col>
    <el-col :span="12" class="flex_center_end">
      <SvgIcon name="config" size="22" class="animate-spin cursor-pointer" />
      <el-divider direction="vertical" class="mx-[15px]" />
      <el-dropdown @command="switchLanguage" trigger="click">
        <SvgIcon name="translate" size="22" class="cursor-pointer" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in languages" :key="item.value" :command="item.value" :disabled="globalStore.locale === item.value">
              <span class="pr-1">{{ $t(`languages.${item.value}`) }}</span>
              <SvgIcon name="arrow-right-up" size="12" v-if="globalStore.locale !== item.value" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-divider direction="vertical" class="mx-[15px]" />
      <SvgIcon :name="screenIcon" size="22" class="cursor-pointer" @click="$useFullscreen.toggle" />
      <el-divider direction="vertical" class="mx-[15px]" />
      <el-dropdown @command="avatarDropdownEvent" trigger="click">
        <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="logout"> <SvgIcon name="logout" />{{ $t('logout') }} </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
