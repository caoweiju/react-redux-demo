'use strict';

/* eslint-disable */
let path = require('path');

module.exports = {

    entry: {
        'home': './src/scripts/pages/home/index.js'
    },

    output: {
        path: path.join(__dirname + '/src/scripts/pages/dist'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'ui': path.join(__dirname + '/src/scripts/ui'),
            'common': path.join(__dirname + '/src/scripts/common')
        }
    },
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
            }
        ]
    }
};