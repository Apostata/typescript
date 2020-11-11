//  let & const

    // exemplo hoisting => elevar, erguer, içar comportamento comun de var
        // console.log(seraQuePode)
        // var seraQuePode = '?'

    //será transformado em 
        // var seraQuePode;
        // console.log(seraQuePode)
        // seraQuePode = '?'

    // variaveis do tipo let não sofrem içamento ou hoisting, então
        // console.log(seraQuePode2)
        // let seraQuePode2 = '?'
    // irá gerar um erro 

    //o correto é:
    let seraQuePode = '?'
    console.log(seraQuePode);


    // let estaFrio = true;
    // if(estaFrio){
    //     var acao = 'Colocar casaco'
    // }
    // console.log(acao);

    // var só tem 2 escopos: ou global(se no browser)(global no arquivo, se no node) ou escopo de função

    // let estaFrio = true;
    // if(estaFrio){
    //     let acao = 'Colocar casaco'
    // }
    // console.log(acao);

    // erro pois let e const tem ecopo de bloco também, no caso o bloco de "if"
    let acao;
    let estaFrio = true;
    if(estaFrio){
        acao = 'Colocar casaco'
    }
    console.log(acao);

    //escopo de função de var
        // function escopoDeVar(){
        //     var segredo = 'meuEscopo'
        //     console.log(segredo);
        // }
        // console.log(segredo);
    // erro pois var var está no escopo da função e não existe fora dela"

        // var segredo = 'segredo em escopo global'
        // function revelarSegredo(){
        //     var segredo = 'meu segredo em escopo de função'
        //     console.log(segredo);
        // }
        // revelarSegredo()
        // console.log(segredo);
    // exemplo de shadowing, segredo delcarado dentro e fora da função, tem escopos distintos

        // for(var i = 0; i < 10; i++){
        //     console.log(i);
        // }
        // console.log(i); 
    //resultado será 10 pois var terá escopo global

        // for(let i = 0; i < 10; i++){
        //     console.log(i);
        // }
        // console.log(i);
    //erro, pois "i" não estará disponível fora de "for"


// Arrow functions
    //exemplo de função comum

    // function somar(n1:number, n2:number) : number {
    //     return n1 + n2;
    // }

    // console.log(somar(2, 2));


    //exemplo de arrow function
    const subtrair = (n1:number, n2:number): number => n1 - n2
    console.log(subtrair(2, 3));

    const showName = (name: string): void => console.log(`o nome passado é ${name}`);
    showName('Rene');

    // escopo de "this" com e sem arrow function
    // console.log(this, 'fora das funções');
    
    // const thisArrowFunction = ()=>{
    //     console.log(this, 'dentro da função arrow');
    // }
    // thisArrowFunction();


    // function thisNormal(){
    //     console.log(this, 'dentro da função normal ou com bind ou call');
    // }
    // thisNormal.call(this);
    // const outroNormal = this.thisNormal.bind(this)
    // outroNormal();



// parametro padrão
function contagemRegressiva(inicio : number = 5, final :number = inicio - 5) :void{
    while(inicio > final){
        console.log(`nº ${inicio}`)
        inicio--
    }
    console.log('Fim')
}

contagemRegressiva(10)

// Spread & Rest

const numbers : number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers))
//funciona como:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]))

const turmaA = ['joão', 'leo', 'diana'];
const turmaB = ['helena', 'rene', 'erica', ...turmaA];
console.log(turmaB);


function retornNums(...args: number[]){//rest
    return args;
};
function retornNums2(a : number, ...args: number[]): number[]{//rest
    console.log(a);
    return args;
};

console.log(retornNums(1,2,3,4,5)) 
//spread
console.log(retornNums(...numbers)) 
// console.log(retornNums2(...numbers))

// Destructuring

const item : {nome:string, valor:number, caracteristicas:{ voltagem:number}} = {
    nome: 'produto',
    valor: 12.00,
    caracteristicas :{
        voltagem: 110
    }
};

//só para lembrar que é possível dar um alias ao realizar o destructuring, //no caso 'n' é Alias de 'nome'
const {nome: n, valor, caracteristicas:{voltagem: v}} = item; 
console.log(`item ${n}, de preço R$ ${valor}, de voltagem ${v}`);

// Promises

//usando só callback
 function espera3s(callback: (dado:string) => void ) {
     setTimeout(()=>{
         callback('3s depois callback');
     }, 3000)
 }

function espera3s2() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('3s depois promise');
        }, 3000)
    })
}

espera3s(function(resultado: string){
    console.log(resultado);
})
espera3s2().then(dado=>{
    console.log(dado)
})

//promises

fetch('https://swapi.dev/api/peoples/1')
 .then(res=>res.json())
 .then(people=>people.films)
 .then(films=>fetch(films[0]))
 .then(film=>film.json())
 .then(filme=>console.log(filme.title))
 .catch(e=> console.error(e.message))