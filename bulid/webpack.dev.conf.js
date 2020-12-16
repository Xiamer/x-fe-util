/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-14 00:41:34
 * @LastEditTime: 2020-12-10 20:07:57
 */
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.base.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

module.exports = merge(base, {
  mode: "development",
  devServer: {
    //启动服务器端口
    port: 8080,
    contentBase: resolve('dist'), // 静态资源服务器
    // host: "0.0.0.0",
    //自动打开浏览器
    open: true,
    // 启用模块热替换  静态文件目录位置，只有当你需要在webpack-dev-server本地服务器查看或引用静态文件时用到。类型：boolean | string | array, 建议使用绝对路径（boolan example 不会自动刷新）
    hot: true,
    //启用gzip压缩
    compress: true
  }
})
