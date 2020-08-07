const environments  = require('../variables');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new webpack.DefinePlugin({
        "process.env":JSON.stringify(environments)
    }),
    new HtmlWebpackPlugin({
        title: 'Typescript',
        server_host: environments.SERVER_HOST,
        template: './index.html',
        inject: 'body'
    })
];