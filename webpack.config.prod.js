// production config
const merge     = require('webpack-merge');
const webpack   = require('webpack');
const {resolve} = require('path');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  entry: './client/index.js',
  output: {
    filename: 'client.min.js',
    path: resolve(__dirname, 'dist/public'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
});
