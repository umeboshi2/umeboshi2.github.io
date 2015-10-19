path = require 'path'
webpack = require 'webpack'

module.exports =
  entry: './index.coffee'
  output:
    filename: 'build/bundle.js'
  module:
    loaders: [
      {
        test: /\.coffee$/
        loader: 'coffee'
      }
      {
        test: /\.css$/
        loader: 'style!css'
      }
      {
        test: /\.(woff|woff2|eot|ttf)(\?[\&0-9]+)?$/
        loader: 'url-loader'
      }
      {
        test: /\.(woff|woff2|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/
        loader: 'url-loader'
      }
      ]
  resolve:
    modulesDirectories: [
      'node_modules'
      'bower_components'
      ]
    extensions: [
      # MUST include empty string
      # https://webpack.github.io/docs/configuration.html#resolve-extensions
      ''
      '.webpack.js'
      '.web.js'
      '.js'
      # add coffescript files to the list
      '.coffee'
    ]
    plugins: [
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
    ]
