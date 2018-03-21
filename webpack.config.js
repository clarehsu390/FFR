const path = require('path');
const webpack = require('webpack');
var plugins = [];
module.exports = {
    context: __dirname,
    entry: './frontend/ffr.jsx',
    output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: 'bundle.js'
    },
    plugins: plugins,
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    },
    devtool: 'source-maps'
  };