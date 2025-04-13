<template>
  <el-breadcrumb>
    <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in items" :key="item.path" :to="item.path">
      {{ item.meta?.title ?? '' }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
const route = useRoute()

const items = computed(() => {
  const matched = route.matched.slice(1).filter(e => e.path !== '/')
  return matched
})
</script>
