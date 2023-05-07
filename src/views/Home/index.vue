<script lang="ts" setup>
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { proxy } = getCurrentInstance()

const switchLanguage = lang => {
  proxy.$i18n.locale = lang
  globalStore.setGlobalState('locale', lang)
}
</script>

<template>
  <SvgIcon name="loading" class="animate-spin" size="70"></SvgIcon>
  <el-button @click="switchLanguage('zh_CN')">{{ $t(`languages.zh_CN`) }}</el-button>
  <el-button @click="switchLanguage('en_US')">{{ $t(`languages.en_US`) }}</el-button>
</template>
