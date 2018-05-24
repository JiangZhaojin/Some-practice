const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'ui'),
    filename: 'webpack-numbers.js',
    library : 'webpackNumber',
    libraryTarget: 'umd'
  },
  mode: 'development',
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}