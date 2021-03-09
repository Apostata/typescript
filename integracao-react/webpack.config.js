const path = require('path');
const rules = require('./config/rules');
const plugins = require('./config/plugins')
const devServer = require('./config/devServer')
module.exports = {
    mode: "development",
    entry: {
        app: ['./src/index.tsx']
    },
    resolve: {
        extensions: ['.ts','.tsx', '.js']
    },
    output:{
        filename:'[name].js',
        publicPath:'/',
        path: path.join(__dirname, 'dist')
    },
    devtool: "source-map",
    module:{
        rules
    },
    plugins,
    devServer
}