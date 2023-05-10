import VxeTableZhCN from 'vxe-table/lib/locale/lang/zh-CN'
import ElementPlusZhCn from 'element-plus/dist/locale/zh-cn.mjs'

export default {
  ...VxeTableZhCN,
  elPlus: ElementPlusZhCn,
  languages: {
    zh_CN: '简体中文',
    en_US: '英语（美国）',
  },
  logout: '退出登录',
  switchLanguage: {
    switchingLanguage: '切换语言中',
    switchLanguageSuccess: '切换语言成功',
    currentLanguage: '当前语言为',
    switchMSG: '@:switchLanguage.switchLanguageSuccess , @:switchLanguage.currentLanguage {lang}',
  },
}
