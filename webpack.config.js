const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
        page1: './src/page1.js',
        page2: './src/page2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/static'),
        filename: '[name].bundle.[chunkhash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true, importLoaders: 1 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'less-loader',
                            options: { sourceMap: true }
                        }
                    ]
                }),
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('[name].bundle.[contenthash:6].css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/tpl/page1.html'),
            filename: path.resolve('dist/html/page1.html'),
            chunks: ['page1'],
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/tpl/page2.html'),
            filename: path.resolve('dist/html/page2.html'),
            chunks: ['page2'],
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        port: 8090
    }
};