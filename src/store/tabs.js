import menu from '@/router/menu'

export const getInitTabs = () => {
  return menu.filter(e => e.meta?.affix).map(e => ({ ...e, fullPath: e.path }))
}

const useTabStore = defineStore(
  'tabs',
  () => {
    const route = useRoute()
    const router = useRouter()

    const tabs = ref(getInitTabs())
    const add = tab => {
      if (tab.meta.hidden) return
      if (tabs.value.some(e => e.fullPath === tab.fullPath)) return
      tabs.value.push(tab)
      router.push(tab.fullPath)
    }
    const remove = path => {
      const index = tabs.value.findIndex(e => [e.path, e.fullPath].includes(path))
      tabs.value.splice(index, 1)
      if ([route.fullPath, route.path].includes(path)) {
        router.push(tabs.value[index - 1].fullPath)
      }
    }

    return { tabs, add, remove }
  },
  {
    persist: {
      key: 'app-tag-view-cache',
      storage: sessionStorage,
    },
  },
)

export default useTabStore
