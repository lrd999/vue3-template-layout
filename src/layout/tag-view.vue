<template>
  <nav class="tag-view">
    <el-tabs :model-value="$route.path" type="card" @tab-click="onClick" @tab-remove="onRemove">
      <el-tab-pane v-for="item in store.tabs" :key="item.fullPath" :name="item.fullPath" :closable="!item.meta?.affix">
        <template #label>
          <div class="w-full text-14px font-400" @contextmenu.prevent="openMenu($event, item)">
            {{ item.meta?.title ?? '暂无标题' }}
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </nav>
</template>

<script setup>
import { APP_TAG_HEIGHT } from '@/constants'
import useTabStore, { getInitTabs } from '@/store/tabs'
import bus from '@/utils/bus'
import ContextMenu from '@imengyu/vue3-context-menu'
import { useDark } from '@vueuse/core'
import { RotateCw, X, ArrowLeftRight, Power } from 'lucide-vue-next'

defineOptions({ name: 'TagView' })
const store = useTabStore()
const router = useRouter()
const route = useRoute()
const isDark = useDark()
// 使用发布/订阅感知路由变化，防止使用 watch 浪费性能
bus.on('ROUTE_CHANGE', route => {
  store.add(route)
})
const onClick = pane => {
  router.push(pane.paneName)
}
const onRemove = path => {
  store.remove(path)
}
const closeAll = () => {
  store.tabs = getInitTabs()
  router.push('/')
}
const closeOther = tab => {
  if (tab.meta?.affix) return closeAll()
  store.tabs = store.tabs.filter(e => e.meta?.affix || [e.path, e.fullPath].includes(tab.fullPath))
  if (tab.meta?.affix || tab.fullPath === route.fullPath) return
  // 未在当前路由的 tab 上关闭其它
  router.push('/')
}
const renderIcon = icon => h(icon, { size: 16, color: isDark.value ? '#c0c4cc' : '#606266' })
const openMenu = (event, tab) => {
  ContextMenu.showContextMenu({
    x: event.x,
    y: event.y,
    theme: isDark.value ? 'flat dark' : 'flat',
    items: [
      {
        label: '刷新',
        divided: true,
        icon: renderIcon(RotateCw),
        onClick: () => {
          router.push({ name: 'Redirect', query: tab.query, params: { path: tab.fullPath } })
        },
      },
      {
        label: '关闭',
        icon: renderIcon(X),
        onClick: () => onRemove(tab.fullPath),
      },
      {
        label: '关闭其它',
        icon: renderIcon(ArrowLeftRight),
        onClick: () => closeOther(tab),
      },
      {
        label: '关闭所有',
        icon: renderIcon(Power),
        onClick: () => closeAll(),
      },
    ],
  })
}
onMounted(() => {
  store.add(route)
})
</script>

<style lang="scss" scoped>
.tag-view {
  --el-tabs-header-height: v-bind('APP_TAG_HEIGHT + "px"');
  border-bottom: 1px solid var(--el-border-color);
  height: var(--el-tabs-header-height);

  :deep(.el-tabs) {
    --el-tabs-header-height: v-bind('APP_TAG_HEIGHT + "px"');
    .el-tabs__nav {
      border-radius: 0;
      border: none;
      border-right: 1px solid var(--el-border-color);
    }
    .el-tabs__item {
      border-bottom: none;
      .is-icon-close {
        min-width: 14px;
      }
    }
  }
}
</style>
