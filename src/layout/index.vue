<template>
  <div class="h-screen flex">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <AppHeader />
      <TagView />
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './sidebar/index.vue'
import AppHeader from './navbar/index.vue'
import TagView from './tag-view.vue'
import AppMain from './main.vue'

defineOptions({ name: 'Layout' })
</script>
