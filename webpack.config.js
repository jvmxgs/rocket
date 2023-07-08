const path = require('path')

module.exports = {
  entry: './src/game.js',
  output: {
    path: path.resolve(__dirname, 'www/js'),
    publicPath: '/js/',
    filename: 'game.js'
  },
  mode: 'development',
  devServer: {
    port: 9001,
    static: './output',
    compress: true,
    hot: true,
    historyApiFallback: true
  }
}
