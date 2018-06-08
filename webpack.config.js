const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    "bundle": './src/index'
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    chunkFilename: '[name].js'
  },
  devtool: "source-maps",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: ["node_modules"]
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: "css-laoder"
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
  ]
}