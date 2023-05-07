<script setup lang="ts">
import { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    color?: string
    size?: string
    prefix?: string
    iconStyle?: CSSProperties
  }>(),
  {
    color: '#000',
    size: '16',
    prefix: 'icon-',
  }
)
const symbolId = computed(() => {
  return '#' + props.prefix + props.name
})
</script>

<template>
  <el-icon :size="size" :color="color" class="inline-block truncate">
    <svg :style="iconStyle" aria-hidden="true">
      <use :href="symbolId" fill="currentColor" />
    </svg>
  </el-icon>
</template>
