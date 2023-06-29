const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      app: './src/js/app.js',
      style: './scss/style.scss'
    },
    mode: isProduction ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('postcss-csso')]
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    optimization: {
      minimizer: isProduction
        ? [
            new CssMinimizerPlugin({
              minimizerOptions: {
                preset: [
                  'default',
                  {
                    discardComments: { removeAll: true }
                  }
                ]
              }
            }),
            new TerserPlugin({
              terserOptions: {
                compress: {},
                mangle: true,
                output: {
                  comments: false
                }
              },
              extractComments: false
            })
          ]
        : []
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '../css/[name].css'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, './')
      },
      compress: true,
      port: 9000
    }
  };
};
