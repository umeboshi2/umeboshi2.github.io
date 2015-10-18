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
      ]
  resolve:
    extensions: [
      # MUST include empty string
      # https://webpack.github.io/docs/configuration.html#resolve-extensions
      ''
      '.webpack.js'
      '.web.js'
      '.js'
      '.coffee'
    ]
