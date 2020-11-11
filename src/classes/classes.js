"use strict";
// class Data{
//     //publicos por padrão
//     dia: number
//     public mes: number //não é necessário colocar o escopo publico, este é só para mostrar
//     ano: number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
//         this.dia = dia
//         this.mes = mes
//         this.ano = ano
//     }
// }
// const aniversario = new Data(4, 8, 1984)
// aniversario.dia = 6
// console.log(aniversario.dia);
// console.log(aniversario);
// const casamento = new Data // posso omitir parenteses
// console.log(casamento);
// class DataEsperta{
//     constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){}
// }
// const aniversario2 = new DataEsperta(4, 8, 1984)
// aniversario2.dia = 6
// // console.log(aniversario.dia);
// console.log('aniversario esperto',aniversario2);
// const casamento2 = new DataEsperta // posso omitir parenteses
// console.log('casanento esperto',casamento2);
var Produto = /** @class */ (function () {
    function Produto(nome, preco, desconto) {
        if (desconto === void 0) { desconto = 0; }
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    Produto.prototype.resumo = function () {
        return this.nome + " custa R$" + this.calcDesconto() + " (" + this.desconto * 100 + "% de desconto)";
    };
    Produto.prototype.calcDesconto = function () {
        return Math.round(this.preco * (1 - this.desconto) * 100) / 100;
    };
    return Produto;
}());
var prod1 = new Produto('caneta bic', 3.43, 0.15);
// console.log(prod1);
console.log(prod1.resumo());
// const prod2 = new Produto('lapis de cor', 1.43, 0.13);
// console.log(prod2);
// console.log(prod2 instanceof Produto);
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        var velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    };
    Carro.prototype.acelerar = function (velocidade) {
        if (velocidade === void 0) { velocidade = 5; }
        return this.alterarVelocidade(velocidade);
    };
    Carro.prototype.frear = function (velocidade) {
        if (velocidade === void 0) { velocidade = -5; }
        return this.alterarVelocidade(velocidade);
    };
    return Carro;
}());
var carro1 = new Carro('Ford', 'Ka', 185);
// console.log(carro1.acelerar())
Array(40).fill('').forEach(function () { console.log(carro1.acelerar()); });
Array(40).fill('').forEach(function () { console.log(carro1.frear()); });
// erros de acesso, 
// "noEmitOnError": true,  
// carro1.velocidadeAtual = 300
// console.log(`atual -> ${carro1.velocidadeAtual}`)
// carro1.velocidadeMaxima = 300
// console.log(`maxima -> ${carro1.velocidadeMaxima}`)
// carro1.alterarVelocidade = 150
// console.log(`altera provado -> ${carro1.velocidadeAtual}`)
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(modelo, velocidadeMaxima) {
        return _super.call(this, 'Ferrari', modelo, velocidadeMaxima) || this; // chama construtor da classe pai
    }
    Ferrari.prototype.acelerar = function (velocidade) {
        if (velocidade === void 0) { velocidade = 20; }
        return this.alterarVelocidade(velocidade);
    };
    Ferrari.prototype.frear = function (velocidade) {
        if (velocidade === void 0) { velocidade = -15; }
        return this.alterarVelocidade(velocidade);
    };
    return Ferrari;
}(Carro));
var f40 = new Ferrari('F40', 324);
console.log(f40.acelerar());
console.log(f40.frear());
var Pessoas = /** @class */ (function () {
    function Pessoas() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoas.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (valor) {
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoas;
}());
var pessoa1 = new Pessoas;
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -3;
console.log(pessoa1);
// Aributos e métodos estáticos
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.areaCirc = function (raio) {
        return Matematica.PI * raio * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// const n1 = new Matematica
// n1.PI = 4.2
// console.log(n1.areaCirc(4))
// // const n2 = new Matematica
// // n1.PI = 4.2
// console.log(n2.areaCirc(4))
console.log(Matematica.areaCirc(4));
// Classes Abstratas
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
//console.log(new X)
var Calculo = /** @class */ (function () {
    function Calculo() {
        this.resultado = 0;
    }
    Calculo.prototype.getResultado = function () {
        return this.resultado;
    };
    return Calculo;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t + a; });
    };
    return Soma;
}(Calculo));
var Multiplicacao = /** @class */ (function (_super) {
    __extends(Multiplicacao, _super);
    function Multiplicacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplicacao.prototype.executar = function () {
        var numeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numeros[_i] = arguments[_i];
        }
        this.resultado = numeros.reduce(function (t, a) { return t * a; });
    };
    return Multiplicacao;
}(Calculo));
var c1 = new Soma;
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao;
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Singleton e construtor Privado
var Unico = /** @class */ (function () {
    function Unico() {
    }
    Unico.getInstance = function () {
        return Unico.instance;
    };
    Unico.prototype.agora = function () {
        return new Date();
    };
    Unico.instance = new Unico;
    return Unico;
}());
// const errado = new Unico
console.log(Unico.getInstance().agora());
// Atributos somente leitura
var Aviao = /** @class */ (function () {
    function Aviao(modelo, prefixo) {
        this.modelo = modelo;
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
    return Aviao;
}());
var turboHelice = new Aviao('Tu-114', 'PT-ABC');
// turboHelice.modelo = "Teste"
// turboHelice.prefixo = 'oples'
console.log(turboHelice);
//# sourceMappingURL=classes.js.map