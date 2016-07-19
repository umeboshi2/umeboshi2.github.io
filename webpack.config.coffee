path = require 'path'
webpack = require 'webpack'

ManifestPlugin = require 'webpack-manifest-plugin'

ChunkManifestPlugin = require 'chunk-manifest-webpack-plugin'
StatsPlugin = require 'stats-webpack-plugin'


loaders = require './webpack-config/loaders'
aliases = require './webpack-config/resolve-aliases'
entries = require './webpack-config/entries'

module.exports =
  devServer:
    proxy:
      '/api/*':
        target: 'http://localhost:6543'
        secure: false
  devtool: 'source-map'
  entry: entries
  output:
    filename: '[name].js'
    #publicPath: 'build'
    path: path.join __dirname, "build"
    publicPath: 'build/'
    #path: __dirname
    #path: path.join __dirname, "kotti_dashboard/static"
    #publicPath: '/static-kotti_dashboard/'
    
  plugins: [
    new webpack.DefinePlugin
      __DEV__: 'true'
      DEBUG: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    #new webpack.optimize.CommonsChunkPlugin
    #  name: 'vendor'
    #  filename: 'vendor-dev.js'
    new webpack.optimize.DedupePlugin()
    new webpack.optimize.AggressiveMergingPlugin()
    new StatsPlugin 'stats-dev.json', chunkModules: true
    new ManifestPlugin()
    ]
  module:
    loaders: loaders
  resolve:
    fallback: [
      path.join __dirname, 'src'
      ]
    alias: aliases
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
      new webpack.ResolverPlugin
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin
          "bower.json", ["main"]
        ['normal', 'loader']
    ]

