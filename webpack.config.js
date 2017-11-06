var path = require('path');
var webpack = require('webpack');
var glob = require("glob");
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        js: glob.sync("./src/**/*.js")
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'roger.bundle.js'
    },
    plugins: [
        new Uglify()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};