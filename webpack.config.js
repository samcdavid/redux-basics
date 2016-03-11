var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var config;

if (process.env.NODE_ENV === 'development') {
  // development only
  config = require('./.node.env');
}

module.exports = {
  entry: [path.resolve(__dirname, 'app/main.jsx')],
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        JSON.parse('"' + process.env.NODE_ENV + '"')
      )
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
};
