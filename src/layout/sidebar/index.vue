<template>
  <aside class="app-sidebar flex-shrink-0 h-full">
    <AppLogo />
    <div class="app-sidebar-scroll-wrapper">
      <el-scrollbar height="100%">
        <el-menu
          :default-active="$route.path"
          router
          unique-opened
          :collapse="!store.sidebar.open"
          :collapse-transition="false"
          :popper-offset="8"
          popper-class="app-sidebar-popper"
        >
          <SidebarItem v-for="item in menu" :key="item.path" :route="item" />
        </el-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script setup>
import useAppStore from '@/store/app'
import AppLogo from './logo.vue'
import menu from '@/router/menu'
import SidebarItem from './item.vue'
import { APP_LOGO_HEIGHT } from '@/constants'
import { setCssVar } from '@/utils'

defineOptions({ name: 'Sidebar' })
const store = useAppStore()

onMounted(() => {
  const html = document.documentElement
  setCssVar(html, '--app-sidebar-bg', store.sidebar.bg)
  setCssVar(html, '--app-sidebar-text', store.sidebar.text)
})
</script>

<style lang="scss">
@mixin sidebar {
  --el-menu-bg-color: var(--app-sidebar-bg);
  --el-menu-text-color: var(--app-sidebar-text);
  --el-menu-item-height: 42px;
  --el-menu-sub-item-height: 42px;
  --el-menu-hover-bg-color: rgba(255, 255, 255, 0.1);
  --el-menu-base-level-padding: 10px;
  width: v-bind('store.sidebarWidth + "px"');
  background-color: var(--el-menu-bg-color);
  color: var(--el-menu-text-color);
  transition: width 0.3s;
  border: none !important;

  .el-menu {
    border-right: none;
    .el-menu-item {
      margin: 0 6px;
      border-radius: 4px;
      &.is-active {
        color: #fff;
        background-color: var(--el-color-primary);
      }
      .el-menu-tooltip__trigger {
        justify-content: center;
      }
    }
    .el-sub-menu__title {
      margin: 0 6px;
      border-radius: 4px;
    }
    &.el-menu--collapse {
      .el-menu-item {
        margin: 0;
      }
      .el-sub-menu__icon-arrow {
        display: none;
      }
      .app-sidebar-icon {
        min-width: 18px;
      }
    }
  }

  .el-menu--popup {
    min-width: max-content;
  }
}

.app-sidebar {
  @include sidebar();
}

.app-sidebar-popper {
  @include sidebar();
}
</style>

<style scoped>
.app-sidebar-scroll-wrapper {
  height: calc(100% - v-bind('APP_LOGO_HEIGHT + "px"'));
}
</style>
