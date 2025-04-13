<template>
  <main class="app-main flex-1">
    <el-scrollbar height="100%" noresize>
      <!-- 继承 app-main 高度的容器，在组件中设置 height: 100% 即可撑满容器 -->
      <div class="extend-height-container">
        <router-view />
      </div>
    </el-scrollbar>
  </main>
</template>

<script setup>
import { APP_NAV_HEIGHT, APP_TAG_HEIGHT } from '@/constants'

defineOptions({ name: 'AppMain' })
const cutHeight = APP_NAV_HEIGHT + APP_TAG_HEIGHT + 'px'
</script>

<style lang="scss" scoped>
$height: calc(100vh - v-bind(cutHeight));

.app-main {
  background-color: var(--el-fill-color);
  height: $height;

  .extend-height-container {
    height: $height;
  }
}
</style>
