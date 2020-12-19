## Classes

<dl>
<dt><a href="#EventEmitter">EventEmitter</a></dt>
<dd><p>发布、订阅模式</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#cookies">cookies</a> : <code>object</code></dt>
<dd><p>cookie 相关操作
<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie">参考地址</a></p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#validateEmail">validateEmail</a> ⇒ <code>boolean</code></dt>
<dd><p>校验邮箱
<a href="https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript">参考地址</a></p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getIEVer">getIEVer()</a> ⇒ <code>number</code> | <code>string</code></dt>
<dd><p>获取ie版本号</p>
</dd>
<dt><a href="#getParameterByName">getParameterByName(name, url)</a> ⇒ <code>string</code> | <code>null</code></dt>
<dd><p>获取url query key 对应的值，默认url为当localtion.href
<a href="https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript">参考地址</a></p>
</dd>
<dt><a href="#createIframe">createIframe(id, url, style)</a> ⇒ <code>HTMLElement</code></dt>
<dd><p>动态创建iframe</p>
</dd>
<dt><a href="#hasClass">hasClass(ele, cls)</a> ⇒ <code>boolean</code></dt>
<dd><p>dom元素是否包含该class</p>
</dd>
<dt><a href="#addClass">addClass(ele, cls)</a></dt>
<dd><p>元素添加class</p>
</dd>
<dt><a href="#removeClass">removeClass(ele, cls)</a></dt>
<dd><p>元素删除class</p>
</dd>
<dt><a href="#debounce">debounce(fn, wait, immediate)</a></dt>
<dd><p>防抖函数(可用于防止重复提交)
当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
如果设定时间到来之前，又触发了事件，就重新开始延时。也就是说当一个用户一直触发这个函数，
且每次触发函数的间隔小于既定时间，那么防抖的情况下只会执行一次。</p>
</dd>
<dt><a href="#throttle">throttle(fn, wait, options)</a></dt>
<dd><p>节流函数
当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发
小于既定值，函数节流会每隔这个时间调用一次
用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
实现函数节流我们主要有两种方法：时间戳和定时器</p>
</dd>
<dt><a href="#numWithCommas">numWithCommas(数字)</a> ⇒ <code>string</code></dt>
<dd><p>千分位 
<a href="https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript">参考地址</a></p>
</dd>
<dt><a href="#getValueWithKey">getValueWithKey(data, keys)</a> ⇒ <code>any</code></dt>
<dd><p>取值器 获取指定的key的值</p>
</dd>
<dt><a href="#parseUrl">parseUrl(url)</a> ⇒ <code><a href="#oParseUrl">oParseUrl</a></code></dt>
<dd><p>url 解析
<a href="https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript">参考地址</a></p>
</dd>
<dt><a href="#validMobile">validMobile(phone)</a> ⇒ <code>boolean</code></dt>
<dd><p>校验手机号</p>
</dd>
<dt><a href="#validChineseName">validChineseName(name, length)</a> ⇒ <code>boolean</code></dt>
<dd><p>校验中文名字</p>
</dd>
<dt><a href="#validPwd">validPwd(pwd)</a> ⇒ <code>boolean</code></dt>
<dd><p>密码复杂性 校验 6-18位，大小写字母、数字和符号 至少三种</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#oParseUrl">oParseUrl</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="EventEmitter"></a>

## EventEmitter
发布、订阅模式

**Kind**: global class  

* [EventEmitter](#EventEmitter)
    * [.on(event, callback)](#EventEmitter+on)
    * [.emit(event, ...args)](#EventEmitter+emit)
    * [.off(event)](#EventEmitter+off)
    * [.once(event, callback)](#EventEmitter+once)

<a name="EventEmitter+on"></a>

### eventEmitter.on(event, callback)
订阅

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |
| callback | <code>function</code> | 回调函数 |

<a name="EventEmitter+emit"></a>

### eventEmitter.emit(event, ...args)
发布

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |
| ...args | <code>any</code> | 任意参数 传递给on callback当中 |

<a name="EventEmitter+off"></a>

### eventEmitter.off(event)
删除

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |

<a name="EventEmitter+once"></a>

### eventEmitter.once(event, callback)
只执行一次

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |
| callback | <code>function</code> | 回调函数 |

<a name="cookies"></a>

## cookies : <code>object</code>
cookie 相关操作
[参考地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

**Kind**: global namespace  

* [cookies](#cookies) : <code>object</code>
    * [.get(sKey)](#cookies.get) ⇒ <code>sting</code> \| <code>null</code>
    * [.set(sKey, sValue, vEnd, sPath, sDomain, bSecure)](#cookies.set)
    * [.remove(sKey, sPath, sDomain)](#cookies.remove)
    * [.has(sKey)](#cookies.has) ⇒ <code>boolean</code>
    * [.keys()](#cookies.keys) ⇒ <code>array</code>

<a name="cookies.get"></a>

### cookies.get(sKey) ⇒ <code>sting</code> \| <code>null</code>
获取cookie的某个值

**Kind**: static method of [<code>cookies</code>](#cookies)  
**Returns**: <code>sting</code> \| <code>null</code> - cookie的值，如无为null  

| Param | Type | Description |
| --- | --- | --- |
| sKey | <code>string</code> | cookie的key |

<a name="cookies.set"></a>

### cookies.set(sKey, sValue, vEnd, sPath, sDomain, bSecure)
设置cookie的某个值

**Kind**: static method of [<code>cookies</code>](#cookies)  

| Param | Type | Description |
| --- | --- | --- |
| sKey | <code>string</code> | 要创建或覆盖的cookie的名字 R |
| sValue | <code>string</code> | cookie的值 R |
| vEnd | <code>Infinity</code> \| <code>string</code> \| <code>Date</code> \| <code>object</code> \| <code>null</code> | 最大年龄的秒数 (一年为31536e3， 永不过期的cookie为Infinity) ，或者过期时间的GMTString格式或Date对象; 如果没有定义则会在会话结束时过期 (number – 有限的或 Infinity – string, Date object or null)。 |
| sPath | <code>string</code> \| <code>null</code> | 如果没有定义，默认为当前文档位置的路径。 |
| sDomain | <code>string</code> \| <code>null</code> | 域名 如果没有定义，默认为当前文档位置的路径的域名部分 |
| bSecure | <code>boolean</code> | 域名 如果没有定义，默认为当前文档位置的路径的域名部分 |

<a name="cookies.remove"></a>

### cookies.remove(sKey, sPath, sDomain)
删除cookie的某个值

**Kind**: static method of [<code>cookies</code>](#cookies)  

| Param | Type | Description |
| --- | --- | --- |
| sKey | <code>string</code> | 要删除cookie的名字 R |
| sPath | <code>string</code> \| <code>null</code> | 如果没有定义，默认为当前文档位置的路径。 |
| sDomain | <code>string</code> \| <code>null</code> | 域名 如果没有定义，默认为当前文档位置的路径的域名部分 |

<a name="cookies.has"></a>

### cookies.has(sKey) ⇒ <code>boolean</code>
判断cookie的某个值是否存在

**Kind**: static method of [<code>cookies</code>](#cookies)  
**Returns**: <code>boolean</code> - cookie的某个值是否存在  

| Param | Type | Description |
| --- | --- | --- |
| sKey | <code>string</code> | 要判断cookie的名字 R |

<a name="cookies.keys"></a>

### cookies.keys() ⇒ <code>array</code>
获取cookie的key素组

**Kind**: static method of [<code>cookies</code>](#cookies)  
**Returns**: <code>array</code> - key的数组  
<a name="validateEmail"></a>

## validateEmail ⇒ <code>boolean</code>
校验邮箱
[参考地址](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)

**Kind**: global constant  
**Returns**: <code>boolean</code> - 是否为邮箱  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

**Example**  
```js
// returns true
validateEmail('xiaoguang_10@qq.com')
```
<a name="getIEVer"></a>

## getIEVer() ⇒ <code>number</code> \| <code>string</code>
获取ie版本号

**Kind**: global function  
**Returns**: <code>number</code> \| <code>string</code> - ie版本信息 若不是ie，返回-1  
**Example**  
```js
// chrome -> returns -1
getIEVer()
// ie11 -> returns 11
getIEVer()
// edge -> returns edge
getIEVer()
```
<a name="getParameterByName"></a>

## getParameterByName(name, url) ⇒ <code>string</code> \| <code>null</code>
获取url query key 对应的值，默认url为当localtion.href
[参考地址](https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript)

**Kind**: global function  
**Returns**: <code>string</code> \| <code>null</code> - 返回对应的key，若无返回null  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 获取的query的key |
| url | <code>string</code> | url地址 默认为当前href，也可传query string |

**Example**  
```js
const queryStr = '?foo=lorem&bar=&baz'
// returns  lorem
getParameterByName('foo', queryStr); // "lorem"
// returns  "" (present with empty value)
getParameterByName('bar', queryStr); 
// returns  "" (present with no value)
getParameterByName('baz', queryStr); 
// returns  null (absent)
getParameterByName('qux', queryStr); 
```
<a name="createIframe"></a>

## createIframe(id, url, style) ⇒ <code>HTMLElement</code>
动态创建iframe

**Kind**: global function  
**Returns**: <code>HTMLElement</code> - iframe 创建的iframe dom元素  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | iframe id |
| url | <code>string</code> | iframe 地址 |
| style | <code>string</code> | iframe 样式 |

<a name="hasClass"></a>

## hasClass(ele, cls) ⇒ <code>boolean</code>
dom元素是否包含该class

**Kind**: global function  
**Returns**: <code>boolean</code> - 是否包含该class  

| Param | Type | Description |
| --- | --- | --- |
| ele | <code>HTMLElement</code> | 元素 |
| cls | <code>string</code> | class名称 |

<a name="addClass"></a>

## addClass(ele, cls)
元素添加class

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ele | <code>HTMLElement</code> | dom元素 |
| cls | <code>string</code> | 添加的class名称 |

<a name="removeClass"></a>

## removeClass(ele, cls)
元素删除class

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ele | <code>HTMLElement</code> | dom元素 |
| cls | <code>string</code> | 删除的class名称 |

<a name="debounce"></a>

## debounce(fn, wait, immediate)
防抖函数(可用于防止重复提交)
当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
如果设定时间到来之前，又触发了事件，就重新开始延时。也就是说当一个用户一直触发这个函数，
且每次触发函数的间隔小于既定时间，那么防抖的情况下只会执行一次。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 执行函数 |
| wait | <code>number</code> | 间隔时间 ms |
| immediate | <code>boolean</code> | 立即执行 |

**Example**  
```js
function a () {console.log(1)}
const fn = debounce(a, 2000, false)
// 2s后 打印1
fn()
```
<a name="throttle"></a>

## throttle(fn, wait, options)
节流函数
当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发
小于既定值，函数节流会每隔这个时间调用一次
用一句话总结防抖和节流的区别：防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
实现函数节流我们主要有两种方法：时间戳和定时器

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 执行函数 |
| wait | <code>number</code> | 间隔时间 |
| options | <code>object</code> | 立即执行 |
| options.leading | <code>object</code> | false 表示禁用停止触发的回调 |

**Example**  
```js
function a () {console.log(1)}
const fn = throttle(a, 2000)
// 2s内只会执行一次
object.addEventListener("scroll", fn);
```
<a name="numWithCommas"></a>

## numWithCommas(数字) ⇒ <code>string</code>
千分位 
[参考地址](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)

**Kind**: global function  
**Returns**: <code>string</code> - 千分位  

| Param | Type |
| --- | --- |
| 数字 | <code>string</code> \| <code>number</code> | 

**Example**  
```js
// returns 123,456.23
numWithCommas(123456.23)
```
<a name="getValueWithKey"></a>

## getValueWithKey(data, keys) ⇒ <code>any</code>
取值器 获取指定的key的值

**Kind**: global function  
**Returns**: <code>any</code> - 取值器得到的值  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | 对象 |
| keys | <code>string</code> | b.c |

**Example**  
```js
const a = {a:{ b: 1}}
// returns 1
getValueWithKey(a, 'a.b')
// returns {b: 1}
getValueWithKey(a, 'a')
```
<a name="parseUrl"></a>

## parseUrl(url) ⇒ [<code>oParseUrl</code>](#oParseUrl)
url 解析
[参考地址](https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | url 或者 fullpath |

**Example**  
```js
// returns 
{
  hash: "#2"
  host: "www.baidu.com"
  hostname: "www.baidu.com"
  origin: "https://www.baidu.com"
  pathname: "/abc/def"
  port: ""
  protocol: "https:"
  query: {q: "1", a: "2"}
  search: "?q=1&a=2"
 }
parseUrl('https://www.baidu.com/abc/def?q=1&a=2#2')
```
<a name="validMobile"></a>

## validMobile(phone) ⇒ <code>boolean</code>
校验手机号

**Kind**: global function  
**Returns**: <code>boolean</code> - 是否为手机号  

| Param | Type |
| --- | --- |
| phone | <code>string</code> | 

**Example**  
```js
// returns true
validMobile(13288888888)
// returns false
validMobile(13288888)
```
<a name="validChineseName"></a>

## validChineseName(name, length) ⇒ <code>boolean</code>
校验中文名字

**Kind**: global function  
**Returns**: <code>boolean</code> - 是否为手机号  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 名字 |
| length | <code>number</code> | 最大校验长度，默认16位 |

**Example**  
```js
// returns true
validChineseName('马云')
```
<a name="validPwd"></a>

## validPwd(pwd) ⇒ <code>boolean</code>
密码复杂性 校验 6-18位，大小写字母、数字和符号 至少三种

**Kind**: global function  
**Returns**: <code>boolean</code> - 是否通过校验  

| Param | Type | Description |
| --- | --- | --- |
| pwd | <code>string</code> | 密码 |

**Example**  
```js
// returns true
validPwd('qwe123.')
```
**Example**  
```js
// returns false
validPwd('qwe123456')
```
<a name="oParseUrl"></a>

## oParseUrl : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| protocol | <code>string</code> | protocol |
| host | <code>string</code> | host |
| hostname | <code>string</code> | hostname |
| origin | <code>string</code> | origin |
| pathname | <code>string</code> | pathname |
| port | <code>string</code> | port |
| search | <code>string</code> | search |
| query | <code>object</code> | query |

