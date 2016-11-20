var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
// var RxWebpackPlugin = require('rx-webpack-plugin');


module.exports = {

  entry: {
    'index.react': './assets/src/index.react.js',
    'index.rx': './assets/src/index.rx.js',
  },
  output: {
    filename: './assets/build/[name].bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules|work\/rx\/rx\/lib/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  externals: {
    'react': 'window.React',
    'react-dom': 'window.ReactDOM',
    'universal-rx': 'window.Rx'
  }
};
