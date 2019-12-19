const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
