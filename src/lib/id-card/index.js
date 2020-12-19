/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-11-24 14:48:09
 * @LastEditTime: 2020-12-20 02:21:33
 */

import util from './util'

/**
 * @typedef {object} oIdCardInfo 身份证对应的性别生日年龄等相关信息
 * @property {string} gender - 性别(man:M, female: F)
 * @property {string} birthday - 生日(yyyy-mm-dd)
 * @property {number} age - 年龄
 */
/**
 * @description 获取身份证号对应的性别生日年龄等信息
 * 
 * @example
 * // returns {gender: "M", birthday: "2002-01-01", age: 18}
 * getIdCardInfo('12010420020101253x')
 * // returns {}
 * getIdCardInfo('000')
 *
 * @param {string} id 身份证号
 * 
 * @returns {oIdCardInfo}
 *
 */
const getIdCardInfo =(id)=> {
  if (!util.checkIdCardNo(id)) return {}
  return util.getIdCardInfo(id)
}


export {
  getIdCardInfo
}
