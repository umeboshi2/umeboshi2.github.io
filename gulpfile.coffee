# inspired by https://github.com/KyleAMathews/coffee-react-quickstart
# 
fs = require 'fs'

gulp = require 'gulp'
gutil = require 'gulp-util'
runSequence = require 'run-sequence'

webpack = require 'webpack'

DevServer = require 'webpack-dev-server'
DevConfig = require './webpack.config'

ProdConfig = require './webpack.prod.config'

compass = require 'gulp-compass'
size = require 'gulp-size'

tc = require 'teacup'

gulp.task 'compass', () ->
  gulp.src('./sass/*.scss')
  .pipe compass
    config_file: './config.rb'
    css: 'stylesheets'
    sass: 'sass'
  .pipe size()
  .pipe gulp.dest 'stylesheets'


# Create a single instance of the compiler to allow caching.
devCompiler = webpack DevConfig
gulp.task 'webpack:build-dev', ['compass'], (callback) ->
  # run webpack
  devCompiler.run (err, stats) ->
    throw new gutil.PluginError('webpack:build-dev', err) if err
    gutil.log "[webpack:build-dev]", stats.toString(colors: true)
    callback()
    return
  return


gulp.task 'webpack:build-prod', ['compass'], (callback) ->
  # run webpack
  prodCompiler = webpack ProdConfig
  prodCompiler.run (err, stats) ->
    throw new gutil.PluginError('webpack:build-prod', err) if err
    gutil.log "[webpack:build-prod]", stats.toString(colors: true)
    callback()
    return
  return


#gulp.task 'indexhtml', ['webpack:build-prod'], (callback) ->
gulp.task 'indexhtml', (callback) ->
  manifest = require './build/manifest.json'
  page = require './index'
  beautify = require('js-beautify').html
  #console.log "page", page manifest
  index = page manifest
  fs.writeFileSync 'index.html', beautify index
  console.log "Created new index.html"
  
gulp.task 'default', ->
  gulp.start 'compass'
  gulp.start 'webpack:build-dev'

gulp.task 'production', ->
  runSequence 'compass', 'webpack:build-prod', 'indexhtml'
  
gulp.task 'watch', ['compass', 'webpack:coffee'], ->
  gulp.watch ['./sass/**/*.scss', 'config.rb'], ['compass']
  gulp.watch ['./src/**/*.coffee'], ['webpack:coffee']
  
gulp.task 'watch:coffee', ['webpack:coffee'], ->
  gulp.watch ['./src/**/*.coffee'], ['webpack:coffee']
  
