const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].js',
    publicPath: process.env.PUBLICPATH || '/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node-modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm|pdf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[fullhash].css',
      chunkFilename: 'css/[id].[fullhash].css',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html',
    }),
    new webpack.DllReferencePlugin({
      // eslint-disable-next-line global-require
      manifest: require('./modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: process.env.PUBLICPATH || 'js',
    }),
    new CleanWebpackPlugin({}),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCssAssetPlugin()],
  },
};
