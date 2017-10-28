// shared client config (dev and prod)
require('dotenv').config();
const webpack = require('webpack');
const {resolve} = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve(__dirname, '../../src'),
  output: {
    filename: 'js/client.[hash].min.js',
    path: resolve(__dirname, '../../dist/public'),
    publicPath: '/' // necessary for HMR to know where to load the hot update chunks
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({template: 'client/index.ejs',}),
    new webpack.DefinePlugin({
      'process.env': {
        APP_URI: JSON.stringify(process.env.APP_URI),
      },
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
