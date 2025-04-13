import { APP_TITLE } from '@/constants'
import bus from '@/utils/bus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const setupRouterGuard = router => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(to => {
    bus.emit('ROUTE_CHANGE', to)
    document.title = to.meta?.title ? `${to.meta.title} | ${APP_TITLE}` : APP_TITLE
    NProgress.done()
  })
}

export default setupRouterGuard
