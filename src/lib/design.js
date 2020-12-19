/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:19:15
 * @LastEditTime: 2020-12-20 01:06:21
 */
/**
 * 发布、订阅模式
 * 
 * @example
 * let ee = new EventEmitter()
 * 
 * ee.on('type1', function(x){console.log(x)})
 * ee.on('type1', function(x){console.log(x)})
 * // 打印两个2
 * ee.emit('type1', '2')
 * // 删除订阅的type1事件
 * ee.off('type1')
 * // 只执行一次
 * ee.once('type1', fn)
 * 
 */
class EventEmitter {
  constructor() {
    this._eventpool = {};
  }
  /**
   * 订阅
   * @param {string} event 事件名称
   * @param {Function} callback 回调函数
   */
  on(event, callback) {
    this._eventpool[event] ? this._eventpool[event].push(callback) : this._eventpool[event] = [callback]
  }
  /**
   * 发布
   * @param {string} event 事件名称 
   * @param  {any} args 任意参数 传递给on callback当中
   */
  emit(event, ...args) {
    this._eventpool[event] && this._eventpool[event].forEach(cb => cb(...args))
  }
  /**
   * 删除
   * @param {string} event 事件名称 
   */
  off(event) {
    if (this._eventpool[event]) {
      delete this._eventpool[event]
    }
  }
  /**
   * 只执行一次
   * @param {string} event 事件名称
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
