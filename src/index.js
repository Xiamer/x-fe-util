/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:19:15
 * @LastEditTime: 2021-04-01 20:01:02
 */

import * as browser from './lib/browser'; // 浏览器相关
import * as dom from './lib/dom'; // dom相关
import * as design from './lib/design'; // 设计模式相关
import * as pure from './lib/pure'; // 纯函数
import * as idCard from './lib/id-card' // 身份证

const o = {
  ...browser,
  ...dom,
  ...design,
  ...pure,
  ...idCard
}

export default o

