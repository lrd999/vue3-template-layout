import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
      brand: 'var(--el-color-primary)',
      success: 'var(--el-color-success)',
      danger: 'var(--el-color-danger)',
      warning: 'var(--el-color-warning)',
      info: 'var(--el-color-info)',
      border: 'var(--el-border-color)',
    },
  },
  transformers: [transformerDirectives()],
})
