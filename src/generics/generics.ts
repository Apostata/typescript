// Generics

//  Problema
    function echo (objeto: any){
        return objeto
    }

    console.log(echo('João').length) // returnará 4
    console.log(echo(27).length) // não possui .lenght, retornará undefined
    console.log(echo({ nome: 'João', idade: 27})) // retorna objeto todo

// usando generics
function echoGenerics <Generico> (objeto: Generico): Generico {
    return objeto
}

console.log(echoGenerics('João').length) 
console.log(echoGenerics<number>(27)) 
console.log(echoGenerics({ nome: 'João', idade: 27}).nome)

// Generics disponíveis na Api

const avaliacoes : Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes);


//Exemplo 2
function imprimir<Tipo>(args: Tipo[]){
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3]) //inferindo tipo
imprimir<number>([1, 2, 3]) // expecificando tipo
imprimir<string>(['eu','tu', 'ele'])

imprimir<{nome: string, idade: number}>(
    [
        {nome:'eu', idade: 1},
        {nome:'tu', idade: 2},
        {nome:'ele', idade: 3}
    ]
)

type Aluno = {nome: string, idade: number};

imprimir<Aluno>(
    [
        {nome:'eu2', idade: 1},
        {nome:'tu2', idade: 2},
        {nome:'ele2', idade: 3}
    ]
)

interface Professor {
    nome: string, 
    idade: number
};

imprimir<Professor>(
    [
        {nome:'eu3', idade: 1},
        {nome:'tu3', idade: 2},
        {nome:'ele3', idade: 3}
    ]
)

//Tipo genérico
const chamarEcho: <T>(data:T) => T = echoGenerics
console.log(chamarEcho<string>('alguma coisa'))


type Echo = <T2> (data: T2) => T2
const chamarEcho2: Echo = echoGenerics

console.log(chamarEcho2<string>('alguma coisa 2'))

// Generics com classes

    //classe sem genérics
    class OperacaoBinariaSemGenerics{
        constructor(public operando1: any, public operando2: any){}

        executar(){
            return this.operando1 + this.operando2;
        }
    }

    console.log(new OperacaoBinariaSemGenerics('Bom ', 'dia').executar())  // retorna 'Bom dia'
    console.log(new OperacaoBinariaSemGenerics(3, 7).executar())           // retorna 10
    console.log(new OperacaoBinariaSemGenerics(3, 'Oples').executar())     // retorna '3Oples'
    console.log(new OperacaoBinariaSemGenerics({}, {}).executar())         //retorna '[object Object][object Object]'


    // classe com genrérics
    abstract class OperacaoBinaria<Tipo, Retorno>{
        constructor(public operando1: Tipo, public operando2: Tipo){}
        abstract executar(): Retorno
    }
    
    class SomaBinaria extends OperacaoBinaria<number, number>{
        executar():number{
            return this.operando1 + this.operando2
        }
    }

    console.log(new SomaBinaria(3, 7).executar())   

    // Desafio direrenca entre datas

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



    // Desafio Classe Fila
    // Atributo: fila (Array)
    // Metodos: entrar, proximo, imprimir

    class Fila<T extends number | string>{ // constrains limitando o generics a number e string
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

    const populaFila: string[] | null = [];
    const fila = new Fila<string>(...populaFila)
    fila.entrar('nos')
    console.log(fila.proximo())
    fila.imprimir()
    console.log(fila.proximo())
    fila.imprimir()
    fila.entrar('vos')
    fila.imprimir()


// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

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
