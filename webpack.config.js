var path = require('path');
var webpack = require('webpack');
var glob = require("glob");
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        js: './src/roger.main.js'
        // js: glob.sync("./src/class/*.js")
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'roger.main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        // new Uglify()
        new webpack.optimize.UglifyJsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};