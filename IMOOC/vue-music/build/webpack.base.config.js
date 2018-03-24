'use strict'

const path = require('path');
const config = require('../config');

function resolve (dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', 
        options: {
          extractCSS: process.env.NODE_ENV === 'production',
          loaders: {
            css: ['vue-style-loader', 'css-loader'],
            styl: ['vue-style-loader', 'css-loader', 'stylus-loader']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  }
}