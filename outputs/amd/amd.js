"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
// canal = inscritos;
//let nome = teste; variavel já declarada no arquivo tipos.ts
console.log(canal);
function saudar(isMorning, number) {
    var saudation = 'Boa Vida!';
    // let unused = 1;
    if (isMorning) {
        saudation = 'Bom dia!' + number;
    }
    return saudation;
}
var a = 'teste ts novo';
console.log(a);
var nome = 'Rene'; //inferido do tipo string
console.log(nome);
//nome = 34; // erro, pois nome é do tipo string agora;
var generic; //desta maneira a variavel aceita qualquer tipo, pois não foi enferido em sua declaração
generic = 34;
console.log(generic);
generic = 'teste';
console.log(generic);
var variavel;
variavel = "nome";
//variavel = 45 // erro pois a variavel foi declarada como tipo string explicitamente
///Arrays
var hobbies = ['teste'];
//hobbies[1] = 34 // erro pois foi inferido que a variavel é um array do tipo string;
var newHobbies = [34, 'este'];
//newHobbies[2] = true; //erro pois foi inferido que a variavel é do tipo string ou numero
var hobbies1 = [34, 'este'];
hobbies1[2] = true; //não gera erro pois a variavel é explicitamente do tipo any
//Tupla
// Array normal
var hobbies2 = [34, 'este', 23];
hobbies2[2] = 54;
// Tupla
var hobbies3 = [34, 'este', 23];
// hobbies3[2] = 'oples'; //erro pois explicitamente a 3 posição do array é um numero
// hobbies3[3] = 45; //erro pois explicitamente o array tem apenas 3 posições
// Enum
var RGB;
(function (RGB) {
    RGB[RGB["Vermelho"] = 0] = "Vermelho";
    RGB[RGB["Verde"] = 1] = "Verde";
    RGB[RGB["Azul"] = 2] = "Azul";
})(RGB || (RGB = {}));
;
console.log(RGB);
var indiceCor = RGB.Azul;
console.log(indiceCor);
var RGB2;
(function (RGB2) {
    RGB2[RGB2["Vermelho"] = 0] = "Vermelho";
    RGB2[RGB2["Verde"] = 52] = "Verde";
    RGB2[RGB2["Azul"] = 53] = "Azul";
})(RGB2 || (RGB2 = {}));
;
console.log(RGB2);
// Funções
function teste() {
    var res = 'oi';
    // const res2 = 43;
    return res;
}
console.log("function " + teste());
function multiply(num1, num2) {
    return num1 * num2;
}
console.log("function multiply " + multiply(2, 2.5));
function sayHello(say) {
    if (say === void 0) { say = 'oi'; }
    console.log(say);
}
var funcao;
//funcao = sayHello;
funcao = multiply;
console.log("tipando variavel com tipo fun\u00E7\u00E3o: " + funcao(2, 5.5));
//Objetos
var usuario = {
    nome: 'Rene',
    idade: 35
};
// usuario = { // Erro pois name e age não existem no tipo da variavel usuario {nome:string, idade:number}
// pois as chaves name e age não existem
//     name: 'Rene',
//     age: 35
// }
//usuario.teste = 'esf' //erro pois teste não existe no tipo da variavel usuário
var user = {
    name: 'Rene',
    age: 35
};
console.log(user);
user = {
    age: 3,
    name: 'Helena'
};
console.log(user);
// Desafio 1
var funcionario = {
    supervisores: ['um', 'dois', 'tres'],
    baterPonto: function (horario) {
        return horario <= 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario);
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(7));
//funcionario.baterPonto('d') // erro pois o atributo barterPonto, é uma função que recebe numerico
//never
function falha(string) {
    throw new Error(string);
}
// falha('oples');
//ou
function infinita() {
    var i = 0;
    while (true) {
        i++;
        console.log(i);
    }
}
//infinita()
//union types
var nota = 9.5;
console.log("nota aceita number: nota " + typeof nota + " - valor " + nota);
nota = '8.0';
console.log("e aceita string: nota " + typeof nota + " - valor " + nota);
//# sourceMappingURL=amd.js.map