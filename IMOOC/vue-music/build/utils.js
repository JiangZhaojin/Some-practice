'use strict'
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const path = require('path');

exports.assetSubPath = function (path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' 
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, path);
}

exports.cssLoaders = function (options) {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  function generatorLoaders (loader, loaderOptions) {
    const loaders = options.usePostCss ? [cssLoader, postcssLoader] : [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    if (options.extract) {
      return new ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders);
    }
  }

  return {
    css: generatorLoaders('css'),
    postcss: generatorLoaders(),
    less: generatorLoaders('less'),
    sass: generatorLoaders('sass', {indentedSyntax: true}),
    scss: generatorLoaders('sass'),
    stylus: generatorLoaders('stylus'),
    styl: generatorLoaders('stylus')
  }
}

exports.styleLoaders = function (options) {
  const output = [];
  const loaders = exports.cssLoaders(options);
  for (const extension in loaders) {
    let loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output;
}

exports.createNotifierCallback = function () {
  const notifier = require('node-notifier');
  return (severity, errors) => {
    if (severity !== 'error') {
      return;
    }
    const error = errors[0];
    const filename = error.file.split('!').pop();
    notifier.notify({
      title: pkg.name,
      message: severity + ':' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}