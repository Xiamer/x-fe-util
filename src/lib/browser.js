


// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
var docCookies = {
  getItem: function (sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  /**
   * @param {String} sKey 要创建或覆盖的cookie的名字 R
   * @param {String} sValue cookie的值 R
   * @param {Infinity|string|Date object|null} vEnd 最大年龄的秒数 (一年为31536e3， 永不过期的cookie为Infinity) ，或者过期时间的GMTString格式或Date对象; 如果没有定义则会在会话结束时过期 (number – 有限的或 Infinity – string, Date object or null)。
   * @param {string|null} sPath  如果没有定义，默认为当前文档位置的路径。
   * @param  {string|null} sDomain 域名 如果没有定义，默认为当前文档位置的路径的域名部分
   * @param {boolean} bSecure 域名 如果没有定义，默认为当前文档位置的路径的域名部分
   *
   */
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },

  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },

  hasItem: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: /* optional method: you can safely remove it! */ function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
}


// 获取 ie 版本
function getIEVer() {
  // 取得浏览器的userAgent字符串
  var userAgent = navigator.userAgent;
  // 判断是否IE<11浏览器
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 判断是否IE的Edge浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6;//IE版本<=7
    }
  } else if (isEdge) {
    return 'edge';//edge
  } else if (isIE11) {
    return 11; //IE11
  } else {
    return -1;//不是ie浏览器
  }
}

// 获取url query
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
};

/**
 *
 * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 * @param {string} name
 * @param {string} url
 */
export function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export {
  getIEVer,
  getQueryString,
  docCookies
};
