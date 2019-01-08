var path = require('path');
var webpack = require('webpack');
var glob = require("glob");
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
        js: './src/js/roger.js'
        // js: glob.sync("./src/js/class/*.js")
    },
    output: {
        filename: 'roger.main.js',
        path: path.resolve(__dirname, 'dist'),
        pathinfo: true,
        sourceMapFilename: "./roger.main.js.map",
        devtoolLineToLine: true
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
    }
};