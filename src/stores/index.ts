import { createPinia, defineStore } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import type { GlobalState as typeGlobalStore } from '@/stores/interface'

const pinia = createPinia().use(
  createPersistedState({
    storage: localStorage, // sessionStorage or localStorage
  })
)

export default pinia

export const useGlobalStore = defineStore('Global', {
  state: () => ({
    loading: false, // 全局loading状态
    token: '', // token
    locale: 'zh_CN', // 语言
    size: 'default', // 组件尺寸
    message: { max: 5 }, // 最大显示数
    isCollapse: false, // 菜单是否折叠
  }),
  getters: {},
  actions: {
    setGlobalState(key: keyof typeGlobalStore, val: typeGlobalStore[keyof typeGlobalStore]) {
      this.$patch({ [key]: val })
    },
  },
  persist: true, // 设置持久化
})
