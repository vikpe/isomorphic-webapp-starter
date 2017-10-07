// server production config
const {resolve}    = require('path');
const webpack      = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/server/express.js',
  output: {
    filename: 'server.min.js',
    path: resolve(__dirname, '../../dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MinifyPlugin({}, {comments: false}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};
