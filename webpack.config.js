/* eslint-disable */
/*
 * @Author: weiu.cao 
 * @Date: 2018-01-15 17:29:16 
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-25 23:00:32
 */
'use strict';

let path = require('path');
var webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");  // webpack4 不使用这个进行css的打包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // webpack4 使用这个进行css的打包

const extractSass = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    mode: 'development',
    entry: {
        home: './src/scripts/pages/home/index.js'
        // homecss: './src/styles/pages/home.scss'  // scss入口放到最开始的js中
    },

    output: {
        path: path.join(__dirname + '/src/dist'),
        // publicPath:'/'
        // publicPath: path.join(__dirname + '/src/dist/'), // 加载外部资源，此选项指定在浏览器中所引用的「此输出目录对应的公开 URL」
        filename: 'js/[name].js'
    },

    resolve: {
        mainFiles: ["index"],
        extensions: ['.js', '.jsx'],
        alias: {
            'stylepages': path.join(__dirname + '/src/styles/pages'),
            'stylelib': path.join(__dirname + '/src/styles/lib'),
            'scripts': path.join(__dirname + '/src/scripts/pages'),
            'commonjs': path.join(__dirname + '/src/scripts/common')
        }
    },

    // devtool: "source-map",
    /*
    // 早期版本的webpack配置
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.(string)$/,
                loader: 'string'
            },
            {
                test: /\.(mustache)$/,
                loader: 'mustache'
            }
        ]
    }
    */

    // webpack3的配置 ==》 已经更新到webpack4
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: [
                            // ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }]
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: './../'
                          }
                    },
                    {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // publicPath: './../', // 加载外部资源，把路径重新定义到dist目录下，而不是css里面
                    // use style-loader in development
                    // fallback: "style-loader"
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {   
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            useRelativePath: true, // 图片相对路径
                            outputPath: 'images/'
                        }
                    }
                ]
            }
            ]
    },
    plugins: [
        extractSass,
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};