import { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect.vue'),
      },
    ],
  }, // 重定向
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          showAside: true,
        },
      },
    ],
  }, // 首页
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: { title: '登录' },
  }, // 登录
]

export const errorRouter: RouteRecordRaw[] = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/404.vue'),
    meta: { title: '404' },
  }, // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Error/404.vue'),
    meta: { title: '404' },
  }, // 404
]
