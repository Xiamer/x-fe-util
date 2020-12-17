/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:19:15
 * @LastEditTime: 2020-12-17 16:39:19
 */
// 发布、订阅
/**
 * 发布、订阅模式
 */
class EventEmitter {
  constructor() {
    this._eventpool = {};
  }
  /**
   * 订阅
   * @param {String} event 事件名称
   * @param {Function} callback 回调函数
   */
  on(event, callback) {
    this._eventpool[event] ? this._eventpool[event].push(callback) : this._eventpool[event] = [callback]
  }
  /**
   * 发布
   * @param {String} event 事件名称 
   * @param  {any} args 任意参数 传递给on callback当中
   */
  emit(event, ...args) {
    this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args))
  }
  /**
   * 卸载
   * @param {String} event 事件名称 
   */
  off(event) {
    if (this._eventpool[event]) {
      delete this._eventpool[event]
    }
  }
  /**
   * 只执行一次
   * @param {String} event 事件名称
   * @param {Function} callback 回调函数
   */
  once(event, callback) {
    this.on(event, (...args) => {
      callback(...args);
      this.off(event)
    })
  }
}

export {
  EventEmitter
}
