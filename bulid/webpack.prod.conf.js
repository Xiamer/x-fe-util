/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-14 00:42:54
 * @LastEditTime: 2021-04-01 19:07:21
 */
const { merge } = require('webpack-merge');
const base = require('./webpack.base.conf');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(base, {
  mode: "production",
  output: {
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            // "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          output: {
          },
        }
      })
    ]
  },
  plugins: [],
})
