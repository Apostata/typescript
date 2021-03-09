const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =[
    new HtmlWebpackPlugin({
        title: 'Typescript + React',
        template: './src/index.html',
        inject: 'body',
    })
]