const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = validate({

    resolve: {
        extensions: ['', '.json', '.js']
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.html/,
                loader: "html-loader",
                include: path.join(__dirname, './dist'),
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader?",
                include: path.resolve(__dirname, "./dist")
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            title: 'HTML Editor',
            template: './index.template.html'
        })
    ]

});


