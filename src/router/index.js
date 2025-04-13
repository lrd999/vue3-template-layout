import { createRouter, createWebHashHistory } from 'vue-router'
import menu from './menu'
import setupRouterGuard from './guard'
import Layout from '@/layout/index.vue'
import Redirect from '@/views/redirect.vue'
import Login from '@/views/login/index.vue'

/**
 * meta: {
 *   title: 标题,
 *   hidden: 为 true 不加入侧边栏
 *   affix: 为 true 在标签选项卡中不可删除，仅支持一级路由
 * }
 */

const routes = [
  {
    path: '/',
    meta: { title: '首页' },
    component: Layout,
    children: menu,
  },
  {
    name: 'Login',
    path: '/login',
    meta: { title: '登录', hidden: true },
    component: Login,
  },
  {
    name: 'Redirect',
    path: '/redirect/:path',
    meta: { title: '加载中..', hidden: true },
    component: Redirect,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

setupRouterGuard(router)

export default router
