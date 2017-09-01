const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const plugins = [];

const isProduction = (process.env.NODE_ENV === 'production');
const isStandalone = (process.env.APP_MODE === 'standalone');



// if (isStandalone) {
//   plugins.push(new webpack.HotModuleReplacementPlugin());

//   plugins.push(new HtmlWebpackPlugin({
//       template: 'index.html.ejs',
//       locale: process.env.BABBEL_LOCALE || 'en'
//     })
//   );
// } else {
//   plugins.push(new HtmlWebpackPlugin({
//       template: '_config.json.ejs',
//       inject: false,
//       filename: '_config.json'
//     })
//   );
// }

if (isProduction) {
  // plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new ExtractTextPlugin('application.css'));
}

module.exports = plugins;
