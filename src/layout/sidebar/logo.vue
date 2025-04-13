<template>
  <router-link to="/" class="app-logo flex-center cursor-pointer no-underline">
    <img src="/logo.svg" class="size-10" alt="logo" />
    <span v-if="store.sidebar.open" class="ml-2 color-white text-xl font-700">{{ APP_TITLE }}</span>
  </router-link>
</template>

<script setup>
import { APP_TITLE, APP_LOGO_HEIGHT } from '@/constants'
import useAppStore from '@/store/app'

defineOptions({ name: 'Logo' })
const store = useAppStore()
</script>

<style scoped>
.app-logo {
  height: v-bind('APP_LOGO_HEIGHT + "px"');
}
</style>
