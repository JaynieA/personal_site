const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

let config = {
  entry:'./app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {test:  /\.jsx?$/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/*": {
        target: "http://localhost:5050",
        pathRewrite: {"^/api" : ""},
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

//If we are building for production
if(process.env.NODE_ENV === 'production') {
  appConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
