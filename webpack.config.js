const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin'); //this will help generate index.html directly, check plugins usage
// const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

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
            }, {
                test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property
                loader: "file-loader",
                query: {
                    name: '[name].[ext]',
                    outputPath: 'images/'
                    //the images will be emmited to public/assets/images/ folder
                    //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png);
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule
                loader: "url-loader",
                query: {
                    limit: '10000',
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                    //the fonts will be emmited to public/assets/fonts/ folder
                    //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }
                }
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
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
    target: 'electron-renderer',
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
        }, {
            from: './node_modules/semantic-ui-css/themes',
            to: './themes'
        }])
    ]
};