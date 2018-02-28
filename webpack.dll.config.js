const path = require('path');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    "react",
    "react-dom"
    /** ... 等其他依赖库 */
  ],
  output: {
    path: path.join(__dirname, "lib"),
    filename: "vendor.js",
    library: "vendor_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "vendor_[hash]",
      path: path.join(__dirname, "lib/manifest.json")
    }),
    new UglifyjsWebpackPlugin()
  ]
}
