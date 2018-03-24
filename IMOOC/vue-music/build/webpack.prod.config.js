'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const config = require('../config');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.config');

const env = require('../config/prod.env');

function resolve (dir) {
  return path.resolve(__dirname, '..', dir);
}

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetSubPath('/js/[name].[chunkhash].js'),
    chunkFilename: utils.assetSubPath('js/[name].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warning: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    }),

    new ExtractWebpackPlugin('style.css')
  ]
});

module.exports = webpackConfig;