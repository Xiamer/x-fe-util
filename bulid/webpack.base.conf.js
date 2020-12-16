/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-13 16:05:43
 * @LastEditTime: 2020-12-14 16:23:52
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: resolve('src/index.js'),
  context: process.cwd(), // 上下文目录
  output: {
    path: resolve('dist'),
    filename: 'index.min.js',
    publicPath: '/',
    chunkLoading: false,
    wasmLoading: false,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./example/index.html')
    })
  ]
};
