/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-18 21:16:28 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-20 22:46:15
 */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

let config = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader'
        ]
      })
    }, 
    {
      test: /\.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|gif|jpeg|png|svg)$/,
      loader: 'url-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}

if (isDev) {
  config.mode = 'development'
  config.devtool = 'cheap-module-eval-source-map'
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.devServer = {
    port: 8080,
    host: 'localhost', 
    overlay: {
      errors: true
    },
    open: true,
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['vue']
  },
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    })
  })
  config.plugins.push(
    new ExtractTextPlugin('style.[hash:8].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}

module.exports = config