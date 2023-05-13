<script setup lang="ts">
import { computed } from 'vue'
import useLocale from '@/hooks/useLocale'
import i18n from '@/i18n'
import { useGlobalStore } from '@/stores'
import type { GlobalState as typeGlobalStore } from '@/stores/interface'

const globalStore = useGlobalStore()
const locale = computed<null | object>(() => {
  const { currentLocale, changeLocale } = useLocale()
  const locale = currentLocale.value
  changeLocale(locale)
  return i18n.global.messages.value[locale]?.elPlus || null
})
const message = computed<typeGlobalStore['message']>(() => globalStore.message)
</script>

<template>
  <el-config-provider size="large" :locale="locale" :message="message">
    <router-view></router-view>
  </el-config-provider>
</template>
