# inspired by https://github.com/KyleAMathews/coffee-react-quickstart
# 
gulp = require 'gulp'
gutil = require 'gulp-util'

webpack = require 'webpack'

DevServer = require 'webpack-dev-server'
DevConfig = require './webpack.config.coffee'


compass = require 'gulp-compass'
size = require 'gulp-size'

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

gulp.task 'webpack:coffee', (callback) ->
  # run webpack
  devCompiler.run (err, stats) ->
    throw new gutil.PluginError('webpack:coffee', err) if err
    gutil.log "[webpack:coffee]", stats.toString(colors: true)
    callback()
    return
  return

gulp.task 'serve', ->
  require './server'

gulp.task 'default', ->
  gulp.start 'compass'
  gulp.start 'webpack:coffee'
  
gulp.task 'watch', ['compass', 'webpack:coffee'], ->
  gulp.watch ['./sass/**/*.scss', 'config.rb'], ['compass']
  gulp.watch ['./src/**/*.coffee'], ['webpack:coffee']
  
gulp.task 'watch:coffee', ['webpack:coffee'], ->
  gulp.watch ['./src/**/*.coffee'], ['webpack:coffee']
  
