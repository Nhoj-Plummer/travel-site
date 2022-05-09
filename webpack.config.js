const { setServers } = require('dns')
const { appendFile } = require('fs')
const { hostname } = require('os')
const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-simple-vars'), 
  require('postcss-nested'), 
  require('autoprefixer')
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    watchFiles: ('./app/**/*.html'),
    static: {
      directory: path.join(__dirname, 'app'),
    },
    hot: true,
    host: '192.168.3.190',
    port: 3000,
    liveReload: false
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
      }
    ]
  }
}
