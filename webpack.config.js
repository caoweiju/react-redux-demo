'use strict';
/* eslint-disable */
module.exports = {

    entry: {
        'home': './src/scripts/pages/home/index.js'
    },

    output: {
        path: __dirname + '/src/scripts/pages/dist',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'ui': __dirname + '/src/scripts/ui',
            'common': __dirname + '/src/scripts/common'
        }
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
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
};
/* eslint-disable */