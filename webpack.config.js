const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = (env, options) => {
  return {
    mode: options.mode,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      filename: 'index.bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
              }
            },
            'stylus-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ]
    },
    plugins: [
      new Dotenv(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html")
      })
    ]
  }
};