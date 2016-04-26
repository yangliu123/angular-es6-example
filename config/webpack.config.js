'use strict';
let path = require('path');
let webpack = require('webpack');

let CommonChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let DedupePlugin = webpack.optimize.DedupePlugin;

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');


let config = {
    devtool: 'inline-source-map',
    entry: {
        app: path.resolve('./src/bootstrap.js'),
        vender: ['angular', 'angular-route', 'angular-ui-router', 'angular-ui-bootstrap', 'oclazyload']
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve('./dist')
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: 'eslint-loader', include: path.resolve('./src'), exclude: [] }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate-loader!babel-loader',
                include: path.resolve('./src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            { test: /\.woff2$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.ttf$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.eot$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.svg$/, loader: 'file-loader?name=[name].[ext]' },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [/node_modules/, /dist/]
            }
        ]
    },
    plugins: [
        new DedupePlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html')
        }),
        new CommonChunkPlugin('vender', '[name].bundle.js'),
        new ExtractTextPlugin('[name].css')
    ],
    eslint:{
        configFile: './.eslintrc.json'
    }
};


module.exports = config;