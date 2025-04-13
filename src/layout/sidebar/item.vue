<template>
  <div v-if="!route.meta?.hidden">
    <el-sub-menu v-if="route.children?.length" :index="route.path">
      <template #title>
        <component v-if="route.meta?.icon" :is="route.meta.icon" class="app-sidebar-icon" :size="18" />
        <span class="ml-2 truncate" :title="route.meta.title">
          {{ route.meta?.title ?? '暂无标题' }}
        </span>
      </template>
      <SidebarItem v-for="item in route.children" :key="item.path" :route="item" />
    </el-sub-menu>
    <el-menu-item v-else :index="route.path">
      <component v-if="route.meta?.icon" :is="route.meta.icon" class="app-sidebar-icon" :size="18" />
      <template #title>
        <span class="ml-2 truncate" :title="route.meta.title">
          {{ route.meta?.title ?? '暂无标题' }}
        </span>
      </template>
    </el-menu-item>
  </div>
</template>

<script setup>
defineOptions({ name: 'SidebarItem' })
defineProps(['route'])
</script>
