const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dev/js/main.js',
  output: {
    filename: 'roger.main.js',
    path: path.resolve(__dirname, 'dev/js')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};