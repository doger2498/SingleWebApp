/*
 * @Author: xiaodengpao
 * @Date:   2016-10-01
 */

'use strict';
// nodejs中的path对象   用于处理目录的对象，提高开发效率
var path = require('path');
var webpack = require("webpack");
var config = require('./config.js');
var TARGET = process.env.npm_lifecycle_event;
var TransferWebpackPlugin = require('transfer-webpack-plugin');
module.exports = {
    // 入口文件
    entry:{
        app: [ './src/app.js']
    },
    // 输出
    output: {
        // 文件地址，使用绝对路径形式
        path: path.join(__dirname, 'dist'),
        // [name]这里是webpack提供的根据路口文件自动生成的名字
        filename: '[name].js',
        // 公共文件生成的地址
        publicPath: 'dist'
    },
    // 服务器配置相关  自动刷新
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
        port:config.remoteServer.port,
        host:config.remoteServer.host
    },
    // 加载器
    module: {
        loaders: [
            // 解析.vue文件,
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6语法
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            // .scss文件编译
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourcsMap'
            },
            // 图片转化
            {
                test: /\.(png|jsp|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            // html模板编译
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
            //字体
            {
                test: /\.(woff|svg|eot|ttf|woff2)$/,
                loader: 'url-loader?limit=50000'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                }
            }
        ]
    },
    // .vue 的配置
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },
    // 转化为es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名   可以直接用别名来代表设定的路径以及其他
        alias: {
        }
    },
    plugins: [],
        // 开启source-map，webpack有多种source-map，在官网文档可以查到
     devtool: 'eval-source-map'
};

module.exports.plugins = [
    new webpack.DefinePlugin({
    }),
    new TransferWebpackPlugin([
        { from: 'img', to: 'img'}
    ], path.resolve(__dirname, "src")),
    // new TransferWebpackPlugin([
    //     { from: 'css', to: 'css'}
    // ], path.resolve(__dirname, "src")),
    new TransferWebpackPlugin([
        { from: 'libs', to: 'libs'}
    ], path.resolve(__dirname, "src"))
]
module.exports.devtool = '#source-map'
