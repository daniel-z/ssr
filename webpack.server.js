const path = require('path');
const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const config = {
  // Inform webpack we're bundling a bundle for nodejs not browser
  target: 'node',

  // Tell webpack the root file of our application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'), 
  }
};

module.exports = merge(baseConfig, config);