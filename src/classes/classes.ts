// class Data{
//     //publicos por padrão
//     dia: number
//     public mes: number //não é necessário colocar o escopo publico, este é só para mostrar
//     ano: number

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


class Produto {
    constructor( public nome: string, public preco: number, public desconto: number = 0){}

    public resumo() : string {
        return `${this.nome} custa R$${this.calcDesconto()} (${this.desconto * 100}% de desconto)`
    }

    private calcDesconto(): number {
        return Math.round(this.preco * (1 - this.desconto) * 100) /100;
    }
}

const prod1 = new Produto('caneta bic', 3.43, 0.15);
// console.log(prod1);
console.log(prod1.resumo());
// const prod2 = new Produto('lapis de cor', 1.43, 0.13);
// console.log(prod2);
// console.log(prod2 instanceof Produto);

class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ){}

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        } 

        return this.velocidadeAtual
    }

    public acelerar(velocidade: number = 5):number{
        return this.alterarVelocidade(velocidade)
    }

    public frear(velocidade: number = -5):number{
        return this.alterarVelocidade(velocidade)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185);
// console.log(carro1.acelerar())
Array(40).fill('').forEach(()=>{console.log(carro1.acelerar())})
Array(40).fill('').forEach(()=>{console.log(carro1.frear())})

// erros de acesso, 
// "noEmitOnError": true,  

// carro1.velocidadeAtual = 300
// console.log(`atual -> ${carro1.velocidadeAtual}`)

// carro1.velocidadeMaxima = 300
// console.log(`maxima -> ${carro1.velocidadeMaxima}`)

// carro1.alterarVelocidade = 150
// console.log(`altera provado -> ${carro1.velocidadeAtual}`)

class Ferrari extends Carro{
    constructor( modelo:string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima) // chama construtor da classe pai
    }
    public acelerar(velocidade: number = 20):number{
        return this.alterarVelocidade(velocidade)
    }

    public frear(velocidade: number = -15):number{
        return this.alterarVelocidade(velocidade)
    }
}

const f40 =  new Ferrari('F40', 324);
console.log(f40.acelerar())
console.log(f40.frear())


class Pessoas {
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

const pessoa1 = new Pessoas
pessoa1.idade = 10
console.log(pessoa1)
pessoa1.idade = -3
console.log(pessoa1)

// Aributos e métodos estáticos

class Matematica{
    static PI: number = 3.1416

    static areaCirc(raio: number) : number{
        return Matematica.PI * raio * raio
    }
}

// const n1 = new Matematica
// n1.PI = 4.2
// console.log(n1.areaCirc(4))

// // const n2 = new Matematica
// // n1.PI = 4.2
// console.log(n2.areaCirc(4))
console.log(Matematica.areaCirc(4))

// Classes Abstratas

abstract class X{
    abstract metodoY(a:number):number
    abstract metodoZ(a:number):void
}

//console.log(new X)

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

// Singleton e construtor Privado

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

// Atributos somente leitura

class Aviao{
    constructor(public readonly modelo : string, public readonly prefixo : string){
        this.modelo = modelo;
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = "Teste"
// turboHelice.prefixo = 'oples'
console.log(turboHelice)