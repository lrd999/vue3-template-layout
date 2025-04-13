<template>
  <div class="brand-color relative">
    <el-tooltip effect="dark" content="修改页面主色" placement="bottom">
      <Palette @click="open" />
    </el-tooltip>
    <el-color-picker ref="colorPicker" v-model="store.brandColor" @active-change="onChange" />
  </div>
</template>

<script setup>
import { Palette } from 'lucide-vue-next'
import useAppStore from '@/store/app'

const store = useAppStore()
const colorPicker = useTemplateRef('colorPicker')
const open = () => {
  colorPicker.value.show()
}
const onChange = color => {
  store.brandColor = color
}
</script>

<style scoped lang="scss">
.brand-color {
  :deep(.el-color-picker) {
    height: 0 !important;
    overflow: hidden;
    position: absolute;
    bottom: -7px;
    left: -7px;
  }
}
</style>
