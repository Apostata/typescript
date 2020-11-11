interface Humano {
    name: string,
    idade?: number,
    [prop:string]: any // atributo dinâmico
    saudar(sobrenome:string):void //pode ser opcional também: saudar?(sobrenome:string):void
}

type Pessoa ={
    name: string,
    idade?:number,
    [prop:string]: any
    
}

function saudarPessoa(pessoa: Humano){
    console.log('Olá', {...pessoa})
}

function mudarNome(pessoa : Humano){
    pessoa.name = 'joana'
}

const pessoa: Humano = {
    name: 'joao',
    saudar(sobrenome : string) : void{
        console.log(`olá menu nome é ${this.name} ${sobrenome}`)
    }
}

const novaPessoa : Pessoa ={
    name:'teste',
    idade: 23,
    peso: 78
}

saudarPessoa(pessoa)
mudarNome(pessoa)
saudarPessoa(pessoa)
// saudarPessoa({name:'jonas', idade:28, altura:1.62 })
// saudarPessoa(novaPessoa)
pessoa.saudar('teste');


class Cliente implements Humano{
    constructor(public name : string, public lstBuy: Date = new Date()){}
    saudar(sobrenome:string){
        this.name = `${this.name} ${sobrenome}`
        console.log(`Nome: ${this.name}`)
    }
}

const cliente = new Cliente('Joseph');
saudarPessoa(cliente)
cliente.saudar('Curisco')


// Interface função

interface FuncaoCalculo {
    (a: number, b: number) : number
}

let potencia : FuncaoCalculo = function (base: number, exp: number) : number {
    return base ** exp
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)

//Herança em interfaces
interface A {
    a() : void
}

interface B {
    b() : void
}

interface ABC extends A, B {
    c() : void
}

class RealA implements A {
    a() : void {}
}

class RealAB implements A,B {
    a() : void {}
    b() : void {}
}

class RealABC implements ABC {
    a() : void {}
    b() : void {}
    c() : void {}
}

function test(b: B) { //recebe paramatro do tipo B
    console.log(b)
}

test(new RealABC) //funciona pq RealABC também é do tipo B

abstract class AbstrataABD implements A, B { //typescript obriga implementação das funções mesmo sendo uma classe abstrata
    a(): void {}
    b(): void{}
    abstract d(): void
}

// Interface para extender objetos
const x = 2
const y = 3
const z = 4

console.log(x)
console.log(y)
console.log(z)

    // adicionando função log pelo js, mas não funciona no typescript
        Object.prototype.log = function() {
            console.log(this.toString())
        }
       
    // para funcionar, basta criar uma interface de object explicitando que object possui o metodo log
    interface Object {
        log() : void
    }

    const cli = {nome:'Pedro', toString(){ return this.nome }} //sobrescreve toString para retornar this.nome
    cli.log();
    x.log()
    y.log()
    z.log()