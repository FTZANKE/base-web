import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/stores'

export default function useLocale() {
  const i18 = useI18n()
  const globalStore = useGlobalStore()
  // 返回当前的语言
  const currentLocale = computed<string>(() => globalStore.locale)
  // 切换语言
  const changeLocale = (value: string) => {
    i18.locale.value = value
    globalStore.setGlobalState('locale', value)
  }
  return {
    currentLocale,
    changeLocale,
  }
}
