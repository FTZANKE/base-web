<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import LayoutSidebar from './Sidebar/index.vue'
import LayoutHeader from './Header/index.vue'
import { hasOwnDefault } from '@/utils'
import { useGlobalStore } from '@/stores'

const route = useRoute()
const globalStore = useGlobalStore()
const { width: WindowWidth } = useWindowSize()
// 是否折叠侧边栏
const isCollapse = computed(() => globalStore.isCollapse)
watch(
  () => WindowWidth.value,
  val => {
    globalStore.setGlobalState('isCollapse', val < 968)
  }
)
// 侧边栏宽度
const asideWidth = computed(() => (isCollapse.value ? '64px' : '200px'))
// 通过路由元信息控制是否显示头部
const isShowHeader = computed(() => hasOwnDefault(route.meta, 'showHeader', true))
// 通过路由元信息控制是否显示侧边栏
const isShowAside = computed(() => hasOwnDefault(route.meta, 'showAside', true))
// 通过路由元信息控制是否显示底部
const isShowFooter = computed(() => hasOwnDefault(route.meta, 'showFooter', true))
// 通过路由元信息控制是否缓存页面
const isKeepAlive = computed(() => hasOwnDefault(route.meta, 'keepAlive', false))
</script>
<template>
  <el-container class="layout">
    <el-aside :width="asideWidth" v-if="isShowAside" class="border-r-1 border-solid border-[var(--el-border-color-light)]">
      <LayoutSidebar :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header v-if="isShowHeader" class="h-[55px] border-b-1 border-solid border-[var(--el-border-color-light)]">
        <LayoutHeader />
      </el-header>
      <el-main>
        <el-card>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" :key="route.name" v-if="isKeepAlive" />
            </keep-alive>
            <component :is="Component" :key="route.name" v-if="!isKeepAlive" />
          </router-view>
        </el-card>
      </el-main>
      <el-footer v-if="isShowFooter" height="30px">Released under the MIT License. © 2023 AHao.</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .el-aside {
    background-color: #fff;
  }
  > .el-container {
    background-color: #f8f8f8;
    > .el-header {
      background-color: #fff;
    }
    .el-main {
      @apply h-full p-[10px];
      :deep(.el-card) {
        @apply h-[calc(100vh-110px)];
      }
    }
    > .el-footer {
      @apply flex_center_center;

      background-color: #fff;
    }
  }
}
</style>
