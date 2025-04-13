<template>
  <component :is="isDark ? Sun : Moon" @click="isDark = !isDark" />
</template>

<script setup>
import { useDark } from '@vueuse/core'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = useDark()
</script>
