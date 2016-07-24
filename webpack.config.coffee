path = require 'path'
os = require 'os'
webpack = require 'webpack'

ManifestPlugin = require 'webpack-manifest-plugin'

ChunkManifestPlugin = require 'chunk-manifest-webpack-plugin'
StatsPlugin = require 'stats-webpack-plugin'


loaders = require './webpack-config/loaders'
aliases = require './webpack-config/resolve-aliases'
entries = require './webpack-config/entries'

module.exports =
  devServer:
    host: os.hostname()
  devtool: 'source-map'
  entry: entries
  output:
    filename: '[name].js'
    path: path.join __dirname, "build"
    publicPath: 'build/'
  plugins: [
    new webpack.DefinePlugin
      __DEV__: 'true'
      DEBUG: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    # FIXME: we probably want vendor.js for multipage sites
    #new webpack.optimize.CommonsChunkPlugin
    #  name: 'vendor'
    #  filename: 'vendor-dev.js'
    new webpack.optimize.DedupePlugin()
    new webpack.optimize.AggressiveMergingPlugin()
    new StatsPlugin 'stats-dev.json', chunkModules: true
    new ManifestPlugin()
    # This is to ignore moment locales with fullcalendar
    # https://github.com/moment/moment/issues/2416#issuecomment-111713308
    new webpack.IgnorePlugin /^\.\/locale$/, /moment$/
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

