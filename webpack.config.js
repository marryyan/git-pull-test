const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
