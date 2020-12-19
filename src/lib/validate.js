/*
 * @Author: xiaoguang_10@qq.com
 * @descption: 校验相关函数
 * @Date: 2020-07-19 16:07:55
 * @Last Modified by: xiaoguang_10@qq.com
 * @Last Modified time: 2020-11-23 18:37:38
 */

/**
 * @description 校验邮箱
 * {@link https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript 参考地址}
 * 
 * @example 
 * // returns true
 * validateEmail('xiaoguang_10@qq.com')
 *
 * @param {string} email
 * 
 * @returns {boolean} 是否为邮箱
 */
export const validateEmail = (email) => {
  const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return patternEmail.test(String(email).toLowerCase());
}


/**
 * @description 校验手机号
 * 
 * @example 
 * // returns true
 * validMobile(13288888888)
 * // returns false
 * validMobile(13288888)
 *
 * @param {string} phone
 * 
 * @returns {boolean} 是否为手机号
 */
export function validMobile(phone) {
  const patternMobile = /^1\d{10}$/
  return patternMobile.test(phone)
}

/**
 * @description 校验中文名字
 * 
 * @example 
 * // returns true
 * validChineseName('马云')
 *
 * @param {string} name 名字
 * @param {number} length 最大校验长度，默认16位
 * 
 * @returns {boolean} 是否为手机号
 */
export function validChineseName(name, length = 16) {
  return new RegExp(`^[\u4E00-\u9FA5]{2,${length}}$`).test(name)
}


/**
 * @description 密码复杂性 校验 6-18位，大小写字母、数字和符号 至少三种
 * 
 * @example 
 * // returns true
 * validPwd('qwe123.')
 * @example 
 * // returns false
 * validPwd('qwe123456')
 *
 * @param {string} pwd 密码
 * 
 * @returns {boolean} 是否通过校验
 */
export function validPwd(pwd) {
  const pwdReg = new RegExp(/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,18}$/);
  return pwdReg.test(pwd)
}
