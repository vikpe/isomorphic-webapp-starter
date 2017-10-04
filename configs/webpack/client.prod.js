// client production config
const merge     = require('webpack-merge');
const webpack   = require('webpack');

const commonClientConfig = require('./client.common');

module.exports = merge(commonClientConfig, {
  entry: './client/index.jsx',
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
