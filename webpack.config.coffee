path = require 'path'

webpack = require 'webpack'

ManifestPlugin = require 'webpack-manifest-plugin'
StatsPlugin = require 'stats-webpack-plugin'
BundleTracker = require 'webpack-bundle-tracker'
MiniCssExtractPlugin = require 'mini-css-extract-plugin'
HtmlPlugin = require 'html-webpack-plugin'
FaviconPlugin = require 'favicons-webpack-plugin'

BuildEnvironment = process.env.NODE_ENV or 'development'
if BuildEnvironment not in ['development', 'production']
  throw new Error "Undefined environment #{BuildEnvironment}"

BuildEnvironment = require 'tbirds/webpack-config/buildenv'
DefinePluginOpts = require 'tbirds/webpack-config/define-opts'
coffeeLoaderRule = require 'tbirds/webpack-config/coffee-loader-rule'
buildCssLoader = require 'tbirds/webpack-config/sass-loader-chain'
woffRule = require 'tbirds/webpack-config/woff-rule'
imgVersionedRule = require 'tbirds/webpack-config/img-file-loader-versioned'



# handles output filename for js and css
outputFilename = (ext) ->
  d = "[name].#{ext}"
  p = "[name]-[chunkhash].#{ext}"
  return
    development: d
    production: p
    

# set output filenames
WebPackOutputFilename = outputFilename 'js'
CssOutputFilename = outputFilename 'css'


# path to build directory
localBuildDir =
  development: "dist"
  production: "dist"

# set publicPath
publicPath = localBuildDir[BuildEnvironment]
if not publicPath.endsWith '/'
  publicPath = "#{publicPath}/"
  
WebPackOutput =
  filename: WebPackOutputFilename[BuildEnvironment]
  #path: path.join __dirname, localBuildDir[BuildEnvironment]
  #publicPath: publicPath
  
DefinePluginOpts =
  development:
    __DEV__: 'true'
    DEBUG: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    #__useCssModules__: 'true'
    __useCssModules__: 'false'
  production:
    __DEV__: 'false'
    DEBUG: 'false'
    #__useCssModules__: 'true'
    __useCssModules__: 'false'
    'process.env':
      'NODE_ENV': JSON.stringify 'production'
    
StatsPluginFilename =
  development: 'stats-dev.json'
  production: 'stats.json'

coffeeLoaderTranspileRule =
  test: /\.coffee$/
  loader: 'coffee-loader'
  options:
    transpile:
      presets: ['env']
      plugins: ["dynamic-import-webpack"]

coffeeLoaderDevRule =
  test: /\.coffee$/
  loader: 'coffee-loader'

coffeeLoaderRule =
  development: coffeeLoaderDevRule
  production: coffeeLoaderTranspileRule
  
loadCssRule =
  test: /\.css$/
  use: ['style-loader', 'css-loader']

common_plugins = [
  new webpack.DefinePlugin DefinePluginOpts[BuildEnvironment]
  # FIXME common chunk names in reverse order
  # https://github.com/webpack/webpack/issues/1016#issuecomment-182093533
  new StatsPlugin StatsPluginFilename[BuildEnvironment], chunkModules: true
  new ManifestPlugin()
  new BundleTracker
    filename: "./#{localBuildDir[BuildEnvironment]}/bundle-stats.json"
  # This is to ignore moment locales with fullcalendar
  # https://github.com/moment/moment/issues/2416#issuecomment-111713308
  new webpack.IgnorePlugin /^\.\/locale$/, /moment$/
  new MiniCssExtractPlugin
    filename: CssOutputFilename[BuildEnvironment]
  new HtmlPlugin
    template: './index.coffee'
    filename: 'index.html'
  new FaviconPlugin
    logo: './assets/zuki.png'
    title: 'Zuki'
    icons:
      android: false
      appleIcon: false
      appleStartup: false
      favicons: true
      # https://github.com/jantimon/favicons-webpack-plugin/issues/103
      opengraph: false
      twitter: false
      yandex: false
      windows: false
  ]
    

extraPlugins = []

WebPackOptimization =
  splitChunks:
    chunks: 'all'

terserPluginOptions =
  sourceMap: true
  parallel: true
  terserOptions:
    warnings: true

cleanWebpackOpts =
  verbose: true

if BuildEnvironment is 'production'
  { CleanWebpackPlugin } = require 'clean-webpack-plugin'
  CompressionPlugin = require 'compression-webpack-plugin'
  OptimizeCssAssetsPlugin = require 'optimize-css-assets-webpack-plugin'
  TerserPlugin = require 'terser-webpack-plugin'

  extraPlugins.push new CleanWebpackPlugin(cleanWebpackOpts)
  WebPackOptimization.minimizer = [
   new OptimizeCssAssetsPlugin()
   new TerserPlugin terserPluginOptions
        
   ]
  


AllPlugins = common_plugins.concat extraPlugins


WebPackConfig =
  devtool: 'source-map'
  mode: BuildEnvironment
  optimization: WebPackOptimization
  entry:
    index: './src/entries/index.coffee'
  output: WebPackOutput
  plugins: AllPlugins
  module:
    rules: [
      loadCssRule
      {
        test: /\.scss$/
        use: buildCssLoader[BuildEnvironment]
      }
      coffeeLoaderRule.production
      woffRule
      {
        test: /\.ya?ml$/
        use: 'js-yaml-loader'
      }
      # FIXME combine next two rules
      {
        test: /\.(gif|png|eot|ttf)?$/
        use: [
          {
            loader: 'file-loader'
            options:
              limit: undefined
          }
        ]
      }
      {
        #test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/
        test: /\.(ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/
        use: [
          {
            loader: 'file-loader'
            options:
              limit: undefined
          }
        ]
      }
      {
        test: /\.js#/
        #exclude: /(node_modules|bower_components)/
        use:
          loader: 'babel-loader'
      }
    ]
  resolve:
    extensions: [".wasm", ".mjs", ".js", ".json", ".coffee"]
    alias:
      applets: path.join __dirname, 'src/applets'
      common: path.join __dirname, 'src/common'
      sass: path.join __dirname, 'sass'
      compass: "node_modules/compass-mixins/lib/compass"
      tbirds: 'tbirds/src'
      # https://github.com/wycats/handlebars.js/issues/953
      handlebars: 'handlebars/dist/handlebars'
  stats:
    colors: true
    modules: false
    chunks: true
    #maxModules: 9999
    #reasons: true


if BuildEnvironment is 'development'
  WebPackConfig.devtool = 'source-map'
  WebPackConfig.devServer =
    host: 'localhost'
    #host: '0.0.0.0'
    disableHostCheck: true
    port: 8080
    historyApiFallback: true
    # cors for using a server on another port
    headers: {"Access-Control-Allow-Origin": "*"}
    stats:
      colors: true
      modules: false
      chunks: true
      #maxModules: 9999
      #reasons: true
      
module.exports = WebPackConfig
