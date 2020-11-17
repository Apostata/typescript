"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function saudarPessoa(pessoa) {
    console.log('Olá', __assign({}, pessoa));
}
function mudarNome(pessoa) {
    pessoa.name = 'joana';
}
var pessoa = {
    name: 'joao',
    saudar: function (sobrenome) {
        console.log("ol\u00E1 menu nome \u00E9 " + this.name + " " + sobrenome);
    }
};
var novaPessoa = {
    name: 'teste',
    idade: 23,
    peso: 78
};
saudarPessoa(pessoa);
mudarNome(pessoa);
saudarPessoa(pessoa);
// saudarPessoa({name:'jonas', idade:28, altura:1.62 })
// saudarPessoa(novaPessoa)
pessoa.saudar('teste');
var Cliente = /** @class */ (function () {
    function Cliente(name, lstBuy) {
        if (lstBuy === void 0) { lstBuy = new Date(); }
        this.name = name;
        this.lstBuy = lstBuy;
    }
    Cliente.prototype.saudar = function (sobrenome) {
        this.name = this.name + " " + sobrenome;
        console.log("Nome: " + this.name);
    };
    return Cliente;
}());
var cliente = new Cliente('Joseph');
saudarPessoa(cliente);
cliente.saudar('Curisco');
//# sourceMappingURL=interfaces.js.map