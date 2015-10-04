var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'Campanella-worldlinepack',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      { test: /\.sass$/, loader: "style-loader!raw-loader!sass-loader?indentedSyntax&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader') },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.woff(\?v=\d\.\d\.\d)?$/,   loader: "url-loader?limit=9999&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d\.\d\.\d)?$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d\.\d\.\d)?$/,    loader: "file-loader" },
      { test: /\.svg(\?v=\d\.\d\.\d)?$/,    loader: "file-loader" },
      { test: /\.eot(\?v=\d\.\d\.\d)?$/,    loader: "file-loader" }
    ]
  },
  cssnext: {
    browsers: 'last 2 versions'
  }
};
