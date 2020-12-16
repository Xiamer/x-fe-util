/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-11-24 14:48:09
 * @LastEditTime: 2020-11-24 20:02:27
 */

import util from './util'

/**
 * @description 获取身份证信息
 *
 * @param {String} id 身份证号
 * @returns {Object} info - 身份证信息
 * @returns {String} info.gender - 性别(man:M, female: F)
 * @returns {String} info.birthday - 生日(yyyy-mm-dd)
 * @returns {Number} info.age - 年龄(yyyy-mm-dd)
 *
 */
const getIdCardInfo =(id)=> {
  if (!util.checkIdCardNo(id)) return {}
  return util.getIdCardInfo(id)
}


export {
  getIdCardInfo
}
