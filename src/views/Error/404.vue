<script lang="ts" setup>
import { useRouter } from 'vue-router'

const $router = useRouter()
const rePush = () => {
  $router.replace('/redirect/123')
}
</script>

<template>
  404
  <SvgIcon name="errorComputer" @click="rePush" size="100" />
</template>
