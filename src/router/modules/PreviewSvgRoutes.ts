import { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

const PreviewSvgRoutes: RouteRecordRaw[] = [
  {
    path: '/previewSvg',
    redirect: '/previewSvg/viewSvg',
    component: Layout,
    children: [
      {
        path: 'viewSvg',
        name: 'ViewSvg',
        component: () => import('@/views/PreviewSvg/index.vue'),
        meta: { title: '预览svg' },
      },
    ],
  },
]

export default PreviewSvgRoutes
