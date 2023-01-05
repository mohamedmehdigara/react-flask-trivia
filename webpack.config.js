var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: { path: __dirname + "/static/js", filename: 'bundle.js' },
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};