const { series, parallel, src, dest } = require('gulp') //task serial, uma depois da outra, parallel tasl em paralelo

const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function limpaDist() { 
    return del(['dist'])// lista de diretórios para serem excluidos
}

function copiaHtml(){
    return src('public/**/*') //copia todo conteúdo da pasta public para pasta dist
        .pipe(dest('dist'))
}

function geraJs(){
    return browserify({ //transforma o js do node para o browser
        basedir:'.',
        entries: ['src/main.ts']
    })  
        .plugin(tsify) // transforma o typescript para js
        .bundle()       // gera o bundle
        .pipe(source('app.js')) // cria o arquivo app.js com o bundle
        .pipe(dest('dist')) // joga o app.js na pasta dist
}

function jsToProduction(){
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(
    limpaDist,
    parallel(geraJs, copiaHtml),
    jsToProduction
)