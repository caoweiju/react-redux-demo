'use strict';

/* eslint-disable */
let path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {

    entry: {
        home: './src/scripts/pages/home/index.js'
        // homecss: './src/styles/pages/home.scss'  // scss入口放到最开始的js中
    },

    output: {
        path: path.join(__dirname + '/src/dist'),
        filename: 'js/[name].js'
    },

    resolve: {
        mainFiles: ["index"],
        extensions: ['.js', '.jsx'],
        alias: {
            'stylepages': path.join(__dirname + '/src/styles/pages'),
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

    // webpack3的配置
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/stage-3', '@babel/react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {   
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
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