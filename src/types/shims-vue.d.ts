import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    icon?: string
    showHeader?: boolean
    showAside?: boolean
    showFooter?: boolean
    keepAlive?: boolean
  }
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.scss'
declare module '*.css'
declare module '.json'
declare module 'postcss-flexbugs-fixes'
declare module 'virtual:svg-icons-register'
declare module 'virtual:svg-icons-names'
