<template>
  <component :is="isFullscreen ? Minimize : Maximize" @click="toggle" />
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
import { Maximize, Minimize } from 'lucide-vue-next'

const { isFullscreen, toggle } = useFullscreen()
</script>
