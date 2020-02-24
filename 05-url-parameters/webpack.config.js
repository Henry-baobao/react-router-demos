 const path = require('path');
 const webpack = require('webpack');

 module.exports = {
     entry: './index.js',
     output: {
         filename: "bundle.js",
         path: path.resolve(__dirname, 'dist')
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader?presets[]=es2015&presets[]=react'
         }]
     },
     plugins: [
        new webpack.SourceMapDevToolPlugin()
     ]
 }