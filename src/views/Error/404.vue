<script lang="ts" setup>
const $router = useRouter()
const rePush = () => {
  $router.replace('/redirect/123')
}
</script>

<template>
  404
  <SvgIcon name="errorComputer" @click="rePush" size="100" />
</template>
