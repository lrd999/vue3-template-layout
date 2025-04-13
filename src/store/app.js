import { setCssVar, blendColors } from '@/utils'
import { useLocalStorage } from '@vueuse/core'

/** 修改项目主色 */
export const setAppBrandColor = color => {
  const html = document.documentElement
  // 修改主色和暗色
  setCssVar(html, '--el-color-primary', color)
  setCssVar(html, '--el-color-primary-dark-2', blendColors('#000000', color, 0.2))
  // 循环修改剩余的 light 辅色
  ;[3, 5, 7, 8, 9].forEach(level => {
    const computedColor = blendColors('#ffffff', color, level / 10)
    setCssVar(html, '--el-color-primary-light-' + level, computedColor)
  })
}

const useAppStore = defineStore('app', () => {
  // 侧边栏
  const sidebar = reactive({
    bg: '#202020',
    text: '#c0c4cc',
    open: true,
    foldWidth: 48,
    expendWidth: 210,
  })
  const sidebarWidth = computed(() => (sidebar.open ? sidebar.expendWidth : sidebar.foldWidth))
  // 项目主色
  const brandColor = useLocalStorage('app-brand-color', '#409eff')
  watch(brandColor, setAppBrandColor)

  return { sidebar, sidebarWidth, brandColor }
})

export default useAppStore
