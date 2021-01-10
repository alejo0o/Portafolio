/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCssAssetPlugin()],
  },
};
