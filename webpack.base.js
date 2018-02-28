const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].[hash:7].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
}
