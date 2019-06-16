// server production config
require('dotenv').config();
const webpack = require('webpack');
const {resolve} = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'server.min.js',
    path: resolve(__dirname, '../../dist'),
  },
  resolve: {
    extensions: ['.js'],
    modules: [resolve(__dirname, 'src'), 'node_modules'],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        MONGODB_URI: JSON.stringify(process.env.MONGODB_URI),
        APP_URI: JSON.stringify(process.env.APP_URI),
        PORT: JSON.stringify(process.env.PORT),
      }
    }),
  ],
};
