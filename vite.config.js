import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'node:url'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: env.VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 配置路径别名
      },
    },
    server: {
      port: 8080,
      open: true,
    },
    plugins: [
      vue(),
      UnoCSS(),
      AutoImport({
        // 自动导入
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      Icons({
        // 映射 ./assets/icons 中的 svg 图标
        customCollections: {
          svg: FileSystemIconLoader('./src/assets/icons', svg => {
            return svg.replace(/^<svg /, '<svg width="1.2em" height="1.2em" style="vertical-align: middle" ')
          }),
        },
      }),
    ],
  }
})
