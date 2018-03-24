'use strict'

const webpack = require('webpack');
const chalk = require('chalk');
const ora = require('ora');

const webpackConfig = require('./webpack-build-config');

const spinner = ora('building for production...');
spinner.start();

webpack(webpackConfig, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, 
    chunks: false,
    chunkModules: false
  }));

  if (stats.hasErrors()) {
    console.log(chalk.red('  build faild with errors.\n'));
    process.exit(1);
  }

  console.log(chalk.cyan('  Build complete.\n'));
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})