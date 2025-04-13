/**
 * 格式化日期
 * @param {Date|String|Number} [date] 日期对象、时间戳或日期字符串
 * @param {String} [format]
 * @returns {String|Number}
 */
export const formatDate = (date = new Date(), format = 'yyyy-MM-dd HH:mm:ss') => {
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) throw new TypeError('`date` 应是一个有效日期')
  if (['t', 'timestamp'].includes(format.toLowerCase())) return d.getTime()
  const tactics = {
    yyyy: d.getFullYear(),
    MM: d.getMonth() + 1,
    dd: d.getDate(),
    HH: d.getHours(),
    mm: d.getMinutes(),
    ss: d.getSeconds(),
  }
  switch (format) {
    case 'date': format = 'yyyy-MM-dd'; break
    case 'time': format = 'HH:mm:ss'; break
    case 'datetime': format = 'yyyy-MM-dd HH:mm:ss'; break
    case 'cdate': format = 'yyyy年MM月dd日'; break
    case 'ctime': format = 'HH时mm分ss秒'; break
    case 'cdatetime': format = 'yyyy年MM月dd日 HH时mm分ss秒'; break
  }
  return format.replace(/(yyyy|MM|dd|HH|mm|ss)/g, char => (tactics[char] + '').padStart(2, '0'))
}

/** 异步等待指定毫秒数 */
export const delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * 设置元素 css 变量
 * @param {HTMLElement} el 
 * @param {String} key 
 * @param {String} value 
 */
export const setCssVar = (el, key, value) => {
  el.style.setProperty(key, value)
}

/**
* 按比率混合两种颜色，类似 sass 的 mix 函数
* @param {String} color1 十六进制颜色
* @param {String} color2 十六进制颜色
* @param {Number} ratio 比例 0-1
* @returns {String} 混合后的十六进制颜色
*/
export const blendColors = (color1, color2, ratio) => {
 ratio = Math.max(0, Math.min(1, ratio))
 const hex = c => {
   const hex = c.toString(16)
   return hex.length == 1 ? '0' + hex : hex
 }
 const calc = (left, right) => {
   return Math.ceil(
     parseInt(color1.substring(left, right), 16) * ratio + parseInt(color2.substring(left, right), 16) * (1 - ratio)
   )
 }
 const r = calc(1, 3)
 const g = calc(3, 5)
 const b = calc(5, 7)
 return `#${hex(r)}${hex(g)}${hex(b)}`
}
