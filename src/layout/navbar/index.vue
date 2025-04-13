<template>
  <header class="app-navbar flex justify-between items-center px-2">
    <div class="flex items-center space-x-3">
      <Hamburger />
      <Breadcrumb />
    </div>
    <div class="right-nav flex items-center space-x-5">
      <Fullscreen />
      <Dark />
      <BrandColor />
      <Profile />
    </div>
  </header>
</template>

<script setup>
import { APP_NAV_HEIGHT } from '@/constants'
import Hamburger from './hamburger.vue'
import Breadcrumb from './breadcrumb.vue'
import Dark from './dark.vue'
import Fullscreen from './fullscreen.vue'
import BrandColor from './brand-color.vue'
import Profile from './profile.vue'

defineOptions({ name: 'Navbar' })
</script>

<style scoped lang="scss">
.app-navbar {
  border-bottom: 1px solid var(--el-border-color);
  height: v-bind('APP_NAV_HEIGHT + "px"');
  color: var(--el-text-color-regular);

  :deep(.right-nav) {
    svg {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }
}
</style>
