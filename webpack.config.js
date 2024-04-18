const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isEnvProduction = process.env.NODE_ENV === 'production';

/** @type { import('webpack').Configuration } */
module.exports = {
  devtool: isEnvProduction ? 'source-map' : 'eval-source-map',
  entry: './src/index.tsx',
  experiments: {
    outputModule: true,
  },
  externalsPresets: { web: true },
  externalsType: 'module',
  mode: isEnvProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    module: true,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      scriptLoading: 'module',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/*.json', to: '[name][ext]' }],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
