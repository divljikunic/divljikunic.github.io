const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
      path: `${__dirname}/docs`,
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Jan Ruzic - Personal Website',
        template: 'index.html'
      })
    ]
  };