import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia().use(
  createPersistedState({
    storage: localStorage, // sessionStorage or localStorage
  })
)

export default pinia

interface GlobalState {
  loading: boolean
  token: string
  locale: string | 'zh_CN' | 'en_US'
  size: string | 'large' | 'default' | 'small'
  message: { max: number }
  isCollapse: boolean
}

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
    setGlobalState(key: keyof GlobalState, val: GlobalState[keyof GlobalState]) {
      this.$patch({ [key]: val })
    },
  },
  persist: true, // 设置持久化
})
