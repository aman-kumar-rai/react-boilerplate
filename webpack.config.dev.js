const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

// this is an object merge, so it is the same as Object.assign()...
module.exports = merge(baseConfig, {
  mode: 'development',

  // configurations for the development server
  devServer: {
    port: 8976,
    open: true,
    publicPath: '/'
  },
  devtool: 'source-map'
});
