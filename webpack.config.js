/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
//const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const isDev = process.env.ENV === 'development';
const entry = ['./src/frontend/index.js'];

if (isDev) {
  entry.push(
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=100&reload=true'
  );
}

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'js/app.js' : 'js/app-[fullhash].js',
    publicPath: process.env.PUBLICPATH || '/',
    chunkFilename: 'js/[id]-[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
        test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm|pdf|ico|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            fallback: 'file-loader',
            name: '[name].[ext]',
            outputPath: 'assets/',
          },
        },
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev
      ? () => {}
      : new CompressionWebpackPlugin({
          test: /\.(js|css)$/,
          filename: '[path].gz',
        }),
    isDev ? () => {} : new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/app.css' : 'css/app-[fullhash].css',
      chunkFilename: 'css/[id]-[chunkhash].css',
    }),
    isDev ? () => {} : new CleanWebpackPlugin({}),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin()],
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        vendors: {
          name: 'vendor',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'vendor/vendor.js' : 'vendor/vendor-[fullhash].js',
          enforce: true,
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        },
      },
    },
  },
};
