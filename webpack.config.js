const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.(js|ts)x?$/, exclude: '/node_modules/', use: [{ loader: 'babel-loader' }] }],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html') })],
}
