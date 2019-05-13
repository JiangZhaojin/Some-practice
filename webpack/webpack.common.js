const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: {
        main: './src/index.js'
    },

    output: {
        filename: 'webpack-print.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
        library: 'webpackPrint',
        libraryTarget: 'umd'
    },

    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            root: '_',
            amd: 'lodash'
        }
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|gif|jpg|jpeg)/,
            use: ['file-loader']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html' }),
        new CleanWebpackPlugin()
    ]
}