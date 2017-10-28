// client production config
const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const commonClientConfig = require('./client.common');

module.exports = merge(commonClientConfig, {
  entry: './client/index.prod.jsx',
  devtool: 'source-map',
  plugins: [
    new MinifyPlugin({}, {comments: false}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
