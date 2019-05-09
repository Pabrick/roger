const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/roger.js',
  output: {
    filename: 'roger.min.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Roger',
    libraryTarget: 'var',
    libraryExport: 'default'
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