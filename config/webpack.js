var webpack = require('webpack');
var path = require('path');

var CONTEXT_PATH = path.resolve(path.join(__dirname, '../src'));
var OUTPUT_PATH = path.resolve(path.join(__dirname, '../bin'));

module.exports = {
  debug: true,
  watch: false,
  cache: true,
  target: 'node',
  context: CONTEXT_PATH,
  devtool: 'source-map',
  entry: {
    paperless: './paperless'
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name]'
  },
  module: {
    loaders: [
      { test: /\.(js)$/, include: CONTEXT_PATH, exclude: [/node_modules/], loaders: ['babel'] },
      { test: /\.json$/, include: CONTEXT_PATH, exclude: [/node_modules/], loaders: ['json'] }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("#!/usr/bin/env osascript -l JavaScript", {raw: true, entryOnly: false}),
    new webpack.NoErrorsPlugin()
  ]
}
