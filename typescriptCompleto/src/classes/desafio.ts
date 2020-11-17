//Classe basica
class Moto {
    constructor(public nome :string, public velocidade:number = 0){}

    public buzinar() : void{
        console.log('bibiii'); 
    }

    public acelerar(delta : number) :void {
        this.velocidade = this.velocidade + delta
    }

}
var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Herança
abstract class Objeto2D {
    constructor(protected base : number = 0, protected altura : number = 0){}
    abstract area():number
}

class Retangulo extends Objeto2D {
   
    public area() : number{
        return this.base * this.altura;
    }
}

const retangulo = new Retangulo(5, 7);
console.log(`Área do retangulo = ${retangulo.area()}`)

// Getters and Setters
class Estagiario {
    private _primeiroNome:string =''

    get primeiroNome() : string {
        return this._primeiroNome;
    }

    set primeiroNome(nome) {
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }
}
const estagiario = new Estagiario
console.log(`nome : ${estagiario.primeiroNome}`)
estagiario.primeiroNome = 'Re'
console.log(`nome : ${estagiario.primeiroNome}`)
estagiario.primeiroNome = 'Rene'
console.log(`nome : ${estagiario.primeiroNome}`)