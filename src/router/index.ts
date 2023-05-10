import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from '@/hooks/useNprogress'
import { ElMessage } from 'element-plus'
import { useGlobalStore } from '@/stores'
import { getType } from '@/utils'
import { staticRouter, errorRouter } from './modules/StaticRouter'

// 忽略从modules导入的路由
const ignoreRoutes = ['ErrorRoutes', 'StaticRoutes']
// 自动导入modules下的路由
const modulesRoutes = (import.meta.glob('./modules/*.ts', { eager: true }) || {}) as { [key: string]: any }
const modules = []
Object.keys(modulesRoutes).forEach(route => {
  const data = modulesRoutes[route].default || modulesRoutes[route]
  const fileName = route.replace(/(.*\/)*([^.]+).*/gi, '$2')
  if (ignoreRoutes.includes(fileName)) return
  if (getType(data) === 'Object') modules.push(data)
  else if (getType(data) === 'Array') modules.push(...data)
})
// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [...staticRouter, ...modules, ...errorRouter] as RouteRecordRaw[], // 合并路由
  strict: false, // 开启严格模式，生产环境不建议开启
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }), // 路由跳转后滚动到顶部
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  useTitle(String(to.meta.title || ''))
  const globalStore = useGlobalStore()

  // 未登录跳转登录页
  if (!globalStore.token && to.path !== '/login') next({ path: '/login', replace: true })
  // 已登录跳转首页
  if (!!globalStore.token && to.path === '/login') next({ path: '/' })

  next()
})
router.afterEach(() => {
  NProgress.done()
})
router.onError(error => {
  NProgress.done()
  ElMessage.error(error.message)
})
export default router
