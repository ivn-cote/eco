// Load optional .env file
require('dotenv').load({ silent: true });
process.env.BABBEL_LOCALE = process.env.BABBEL_LOCALE || 'en';

const path = require('path');
const plugins = require('./plugins');
const cssLoader = require('./loaders').cssLoader;

const BASE_PATH = path.join(__dirname, '..');

module.exports = {
  context: BASE_PATH,
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(BASE_PATH, 'public'),
    filename: 'application.js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, 'src')
        ]
      },
      {
        test: /\.scss$/,
        use: cssLoader()
      },
      {
        test: /\.gif|\.jpg|\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: [
          'url-loader',
          'svgo-loader?' + JSON.stringify({
            plugins: [
              { removeTitle: true }
            ]
          })
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(BASE_PATH),
      'node_modules'
    ],
    extensions: ['.js', '.json']
  },
  plugins: plugins,
  devServer: {
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true,
    noInfo: false,
    stats: { colors: true },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  devtool: 'source-map'
};
