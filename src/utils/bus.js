class EventBus {
  constructor() {
    this.store = new Map()
  }

  /** 为事件添加监听器 */
  on(name, listener) {
    if (!this.store.get(name)) this.store.set(name, new Set())
    this.store.get(name).add(listener)
  }

  /** 移除监听器，listener 不传则移除该事件的所有监听器 */
  off(name, listener) {
    if (listener) {
      const list = this.store.get(name)
      list && list.delete(listener)
    } else {
      this.store.delete(name)
    }
  }

  /** 触发事件 */
  emit(name, ...args) {
    const list = this.store.get(name)
    if (!list?.size) return
    list.forEach(listener => {
      try {
        listener(...args)
      } catch (error) {
        console.error(`执行【${name}】的监听器时发生错误`)
      }
    })
  }
}

export default new EventBus()
