"use strict";
//  let & const
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// exemplo hoisting => elevar, erguer, içar comportamento comun de var
// console.log(seraQuePode)
// var seraQuePode = '?'
//será transformado em 
// var seraQuePode;
// console.log(seraQuePode)
// seraQuePode = '?'
// variaveis do tipo let não sofrem içamento ou hoisting, então
// console.log(seraQuePode2)
// let seraQuePode2 = '?'
// irá gerar um erro 
//o correto é:
var seraQuePode = '?';
console.log(seraQuePode);
// let estaFrio = true;
// if(estaFrio){
//     var acao = 'Colocar casaco'
// }
// console.log(acao);
// var só tem 2 escopos: ou global(se no browser)(global no arquivo, se no node) ou escopo de função
// let estaFrio = true;
// if(estaFrio){
//     let acao = 'Colocar casaco'
// }
// console.log(acao);
// erro pois let e const tem ecopo de bloco também, no caso o bloco de "if"
var acao;
var estaFrio = true;
if (estaFrio) {
    acao = 'Colocar casaco';
}
console.log(acao);
//escopo de função de var
// function escopoDeVar(){
//     var segredo = 'meuEscopo'
//     console.log(segredo);
// }
// console.log(segredo);
// erro pois var var está no escopo da função e não existe fora dela"
// var segredo = 'segredo em escopo global'
// function revelarSegredo(){
//     var segredo = 'meu segredo em escopo de função'
//     console.log(segredo);
// }
// revelarSegredo()
// console.log(segredo);
// exemplo de shadowing, segredo delcarado dentro e fora da função, tem escopos distintos
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log(i); 
//resultado será 10 pois var terá escopo global
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log(i);
//erro, pois "i" não estará disponível fora de "for"
// Arrow functions
//exemplo de função comum
// function somar(n1:number, n2:number) : number {
//     return n1 + n2;
// }
// console.log(somar(2, 2));
//exemplo de arrow function
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var showName = function (name) { return console.log("o nome passado \u00E9 " + name); };
showName('Rene');
// escopo de "this" com e sem arrow function
// console.log(this, 'fora das funções');
// const thisArrowFunction = ()=>{
//     console.log(this, 'dentro da função arrow');
// }
// thisArrowFunction();
// function thisNormal(){
//     console.log(this, 'dentro da função normal ou com bind ou call');
// }
// thisNormal.call(this);
// const outroNormal = this.thisNormal.bind(this)
// outroNormal();
// parametro padrão
function contagemRegressiva(inicio, final) {
    if (inicio === void 0) { inicio = 5; }
    if (final === void 0) { final = inicio - 5; }
    while (inicio > final) {
        console.log("n\u00BA " + inicio);
        inicio--;
    }
    console.log('Fim');
}
contagemRegressiva(10);
// Spread & Rest
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
//funciona como:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
var turmaA = ['joão', 'leo', 'diana'];
var turmaB = __spreadArrays(['helena', 'rene', 'erica'], turmaA);
console.log(turmaB);
function retornNums() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
;
function retornNums2(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(a);
    return args;
}
;
console.log(retornNums(1, 2, 3, 4, 5));
//spread
console.log(retornNums.apply(void 0, numbers));
// console.log(retornNums2(...numbers))
// Destructuring
var item = {
    nome: 'produto',
    valor: 12.00,
    caracteristicas: {
        voltagem: 110
    }
};
//só para lembrar que é possível dar um alias ao realizar o destructuring, //no caso 'n' é Alias de 'nome'
var n = item.nome, valor = item.valor, v = item.caracteristicas.voltagem;
console.log("item " + n + ", de pre\u00E7o R$ " + valor + ", de voltagem " + v);
// Promises
//usando só callback
function espera3s(callback) {
    setTimeout(function () {
        callback('3s depois callback');
    }, 3000);
}
function espera3s2() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('3s depois promise');
        }, 3000);
    });
}
espera3s(function (resultado) {
    console.log(resultado);
});
espera3s2().then(function (dado) {
    console.log(dado);
});
//promises
fetch('https://swapi.dev/api/peoples/1')
    .then(function (res) { return res.json(); })
    .then(function (people) { return people.films; })
    .then(function (films) { return fetch(films[0]); })
    .then(function (film) { return film.json(); })
    .then(function (filme) { return console.log(filme.title); })
    .catch(function (e) { return console.error(e.message); });
//# sourceMappingURL=ecmascript.js.map