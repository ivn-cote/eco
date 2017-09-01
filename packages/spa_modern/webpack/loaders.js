const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSSLoader = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    'css-loader?sourceMap',
    'sass-loader?sourceMap'
  ]
});

const inlineCSSLoader = [
  { loader: 'style-loader' },
  { loader: 'css-loader?sourceMap?convertToAbsoluteUrls' },
  { loader: 'sass-loader?sourceMap' }
];

const cssLoader = () => {
  if (process.env.NODE_ENV === 'production') {
    return extractCSSLoader;
  }

  return inlineCSSLoader;
};

module.exports = {
  cssLoader: cssLoader
};
