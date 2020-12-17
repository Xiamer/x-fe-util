/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-12-16 17:18:32
 * @LastEditTime: 2020-12-17 17:45:06
 */
const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

jsdoc2md.render({ files: ['src/lib/pure.js','src/lib/design.js'] }).then(res=>{
  fs.writeFileSync('README.md', res);
  console.log('docs 生成 -> README.md')
})