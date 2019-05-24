const path = require('path');
require("@babel/register");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryFile = path.resolve(__dirname, 'src', 'client', 'index.js');
const outputDir = path.resolve(__dirname, 'public');


module.exports = {
 entry: ['@babel/polyfill', entryFile],
 output: {
      filename: 'bundle.js',
      path: outputDir
 },
 plugins: [
     new HtmlWebpackPlugin({
        title: 'Hello world',
        // Load a custom template (lodash by default)
        template: 'src/client/index.html',
        hash: true
      })
    ],
 module: {
      rules: [
         {
           test: /\.(js|jsx)$/,
           loaders: ['babel-loader'],
           exclude: /node_modules/
         },
         {
            test: /\.(scss|css)$/,
            use: [
               {
                 loader: 'style-loader'
               }, 
               { 
                 loader: 'css-loader',
               }, 
               { 
                  loader: 'sass-loader' 
               }
             ]
           }         
      ]
 },
 resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
} 
};