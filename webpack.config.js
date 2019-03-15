const path = require('path');

const autoprefixer = require('autoprefixer');
const precss = require('precss');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',

            options: {
              plugins: function() {
                return [precss, autoprefixer];
              }
            }
          }
        ]
      },
      {
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        },

        test: /\.js$/
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  entry: {
    home: './src/home/index.js'
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static')
  },

  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         priority: -10,
  //         test: /[\\/]node_modules[\\/]/
  //       }
  //     },

  //     chunks: 'async',
  //     minChunks: 1,
  //     minSize: 30000,
  //     name: true
  //   }
  // }
};
