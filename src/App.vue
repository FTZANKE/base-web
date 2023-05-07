<script setup lang="ts">
import useLocale from '@/hooks/useLocale'
import i18n from '@/i18n'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { proxy } = getCurrentInstance()
const locale = computed(() => {
  const { currentLocale, changeLocale } = useLocale()
  proxy.$i18n.locale = currentLocale.value
  changeLocale(currentLocale.value)
  switch (currentLocale.value) {
    case 'zh_CN':
      return i18n.global.messages.value.zh_CN.elPlus
    case 'en_US':
      return i18n.global.messages.value.en_US.elPlus
  }
})
const message = computed(() => {
  return globalStore.message
})
</script>

<template>
  <el-config-provider size="large" :locale="locale" :message="message">
    <router-view></router-view>
  </el-config-provider>
</template>
