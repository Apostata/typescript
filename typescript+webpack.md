# Integração typescript com webpack
npm i -D webpack webpack-cli typescript ts-loader

## arquivo webpack.config.js
````
const path = require('path');

module.exports = {
    mode:'production',
    entry:'./src/main.ts',
    output: {
        filename:'app.min.js',
        path: path.join(__dirname, 'dist') // usa o path e pega a constante __dirname que é o diretório atual e junta com /dist
    },
    resolve:{ //resolver no sistema de modulos, por padrão é .js, usar quando há outro formato diferente de .js
        extensions:['.ts', '.js']
    },
    module:{ //regras para resolução dos módulos
        rules: [{
            test: /\.ts$/, //qualquer arquivo ts será processado pelas seguintes regras,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
````

## copiando o conteúdo de public para dist

````
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode:'production',
    entry:'./src/main.ts',
    output: {
        filename:'app.min.js',
        path: path.join(__dirname, 'dist') // usa o path e pega a constante __dirname que é o diretório atual e junta com /dist
    },
    plugins: [
        new CopyPlugin({
            patterns: [
               {from: 'public'}
            ]
        })
    ],
    resolve:{ //resolver no sistema de modulos, por padrão é .js, usar quando há outro formato diferente de .js
        extensions:['.ts', '.js']
    },
    module:{ //regras para resolução dos módulos
        rules: [{
            test: /\.ts$/, //qualquer arquivo ts será processado pelas seguintes regras,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
````

## usando o webpack-dev-server

````
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode:'production',
    entry:'./src/main.ts',
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port: '8485',
        hot: true
    },
    output: {
        filename:'app.min.js',
        path: path.join(__dirname, 'dist') // usa o path e pega a constante __dirname que é o diretório atual e junta com /dist
    },
    plugins: [
        new CopyPlugin({
            patterns: [
               {from: 'public'}
            ]
        })
    ],
    resolve:{ //resolver no sistema de modulos, por padrão é .js, usar quando há outro formato diferente de .js
        extensions:['.ts', '.js']
    },
    module:{ //regras para resolução dos módulos
        rules: [{
            test: /\.ts$/, //qualquer arquivo ts será processado pelas seguintes regras,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
````

no package.json:
````
"scripts": {
    ...
    "start": "webpack serve",
    "build": "webpack"
  },
````