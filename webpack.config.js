const { resolve } = require('path');

module.exports = {
  entry: resolve('src', 'app', 'main.ts'),
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public', 'dist'),
  },
};
