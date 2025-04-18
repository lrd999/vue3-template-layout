import { createPinia } from 'pinia'
import piniaPersisted from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPersisted)

export default pinia