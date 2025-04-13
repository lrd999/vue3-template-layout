<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>

<script setup>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useAppStore, { setAppBrandColor } from './store/app'

const appStore = useAppStore()

onMounted(() => {
  // 初始化项目主色
  setAppBrandColor(appStore.brandColor)
})
</script>
