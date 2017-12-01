const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const config = {
  // Tell webpack the root file of our application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), 
  }
};

module.exports = merge(baseConfig, config);