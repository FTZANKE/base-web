import { createI18n } from 'vue-i18n'

const modulesI18n = (import.meta.glob('./modules/*.ts', { eager: true }) || {}) as { [key: string]: any }
const messages = {} as { [key: string]: any }
Object.keys(modulesI18n).forEach(key => {
  let fileName = key.replace(/\.\/modules\/(.*)\.ts/, '$1')
  const moduleI18n = modulesI18n[key]
  const { default: moduleI18nData } = moduleI18n
  messages[fileName] = moduleI18nData
})
const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: 'zh_CN',
  messages,
})

export default i18n
