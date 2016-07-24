path = require 'path'
webpack = require 'webpack'

ManifestPlugin = require 'webpack-manifest-plugin'

ChunkManifestPlugin = require 'chunk-manifest-webpack-plugin'
StatsPlugin = require 'stats-webpack-plugin'
Clean = require 'clean-webpack-plugin'

loaders = require './webpack-config/loaders'
aliases = require './webpack-config/resolve-aliases'
entries = require './webpack-config/entries'

local_build_dir = "build"

module.exports =
  devtool: 'source-map'
  entry: entries
  output:
    filename: '[name]-[chunkhash].js'
    path: path.join __dirname, local_build_dir
    publicPath: 'build/'
  plugins: [
    new webpack.DefinePlugin
      __DEV__: 'false'
      DEBUG: 'false'
      'process.env':
        'NODE_ENV': JSON.stringify 'production'
    # FIXME: we probably want vendor.js for multipage sites
    #new webpack.optimize.CommonsChunkPlugin
    #  name: 'vendor'
    #  filename: 'vendor-[chunkhash].js'
    new webpack.optimize.OccurenceOrderPlugin true
    new webpack.optimize.AggressiveMergingPlugin()
    new StatsPlugin 'stats.json', chunkModules: true
    new ManifestPlugin()
    # This is to ignore moment locales with fullcalendar
    # https://github.com/moment/moment/issues/2416#issuecomment-111713308
    new webpack.IgnorePlugin /^\.\/locale$/, /moment$/
    # production only plugins below
    new webpack.optimize.DedupePlugin()
    new webpack.optimize.UglifyJsPlugin
      compress:
        warnings: true
    #new ChunkManifestPlugin
    #  filename: 'chunk-manifest.json'
    #  manifestVariable: 'webpackManifest'
    new Clean local_build_dir
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

