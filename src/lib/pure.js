
/**
 * 防抖函数(可用于防止重复提交)
 * 当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
 * 如果设定时间到来之前，又触发了事件，就重新开始延时。也就是说当一个用户一直触发这个函数，
 * 且每次触发函数的间隔小于既定时间，那么防抖的情况下只会执行一次。
 * @example 
 * function a () {console.log(1)}
 * const fn = debounce(a, 2000, false)
 * // 2s后 打印1
 * fn()
 *
 * @param {Function} fn 执行函数
 * @param {Number} wait 间隔时间 ms
 * @param {Boolean} immediate 立即执行
 */
function debounce(fn, wait, immediate) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait)
      if (callNow) {
        fn.apply(this, arguments)
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait);
    }
  }
}


/**
 * 节流函数
 * 当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发
 * 小于既定值，函数节流会每隔这个时间调用一次
 * 用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
 * 实现函数节流我们主要有两种方法：时间戳和定时器
 * 
 * @example 
 * function a () {console.log(1)}
 * const fn = throttle(a, 2000)
 * // 2s内只会执行一次
 * object.addEventListener("scroll", fn);
 *
 * @param {Function} fn 执行函数
 * @param {Number} wait 间隔时间
 * @param {Object} options 立即执行
 * @param {Object} options.leading false 表示禁用停止触发的回调
 */
function throttle(fn, wait, options = {}) {
  let timer;
  let previous = 0;
  let throttled = function () {
    let now = +new Date();
    // remaining 不触发下一次函数的剩余时间
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      fn.apply(this, arguments)
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : new Date().getTime();
        timer = null;
        fn.apply(this, arguments);
      }, remaining);
    }
  }
  return throttled;
}

/**
 * 千分位 
 * {@link https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript 参考地址}.
 * 
 * @example 
 * // returns 123,456.23
 * numWithCommas(123456.23) -> 123,456.23
 * 
 * @param {string | number} 数字
 * @returns {String} 千分位
 * 
 */
const numWithCommas = (x) => {
  if (x === '-') return '-'
  if (!x) return 0
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


/**
 * 取值器 获取指定的key的值
 * 
 * @example
 * const a = {a:{ b: 1}}
 * // returns 1
 * getValueWithKey(a, 'a.b')
 * // returns {b: 1}
 * getValueWithKey(a, 'a')
 * 
 * @param {Object} data 对象
 * @param {String} keys b.c
 * @returns {any} 取值器得到的值
 */
const getValueWithKey = (obj, keys) => {
  return keys.split('.').reduce((pre, cur) => {
    if (!(pre instanceof Object) && cur) return undefined
    if (pre[cur]) return pre[cur]
  }, obj)
}

/**
 * url 解析
 * {@link https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript 参考地址}
 * 
 * @example
 * // returns 
 * {
 *   hash: "#2"
 *   host: "www.baidu.com"
 *   hostname: "www.baidu.com"
 *   origin: "https://www.baidu.com"
 *   pathname: "/abc/def"
 *   port: ""
 *   protocol: "https:"
 *   query: {q: "1", a: "2"}
 *   search: "?q=1&a=2"
 *  }
 * parseUrl('https://www.baidu.com/abc/def?q=1&a=2#2')
 * 
 * @param {String} url url 或者 fullpath
 * @returns {Object} oParseUrl
 * @returns {String} oParseUrl.protocol protocol
 * @returns {String} oParseUrl.host host
 * @returns {String} oParseUrl.hostname hostname
 * @returns {String} oParseUrl.origin origin
 * @returns {String} oParseUrl.pathname pathname
 * @returns {String} oParseUrl.port port
 * @returns {Object} oParseUrl.search search
 * @returns {Object} oParseUrl.query query
 * 
 */
const parseUrl = (url) => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  const { host, hostname, pathname, port, protocol, search, hash } = a;
  const origin = `${protocol}//${hostname}${port.length ? `:${port}` : ''}`;
  let query = {}
  if (search) {
    try {
      query = JSON.parse('{"' + decodeURI(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
    } catch (error) {
      console.error('query 解析 异常', error)
    }
  }
  return { origin, host, hostname, pathname, port, protocol, search, hash, query}
}



export {
  debounce,
  throttle,
  numWithCommas,
  getValueWithKey,
  parseUrl
}