const path = require('path');

module.exports = {
  dev: {
    cssSourceMap: false,
    devtool: 'eval-source-map',
    port : 8080,
    host: 'localhost',
    errorOverlay: true,
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    proxyTable: {},
    autoOpenBrowser: true,
    notifyOnErrors: true,
    poll: false
  },

  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    productionSourceMap: true,
    devtool: '#source-map'
  }
}