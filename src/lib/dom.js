/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:19:15
 * @LastEditTime: 2020-12-20 02:03:44
 */
/**
 * 动态创建iframe
 *
 * @param {string} id  iframe id
 * @param {string} url iframe 地址
 * @param {string} style iframe 样式
 * 
 * @returns {HTMLElement} iframe 创建的iframe dom元素
 */
export const createIframe = (id, url, style) => {
  var iframe = document.createElement("iframe");
  iframe.id = id;
  iframe.style = style;
  iframe.src = url;
  return iframe;
}


/**
 * dom元素是否包含该class
 * 
 * @param {HTMLElement} ele  元素
 * @param {string} cls class名称
 * 
 * @returns {boolean} 是否包含该class
 */
export const hasClass = (ele, cls) => {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 元素添加class
 * 
 * @param {HTMLElement} ele dom元素
 * @param {string} cls 添加的class名称
 */
export const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * 元素删除class
 * 
 * @param {HTMLElement} ele dom元素
 * @param {string} cls 删除的class名称
 */
export const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}
