const base = require('./webpack.base');
const merge = require('webpack-merge');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(base, {
  dependencies: ["./lib/vendor.js"],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }) 
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: path.resolve("lib/manifest.json")
    }),
    new UglifyjsWebpackPlugin({
      sourceMap: true
    }),
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextWebpackPlugin("style.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js"
    })
  ]
})
