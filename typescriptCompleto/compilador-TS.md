# Compilador do typeScript (tsconfig.json)

variaveis de mesmo nome e mesmo escopo, mesmo que em arquivos diferentes, gerarão erro no type script.

## target
é a versão do javascript que será gerada pelo navegador
a versão mais ideal é o es5 embora o es6 já é adodato pela maioria dos browsers

## sourceMaps
para ver o codigo ts em runtime


## strinctNullChecks
valida se uma variavel fou declarada mas não foi iniciada com um valor por exemplo 

## noUnusedParameters
se tem algum parâmetro não usado

## noUnusedLocals
se tem alguma variavel local declarada, iniciada mas não utilizada

## outputDir
muda a pasta de onde os compilados são gerados

## outFile
gera um unico arquivo unico de saida, incompativel com modules:commonjs

### commonjs
````
    const modulo = require('...')
    ...
    module.exports = {
        ...
    }
````

## Links Úteis

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

https://www.typescriptlang.org/docs/handbook/compiler-options.html