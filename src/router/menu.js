import { HomeIcon, AlignRight, SmileIcon } from 'lucide-vue-next'

export default [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页', icon: HomeIcon, affix: true },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/icon',
    name: 'Icon',
    meta: { title: '图标', icon: SmileIcon },
    component: () => import('@/views/icon/index.vue'),
  },
  {
    path: '/nested',
    redirect: '/nested/menu1',
    meta: { title: '嵌套页面', icon: AlignRight },
    children: [
      {
        path: '/nested/menu1',
        name: 'Nested1',
        meta: { title: '嵌套一级', icon: AlignRight },
        component: () => import('@/views/nested/1.vue'),
      },
      {
        path: '/nested/menu2',
        redirect: '/nested/menu2/menu2-1',
        meta: { title: '嵌套二级', icon: AlignRight },
        children: [
          {
            path: '/nested/menu2/menu2-1',
            name: 'Nested2',
            meta: { title: '嵌套二级-2', icon: AlignRight },
            component: () => import('@/views/nested/2.vue'),
          },
        ],
      },
    ],
  },
]
