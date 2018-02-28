const base = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(base, {
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})