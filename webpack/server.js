const express = require('express');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const config = require('./webpack.common');

const app = new express();

const compiler = webpack(config);

app.use(webpackMiddleWare(compiler, {
    publicPath: config.publicPath
}));

app.listen(8080, () => {
    console.log('8080 has been listened');
});