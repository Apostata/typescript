// @logarClasseSe(false)
// @decorator('teste', 123)
// @decorator2({a:'teste', b:123})
// @decorator2({a:'teste2'})


// function logarClasse(contructor:Function){
//     console.log(contructor);
// }

// function decoratorVazio(_:Function){}

// function logarClasseSe(valor: boolean){
//     return valor? logarClasse : decoratorVazio
// }


// Decorator factorys
function decorator(a:string, b:number){
    return function(_:Function): void {
        console.log(`${a} ${b}`)
    }
}

function decorator2(obj :{a:string, b?:number }){
    obj.b = !obj.b? 0 : obj.b
    return function(_:Function): void {
        console.log(`${obj.a} ${obj.b}`)
    }
}



@logarObjeto
class Eletrodomestico{
    static count:number = 0;
    constructor(){
        Eletrodomestico.count++;
        console.log(`novo...Classe Pai`)
    }
}

type Construtor = { new (...args: any[]) : {} } //função mais genérica possível para gerar uma função contrutora

function ifDecorator(){ // decorator factory, loga a classe se numero = 1 ou nada se numero = 0
    const returnOrNot = Math.round(Math.random())  > 0
    return function(constructor: Construtor): void {
        if(returnOrNot) console.log(constructor)
    }
}

function logarObjeto(construtor: Construtor){ //retorna uma classe que herda de Eletrodoméstico
    console.log('carrega uma unica vez');
    return class extends construtor{
        static count:number = 0;
        constructor(...args: any[]){
            console.log('Antes de super')
            super(...args)
            console.log('depois de super')
            console.log(`novo...${Eletrodomestico.count}`)
        }
    }
}

// new Eletrodomestico();
// new Eletrodomestico();


// adicionando metodos a uma classe com decoretors

interface Eletronicos {
    imprimir?():void
}

@ifDecorator()
@imprimivel
class Eletronicos{
    constructor(){
        console.log(`novo eletronico...`)
    }
}

function imprimivel(construtor : Function){
    construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

const eletro = new Eletronicos()
eletro.imprimir && eletro.imprimir()


// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}



@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(construtor:T){ // não recebe especificamente do tipo construtor mas qualquer coisa que herde dele pois tem um metodo critico não existe no tipo Construtor
    return class extends construtor{
        constructor(...args: any[]){
           super(...args)
           if(!usuarioLogado || !usuarioLogado.admin){
               throw new Error('Este usuário não tem permissão para esta área')
           }
        }
    }
}


// decorator de metodo

class ContaCorrente{
    @naoNegativo
    private saldo: number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @readOnly
    sacar(@paramInfo valor:number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }
        return false
        // this.saldo -= valor
        // return true
    }

    @readOnly
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){
//     return this['saldo'] += 7000
// }

console.log(cc.getSaldo())

// decorator congelrar
function readOnly(alvo:any, nomeMetodo:string, descritor: PropertyDescriptor){
    // console.log(alvo, nomeMetodo)
    {
        alvo
        nomeMetodo
    }

    descritor.writable = false
}

// Decorator de atributo
// exlcuir propriedade e attribuir get e set
function naoNegativo(alvo: any, propriedade: string){
    console.log(alvo, propriedade)
    delete alvo[propriedade]
    Object.defineProperty(alvo, propriedade, {
        
        get: function(): any {
            return alvo[`_${propriedade}`]
        },

        set: function(valor: number) :void{
            if(valor < 0){
                throw new Error(`Saldo inválido: ${valor}! Saldo não pode ser negativo.`)
            } else {
                alvo[`_${propriedade}`] = valor
            }
        }
    })
}   

cc.sacar(6000)
console.log(cc.getSaldo())

function paramInfo(alvo:any, nomeMetodo: string, indiceparam: number){
    console.log(`Alvo: ${alvo}, Método: ${nomeMetodo}, inidce: ${indiceparam}`)
}