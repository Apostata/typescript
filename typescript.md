# Typescript
instalar globalmente: `npm i -g typescript`;

## Configurando
criar arquivo de configuração na pasta do projeto: `tsc --init`

## Compilando em js
### Manualmente
executar o comando `tsc {nome_do_arquivo}`.
desta maneira o typescript irá gerar um js. 

### No VS code com codeRunner
instalar globalmente o `npm i -g ts-node`;
instalar o plugin do coderunner no vs code;
com o arquivo typescript aberto, basta pressionar `CTRL + ALT + N`.

### com html
live-server ou webpack

#### live-server
muito simples:
`live-server --port=8081` e `tsc -w` 

#### webpack
precisa dos modulos:
webpack, webpack-cli, webpack-dev-server e ts-loader opcional html-webpack-plugin

## Tipos
**Tipos inferidos**: que são deerminados no momento da atribuição, ou seja no momento que um valor é passado para a variável.
exemplo:

````
let nome = 'Rene'; //tipo string
nome = 43 // erro no typescript
````
automáticamente, a partir de agora, nome será do tipo string, mesmo que não tenha sido definido o tipo explicitamente.
se tentar passar um valor numérico agora para nome, por exemplo, o compilador do typescript vai acusar um erro. 

se uma variavel for delcarada mas não atribuida com um valor, e posteriormente adicionamos um valor a ela, não será inferido nenhum tipo a esta variavel. Funcionando como o javascript normal ou variavel do tipo `any` no typescript.

````
let variavel;
variavel = "nome";
variavel = 45
````

**Tipos explícitos**: a tipagem é passada no momento da declaração da variável, mesmo que esta não tenha sido atribuida com um valor.
exemplo:

````
let variavel : string;
variavel = "nome";
variavel = 45
````

### Arrays
da mesma for que as variaveis,a tipagem pode ser inferida ou explícita.

````
let hobbies = ['teste'];
//hobbies[1] = 34 // erro pois foi inferido que a variavel é um array do tipo string;

let newHobbies = [34, 'este'];
//newHobbies[2] = true; //erro pois foi inferido que a variavel é do tipo string ou numero

let hobbies1: any[] = [34, 'este'];
hobbies1[2] = true; //não gera erro pois a variavel é explicitamente do tipo any
````
### Tupla
São arrays com tipos e ordem pré-definidos:

````
// Array normal
let hobbies2 = [34, 'este', 23];
hobbies2[2] = 54; 

// Tupla
let hobbies3: [number, string, number] = [34, 'este', 23];
// hobbies3[2] = 'oples'; //erro pois explicitamente a 3 posição do array é um numero
// hobbies3[3] = 45; //erro pois explicitamente o array tem apenas 3 posições
````

### Enum

Gera uma lista numérica onde o indice é a string. Gera valores automáticos em ordem crescente para cada item. É possível também alterar estes valores e até mesmo ter duplicidade, porém não nos indices.

````
enum RGB {
    Vermelho,
    Verde,
    Azul,
};
console.log(RGB)
````
a saida será: 
{
    0: "Vermelho",
    1: "Verde",
    2: "Azul"
}

````
let indiceCor = RGB.Azul;
console.log(indiceCor); // sistema irá mostrar 2 numérico, que é o valor de Azul no Enum RGB. 
````

É possível também modificar o valor do indice:
````
enum RGB2 {
    Vermelho,
    Verde = 52,
    Azul,
};
console.log(RGB2)
````
a saida será: 
{
    0: "Vermelho",
    52: "Verde",
    53: "Azul"
}

````
let indiceCor2 = RGB2.Azul;
console.log(indiceCor2); // sistema irá mostrar 52 numérico, que é o valor de Azul no Enum RGB2. 
````

não gerará erro:
````
enum RGB2 {
    Vermelho,
    Verde = 52,
    Azul,
    Roxo = 52
};
console.log(RGB2)
````

gera erro, pois o indice 'Vermelho fui duplicado':
````
enum RGB2 {
    Vermelho,
    Verde = 52,
    Azul,
    Vermelho = 52
};
console.log(RGB2)
````

### Funções
Funções também recebem tipos para retornarem,e possuem o tipo especial `void`, para caso não retornem nada.
Também é bom passar os tipos dos argumentos passados para a função:

````
function teste() :string {
    const res = 'oi';
    //const res = 43; //erro pois a função teste retorna string
    return res;
}
console.log(`function ${teste()}`)

function teste2() :void {
    const res = 'oi';
    //return res; // erro pois a função do tipo void não retorna nada
}
console.log(`function ${teste2()}`)

function multiply(num1:number, num2:number) :number {
  
    return num1 * num2;
}
console.log(`function multiply ${multiply(2, 2.5)}`)

````

**Arrow functions, mesmo que tenham apenas um parametro, precisam de "()", para evitar o tipo any implícito**
exemplo:
````
    const showName = (name: string): void => console.log(`o nome passado é ${name}`);
    const showName = name => console.log(`o nome passado é ${name}`); // irá dar erro que name tem o tipo any implícito
````


#### Tipando variavel como funções com assinaturas
é possivel atribuir uma função a uma variavel, porém também é possivel definir uma assinatura de como essa função precisa ser;

````
function sayHello(say:string = 'oi') : void{
    console.log(say)
};

let funcao : (arg1:number, arg2:number) => number;

//funcao = sayHello; // Erro pois a variavel não aceitará uma função que retorne void e que tenha 1 argumento 
// do tipo string, seria necessário 2 argumentos, ambos do tipo number.

funcao = multiply;
console.log(`tipando variavel com tipo função: ${funcao(2, 5.5)}`)
````

#### Parametros padrões
É possível passar parametros padrões para uma função e usar um relativo ao outro caso estejam na ordem certa

````
function contagemRegressiva(inicio : number = 5, final :number = inicio - 5) :void{
    while(inicio > final){
        console.log(`nº ${inicio}`)
        inicio--
    }
    console.log('Fim')
}

contagemRegressiva(10)
````

### Objetos
da mesma for que as variaveis,a tipagem pode ser inferida ou explícita.
Objetos também precisam de tipos para seus atributos, porém a ordem não importa.

````
let usuario = { //tipagem inferida
    nome: 'Rene',
    idade: 35
};

// usuario = { // Erro pois name e age não existem no tipo da variavel usuario {nome:string, idade:number}
// pois as chaves name e age não existem
//     name: 'Rene',
//     age: 35
// }

//usuario.teste = 'esf' //erro pois teste não existe no tipo da variavel usuário
let user : {name:string, age:number} = { // tipagem explícita
    name: 'Rene',
    age: 35
};
console.log(user);
 user = { 
    age: 3,
    name: 'Helena'
};
console.log(user);

let funcionario : {
    supervisores: string[], 
    baterPonto: (horas:number) => string
} = {
    supervisores:['um', 'dois', 'tres'],
    baterPonto: function (horario) {
        return horario <= 8? 'Ponto normal' : 'Fora do horário'; 
    }
};
console.log(funcionario, funcionario.baterPonto(9), funcionario.baterPonto(7))
//funcionario.baterPonto('d') // erro pois o atributo barterPonto, é uma função que recebe numerico

````

### Criando tipo personalizado (Alias)

É possivel criar um tipo para reutiliza-lo onde quiser. usando o exemplo acima, se eu quiser definir mais de um usuário, teria de replicar o tipo, então seria melhor:

````
type Funcionario = {
    supervisores: string[], 
    baterPonto: (horas:number) => string
}

let rene: Funcionario = {
    supervisores:['um', 'dois', 'tres'],
    baterPonto: function (horario) {
        return horario <= 8? 'Ponto normal' : 'Fora do horário'; 
    }
};

let erica: Funcionario = {
    supervisores:['quatro', 'dois', 'um'],
    baterPonto: function (horario) {
        return horario <= 8? 'Ponto normal' : 'Fora do horário'; 
    }
};
````

## Never
é um tipo para funções, que diz se ela ou retorna um erro ou se nunca termina.

````
function falha(string): never {
    throw new Error('erro');
}

//ou

function infinita() : never{
    wilhe(true){
        ...
    }
}
````

## Union Types
É juntar mais de um tipo, Exemplo, se eu gostaria que a variavel nota aceitasse Number e String, mas não aceitasse mais nada, não poderiamos definir como tipo any, pois any aceita qualquer coisa.

````
let nota: string | number = 9.5;
console.log(`nota aceita number: nota ${typeof nota} - valor ${nota}`);
nota = '8.0';
console.log(`e aceita string: nota ${typeof nota} - valor ${nota}`);
````

## Null
Por padrão, o typescript não deixa que nenhuma variavel tenha o tipo null apenas. Porém usando o Union Types, podemos dizer que ela é por exemplo, numérica e aceita nulo.
````
var numero : number | null;
numero = 0;
numero = null
````

## Classes
Podemos no typescript declarar typos nos atributos da classe  sem attribuir valores a elas.

````
class Produto{
    nome: string
    preco: number
    desconto: number

    cosntructor(nome: string, preco: number, desconto: number = 0){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}
````
Os Modificadores de acessos dos atributos por padrão são public, não sendo necessário especifica-los como abaixo

````
class Produto{
    public nome: string
    public preco: number
    public desconto: number

    ...
}
````

porém para facilitar o código, podemos declarar os atributos com seus modificador de acesso direto no construtor, evitando assim a necessidade de attributir this.atributo = atributo, exempo:

````
class Produto{
    cosntructor( public nome: string, public preco: number, public desconto: number = 0){}
}
````

desta forma o typescript entende que por exemplo this.nome =  nome, sem necessidade de faze-lo explicitamente

Public: visivel para a classe, para seus filhos e fora dela
Protected: visivel para a classe e seus filhos mas não fora deles
Private: visivel somente na classe mas não para seus filhos ou fora deles

### Getters & Setters

são metodos opcionais para alterar o comportamento de um atributo ao ser setado ou chamado(get)
Exemplo:

````
class Pessoa {
    private _idade: number = 0
    get idade(): number{
        return this._idade
    }

    set idade(valor:number){
        if(valor>=0 && valor<=120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1) //{idade:10}
pessoa1.idade = -3
console.log(pessoa1) // {idade:10}
````
Ambos terão a mesma saida pois ao tentar setar -3 para idade, o metodo get idade(), valida se o seu valor for menor que 0 ou maior que 120

### Atributos e metodos estáticos
Pertencem a classe e não a instância

### classes abstratas
Não podem ser instanciadas e seus metodos abstratos precisam ser declarados caso uma classe concreta extenda dela

````
abstract class Calculo{
    protected resultado: number = 0

    abstract executar (...numeros: number[]): void
    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo{
    executar (...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t +a)
    }
}

class Multiplicacao extends Calculo{
    executar (...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}


let c1 = new Soma
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())
````

### Singleton e Construtor Privado
usado quando precisamos de apenas uma instancia e ainda assim ter os metodos herdados, ou controlar a instancia

````
class Unico {
    private static instance = new Unico
    private constructor() {
        
    }
    static getInstance() : Unico{
        return Unico.instance
    }

    agora(){
        return new Date()
    }
}

// const errado = new Unico
console.log(Unico.getInstance().agora())
````

## namespaces
Para garatir que não conflita as variaveis ou funções em escopo global

````
namespace Areas {
    const PI = 3.14

    export function circunferencia(raio:number) : number {
        return PI * Math.pow(raio, 2)
    }

    export function retangulo(base:number, altura:number) : number {
        return base * altura
    }
}

const PI = 2.99;
console.log(Areas.circunferencia(10))
console.log(Areas.retangulo(10, 20))
console.log(PI)
````

### Namespace Aninhados
no commando do typscript para rodar via "tsc -w --outdir" funciona mas não para webpack
e não funciona para o modulos

## Interfaces
Um contrato de como deve ser um objeto ou classe

### Interfaces vs Abstract Class
Quando criada uma classe a partir de uma interface, é nessessário definir todos seus atributos ou metodos enquanto que na classe abstrata, você poder herda-los, sem a necessidade de definir novamente na classe filha

### Interface vs types
São bem similares porém tipos não podem ser mudados depois de sua criação enquanto que interfaces podem

exemplo:
Adicionando campos na interface:
````
interface Window {
  title: string
}

interface Window {
  ts: import("typescript")
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
````
Adicionando campos no tipo:
````
type Window = {
  title: string
}

type Window = {
  ts: import("typescript")
}

// Error: Duplicate identifier 'Window'.
````

**Porém ambos são extensíveis**
Extendendo interface:
````
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
````

Extendendo types:
````
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: Boolean 
}

const bear = getBear();
bear.name;
bear.honey;
````

### Extendendo Objeto com interface

ao usar o prototype o typescript verá que o Object não possui .log() portanto dará erro de compilação,
portém basta criar uma interface para Object com o contrato do metodo log:

````
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
````

**OBS: interfaces não são compiladas em js, só servem para checagem em desenvolvimento**

## Generics
Aceitam qualquer tipo, porém tem que ser especificado, como exemplo a função abaixo "echoGenerics"
A construção foi genérica, permitindo qualquer tipo, porém deve ser especificano na implementação

````
// sem generics
 function echo (objeto: any){
        return objeto
    }

    console.log(echo('João').length) // returnará 4
    console.log(echo(27).length) // não possui .lenght, retornará undefined
    console.log(echo({ nome: 'João', idade: 27})) // retorna objeto todo

// usando generics

// o resultado será igual porém dará erro de compilação caso você use como acima, forçando você a passar ///um tipo correto, ou seja, se o tipo number não tem length o typescript irá acusar um erro

function echoGenerics <Generico> (objeto: Generico): Generico {
    return objeto
}

console.log(echoGenerics('João').length) 
console.log(echoGenerics<number>(27)) 
console.log(echoGenerics({ nome: 'João', idade: 27}).nome)
````
### Classes com generics
````
// classe usando generics

abstract class OperacaoBinaria<Tipo, Retorno>{
    constructor(public operando1: Tipo, public operando2: Tipo){}
    abstract executar(): Retorno
}

// exemplo de uso 1
class SomaBinaria extends OperacaoBinaria<number, number>{
    executar():number{
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 7).executar())   

// exemplo de uso 2

class Data{
    constructor(public dia: number = 1, public mes: number = 1,public ano: number = 1970){}
}

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data) : number {
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar() : string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diferenca = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca/dia)} dia(s)`
    }
}

const d1 = new Data(8, 8, 2020)
const d2 = new Data(5, 2, 2020)

console.log(new DiferencaEntreDatas(d1, d2).executar()) 
````
### Constrains (restrições do generics)

você pode restringir quais tipo pode ser passados para o genérics,
exemplo abaixo definimos que a classe fila aceita um generics porém restrito apenas a number ou string

````
class Fila<T extends number | string>{
        private fila :Array<T>

        constructor(...args: T[]){
            this.fila = args
        }

        entrar(elemento: T): void{
            this.fila.push(elemento)
        }

        proximo(): T | string{
            if(this.fila.length > 0){
                const primeiro = this.fila[0]
                this.fila.splice(0, 1)
                return primeiro
            }
           
            return 'Não há ninguem na fila'
        }

        imprimir() :void{
            console.log(`Total na fila: ${this.fila.length}`)
            console.log(this.fila)
        }
    } 
````
### Nested Generics

````
type Par<C, V> = { chave: C, valor: V};

class Mapa<Chave, Valor> {
    private items : Array<Par<Chave, Valor>> = new Array<Par<Chave, Valor>>()

    obter(chave: Chave): Par<Chave, Valor> | null{
        return this.items.filter(ele=>ele.chave === chave)[0] || null
    }

    colocar(item: Par<Chave,Valor>): void{
        const foundItem = this.obter(item.chave)
        foundItem ? foundItem.valor = item.valor : this.items.push(item)
    }

    limpar(): void{
        this.items = new Array<Par<Chave, Valor>>()
    }

    imprimir(): void{
        console.log(this.items)
    }
}

 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
````

## Decorators
Decorator é uma função que adiciona funcionalidade a um elemento, chamado sempre que a classe é carregada, não quando suas instancias são declardas

````
@logarClasse
class Eletrodomestico{
    static count:number = 0;
    constructor(){
        Eletrodomestico.count++;
        console.log(`novo...${Eletrodomestico.count}`)
        
    }
}


function logarClasse(contructor:Function){
    console.log(contructor);
}

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()
````

### Decorator factory
Realiza uma serie de operações antes de aplicar o decorator

````
@ifDecorator()
class Eletrodomestico{
    static count:number = 0;
    constructor(){
        Eletrodomestico.count++;
        console.log(`novo...${Eletrodomestico.count}`)
        
    }
}

function ifDecorator(){ // decorator factory, loga a classe se numero = 1 ou nada se numero = 0
    const returnOrNot = Math.round(Math.random())  > 0
    return function(constructor:Function): void {
        if(returnOrNot) console.log(constructor)
    }
}

````

### Alterando construtor de classe com Decorator
Você pode extender e alterar a funcionalidade do construtor de uma classe com decorator, extendendo para uma classe anonima:
````
@logarObjeto
class Eletrodomestico{
    static count:number = 0;
    constructor(){
        Eletrodomestico.count++;
        console.log(`novo...Classe Pai`)
    }
}

type Construtor = { new (...args: any[]) : {} } //função mais genérica possível para gerar uma função contrutora

function logarObjeto(construtor: Construtor){ //retorna uma classe que herda de Eletrodoméstico
    console.log('carrega uma unica vez');
    return class extends construtor{
        static count:number =0;
        constructor(...args: any[]){
            console.log('Antes de super')
            super(...args)
            console.log('depois de super')
            console.log(`novo...${Eletrodomestico.count}`)
        }
    }
}

new Eletrodomestico();
new Eletrodomestico();
````

### Adicionando metodo a uma classe com Decorator
Necessário criar uma interface para que possa ser validadado o tipo da classe antes, assim não dará erros de compilação

````
interface Eletronicos {
    imprimir?():void
}

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
````

### Multiplos Decorators
````
interface Eletronicos {
    imprimir?():void
}

type Construtor = { new (...args: any[]) : {} } //função mais genérica possível para gerar uma função contrutora

function ifDecorator(){ // decorator factory, loga a classe se numero = 1 ou nada se numero = 0
    const returnOrNot = Math.round(Math.random())  > 0
    return function(constructor: Construtor): void {
        if(returnOrNot) console.log(constructor)
    }
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
````

### Alterando construtor da classe com decorator classe que tenha um metodo extra do tipo
Usamos a interface "Construtor" para definiir o tipo que será passado para o Decorator, como nos exercícios anteriores, porém esta interface não contem o metodo "critico" então é necessário
passar um generics para o decorator "perfilAdmin" que extenda deste construtor

````
type Construtor = { new (...args: any[]) : {} } //função mais genérica possível para gerar uma função contrutora

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

// não recebe especificamente do tipo construtor mas qualquer coisa que herde dele pois tem um metodo 
//critico não existe no tipo Construtor

function perfilAdmin<T extends Construtor>(construtor:T){ 
    return class extends construtor{
        constructor(...args: any[]){
           super(...args)
           if(!usuarioLogado || !usuarioLogado.admin){
               throw new Error('Este usuário não tem permissão para esta área')
           }
        }
    }
}
````
### Decorators de metodos

````
class ContaCorrente{
    private saldo: number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @readOnly
    sacar(valor:number){
        if(valor <= this.saldo){
            this.saldo -= valor
            return true
        }
        return false
    }

    @readOnly
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function(){  //não irá mais funcionar pois agora o metodo getSaldo é readOnly
//     return this['saldo'] += 7000
// }

console.log(cc.getSaldo())

// decorator congelrar
function readOnly(alvo:any, nomeMetodo:string, descritor: PropertyDescriptor){
    console.log(alvo, nomeMetodo)
    descritor.writable = false
}
````

### Decorators de atributo
````

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

class ContaCorrente{
    @naoNegativo
    private saldo: number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @readOnly
    sacar(valor:number){
       ...
    }

    @readOnly
    getSaldo(){
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())
console.log(cc.getSaldo())
cc.sacar(6000) // erro pois o saldo ficará negativo
console.log(cc.getSaldo())
````

### Decorator de parâmetro (de metodos ou funções)

````
function paramInfo(alvo:any, nomeMetodo: string, indiceparam: number){
    console.log(`Alvo: ${alvo}, Método: ${nomeMetodo}, inidce: ${indiceparam}`)
}

class ContaCorrente{
    @naoNegativo
    private saldo: number

    constructor(saldo:number){
        this.saldo = saldo
    }

    @readOnly
    sacar(@paramInfo valor:number){
       ...
    }

    @readOnly
    getSaldo(){
        return this.saldo
    }
}
````