const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); //this will help generate index.html directly, check plugins usage


module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "webpack-sass"
            }
        ],
        rules: [
            {
                exclude: /node_modules/, //dont compile any existing node modules
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css",
            disable: process.env.NODE_ENV === "development"
        }),
        new CopyWebpackPlugin([{
            from: './app/*.html',
            to: './',
            flatten: true
        }, {
            from: './app/*.css',
            to: './',
            flatten: true
        }])
    ]
};