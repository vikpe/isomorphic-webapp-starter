// server production config
const {resolve} = require('path');
const webpack   = require('webpack');

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
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      ecma: 6,
      sourceMap: true,
    }),
  ],
};
