/*
 * @Author: xiaoguang_10@qq.com
 * @descption: 校验相关函数
 * @Date: 2020-07-19 16:07:55
 * @Last Modified by: xiaoguang_10@qq.com
 * @Last Modified time: 2020-11-23 18:37:38
 */

/**
 * @description 校验邮箱
 *
 * https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 *
 * @param {String} email
 * @returns {Boolean}
 */
// /\S+@\S+\.\S+/
export const patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (email) => {
  return patternEmail.test(String(email).toLowerCase());
}


export const patternMobile = /^1\d{10}$/
export function validMobile(phone) {
  return patternMobile.test(phone)
}

export const patternChinese = /^[\u4E00-\u9FA5]/
export function checkChineseName(name, length = 16) {
  return new RegExp(`^[\u4E00-\u9FA5]{2,${length}}$`).test(name)
}


// 密码复杂性 校验 6-18位，大小写字母、数字和符号
export function validPwd(pwd) {
  // eslint-disable-next-line
  const pwdReg = new RegExp(/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,18}$/);
  return pwdReg.test(pwd)
}
