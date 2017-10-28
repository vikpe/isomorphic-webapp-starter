// app development config
const merge = require('webpack-merge');
const webpack = require('webpack');

const commonClientConfig = require('./client.common');

module.exports = merge(commonClientConfig, {
  entry: [
    'react-hot-loader/patch', // HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './client/index.dev.jsx' // app entry point
  ],
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: commonClientConfig.output.path,
    publicPath: commonClientConfig.output.publicPath,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR
    new webpack.NamedModulesPlugin() // prints readable module names in the browser console on HMR updates
  ],
});
