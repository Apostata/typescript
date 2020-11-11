"use strict";
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
//Classe basica
var Moto = /** @class */ (function () {
    function Moto(nome, velocidade) {
        if (velocidade === void 0) { velocidade = 0; }
        this.nome = nome;
        this.velocidade = velocidade;
    }
    Moto.prototype.buzinar = function () {
        console.log('bibiii');
    };
    Moto.prototype.acelerar = function (delta) {
        this.velocidade = this.velocidade + delta;
    };
    return Moto;
}());
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Herança
var Objeto2D = /** @class */ (function () {
    function Objeto2D(base, altura) {
        if (base === void 0) { base = 0; }
        if (altura === void 0) { altura = 0; }
        this.base = base;
        this.altura = altura;
    }
    return Objeto2D;
}());
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    return Retangulo;
}(Objeto2D));
var retangulo = new Retangulo(5, 7);
console.log("\u00C1rea do retangulo = " + retangulo.area());
// Getters and Setters
var Estagiario = /** @class */ (function () {
    function Estagiario() {
        this._primeiroNome = '';
    }
    Object.defineProperty(Estagiario.prototype, "primeiroNome", {
        get: function () {
            return this._primeiroNome;
        },
        set: function (nome) {
            if (nome.length >= 3) {
                this._primeiroNome = nome;
            }
            else {
                this._primeiroNome = '';
            }
        },
        enumerable: false,
        configurable: true
    });
    return Estagiario;
}());
var estagiario = new Estagiario;
console.log("nome : " + estagiario.primeiroNome);
estagiario.primeiroNome = 'Re';
console.log("nome : " + estagiario.primeiroNome);
estagiario.primeiroNome = 'Rene';
console.log("nome : " + estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map