## Classes

<dl>
<dt><a href="#EventEmitter">EventEmitter</a></dt>
<dd><p>发布、订阅模式</p>
</dd>
</dl>

## Functions

<dl>
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
<dt><a href="#numWithCommas">numWithCommas(数字)</a> ⇒ <code>String</code></dt>
<dd><p>千分位 
<a href="https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript">参考地址</a>.</p>
</dd>
<dt><a href="#getValueWithKey">getValueWithKey(data, keys)</a> ⇒ <code>any</code></dt>
<dd><p>取值器 获取指定的key的值</p>
</dd>
<dt><a href="#parseUrl">parseUrl(url)</a> ⇒ <code>Object</code> | <code>String</code> | <code>String</code> | <code>String</code> | <code>String</code> | <code>String</code> | <code>String</code> | <code>Object</code> | <code>Object</code></dt>
<dd><p>url 解析
<a href="https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript">参考地址</a></p>
</dd>
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
| event | <code>String</code> | 事件名称 |
| callback | <code>function</code> | 回调函数 |

<a name="EventEmitter+emit"></a>

### eventEmitter.emit(event, ...args)
发布

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | 事件名称 |
| ...args | <code>any</code> | 任意参数 传递给on callback当中 |

<a name="EventEmitter+off"></a>

### eventEmitter.off(event)
卸载

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | 事件名称 |

<a name="EventEmitter+once"></a>

### eventEmitter.once(event, callback)
只执行一次

**Kind**: instance method of [<code>EventEmitter</code>](#EventEmitter)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | 事件名称 |
| callback | <code>function</code> | 回调函数 |

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
| wait | <code>Number</code> | 间隔时间 ms |
| immediate | <code>Boolean</code> | 立即执行 |

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
| wait | <code>Number</code> | 间隔时间 |
| options | <code>Object</code> | 立即执行 |
| options.leading | <code>Object</code> | false 表示禁用停止触发的回调 |

**Example**  
```js
function a () {console.log(1)}
const fn = throttle(a, 2000)
// 2s内只会执行一次
object.addEventListener("scroll", fn);
```
<a name="numWithCommas"></a>

## numWithCommas(数字) ⇒ <code>String</code>
千分位 
[参考地址](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript).

**Kind**: global function  
**Returns**: <code>String</code> - 千分位  

| Param | Type |
| --- | --- |
| 数字 | <code>string</code> \| <code>number</code> | 

**Example**  
```js
// returns 123,456.23
numWithCommas(123456.23) -> 123,456.23
```
<a name="getValueWithKey"></a>

## getValueWithKey(data, keys) ⇒ <code>any</code>
取值器 获取指定的key的值

**Kind**: global function  
**Returns**: <code>any</code> - 取值器得到的值  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | 对象 |
| keys | <code>String</code> | b.c |

**Example**  
```js
const a = {a:{ b: 1}}
// returns 1
getValueWithKey(a, 'a.b')
// returns {b: 1}
getValueWithKey(a, 'a')
```
<a name="parseUrl"></a>

## parseUrl(url) ⇒ <code>Object</code> \| <code>String</code> \| <code>String</code> \| <code>String</code> \| <code>String</code> \| <code>String</code> \| <code>String</code> \| <code>Object</code> \| <code>Object</code>
url 解析
[参考地址](https://stackoverflow.com/questions/1420881/how-to-extract-base-url-from-a-string-in-javascript)

**Kind**: global function  
**Returns**: <code>Object</code> - oParseUrl<code>String</code> - oParseUrl.protocol protocol<code>String</code> - oParseUrl.host host<code>String</code> - oParseUrl.hostname hostname<code>String</code> - oParseUrl.origin origin<code>String</code> - oParseUrl.pathname pathname<code>String</code> - oParseUrl.port port<code>Object</code> - oParseUrl.search search<code>Object</code> - oParseUrl.query query  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | url 或者 fullpath |

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
