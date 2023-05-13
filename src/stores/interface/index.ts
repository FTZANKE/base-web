export interface GlobalState {
  loading: boolean
  token: string
  locale: 'zh_CN' | 'en_US'
  size: 'large' | 'default' | 'small'
  message: { max: number }
  isCollapse: boolean
}
