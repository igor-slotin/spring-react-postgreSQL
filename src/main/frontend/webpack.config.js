const webpack = require('webpack');

const config = {
  devtool: 'sourcemap',
  context: __dirname + '/src',
  entry: {
    app: './app.jsx',
    vendor: [
      'whatwg-fetch',
      'babel-polyfill'
    ]
  },
  output: {
    path: __dirname,
    filename: '../resources/static/build/[name].js'
  },
  resolve: {
    alias: {
      'fetcher': __dirname + '/src/services/fetcher.js'
    },
    modules: [
      "node_modules"
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "dev")
      }
    })
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [ 'stage-3', 'latest', 'react' ],
              plugins: [ 'transform-object-rest-spread', 'transform-regenerator' ]
            }
          }
        ]
      },
      {
        test: /.js?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [ 'stage-3', 'latest' ],
              plugins: [ 'transform-object-rest-spread', 'transform-regenerator' ]
            }
          }
        ]
      }
    ]
  }
};


module.exports = config;