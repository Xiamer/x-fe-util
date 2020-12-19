/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:18:32
 * @LastEditTime: 2020-12-20 01:36:48
 */
const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

jsdoc2md.render({ 
  files: [
  'src/lib/browser.js',
  'src/lib/design.js',
  'src/lib/dom.js',
  'src/lib/pure.js',
  'src/lib/validate.js',
] 
}).then(res=>{
  fs.writeFileSync('README.md', res);
  console.log('docs 生成 -> README.md')
})