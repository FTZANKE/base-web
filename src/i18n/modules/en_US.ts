import VxeTableEnUS from 'vxe-table/lib/locale/lang/en-US'
import ElementPlusEn from 'element-plus/dist/locale/en.mjs'

export default {
  ...VxeTableEnUS,
  elPlus: ElementPlusEn,
  languages: {
    zh_CN: 'Simplified Chinese',
    en_US: 'English (US)',
  },
  logout: 'Log Out',
  switchLanguage: {
    switchingLanguage: 'Switching Language',
    switchLanguageSuccess: 'Switch language success',
    currentLanguage: 'The current language is',
    switchMSG: `@:switchLanguage.switchLanguageSuccess{','} @:switchLanguage.currentLanguage {lang}`,
  },
}
