let nome = 'Rene'; //inferido do tipo string
console.log(nome);
//nome = 34; // erro, pois nome é do tipo string agora;


let generic; //desta maneira a variavel aceita qualquer tipo, pois não foi enferido em sua declaração
generic = 34;
console.log(generic);
generic = 'teste';
console.log(generic);


let variavel : string;
variavel = "nome";
//variavel = 45 // erro pois a variavel foi declarada como tipo string explicitamente

///Arrays

let hobbies = ['teste'];
//hobbies[1] = 34 // erro pois foi inferido que a variavel é um array do tipo string;

let newHobbies = [34, 'este'];
//newHobbies[2] = true; //erro pois foi inferido que a variavel é do tipo string ou numero

let hobbies1: any[] = [34, 'este'];
hobbies1[2] = true; //não gera erro pois a variavel é explicitamente do tipo any

//Tupla
    // Array normal
    let hobbies2 = [34, 'este', 23];
    hobbies2[2] = 54; 

    // Tupla
    let hobbies3: [number, string, number] = [34, 'este', 23];
    // hobbies3[2] = 'oples'; //erro pois explicitamente a 3 posição do array é um numero
    // hobbies3[3] = 45; //erro pois explicitamente o array tem apenas 3 posições

// Enum

enum RGB{
    Vermelho,
    Verde,
    Azul,
};
console.log(RGB);

let indiceCor = RGB.Azul;
console.log(indiceCor);

enum RGB2 {
    Vermelho,
    Verde = 52,
    Azul,
};
console.log(RGB2);


// Funções
function teste() :string {
    const res = 'oi';
    // const res2 = 43;
    return res;
}
console.log(`function ${teste()}`)


function multiply(num1:number, num2:number) :number {
  
    return num1 * num2;
}
console.log(`function multiply ${multiply(2, 2.5)}`)


function sayHello(say:string = 'oi') : void{
    console.log(say)
}

let funcao : (arg1:number, arg2:number) => number;
//funcao = sayHello;
funcao = multiply;
console.log(`tipando variavel com tipo função: ${funcao(2, 5.5)}`);


//Objetos

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


// Desafio 1

let funcionario : {
    supervisores: string[], 
    baterPonto: (horas:number) => string
} = {
    supervisores:['um', 'dois', 'tres'],
    baterPonto: function (horario) {
        return horario <= 8? 'Ponto normal' : 'Fora do horário'; 
    }
};
console.log(funcionario)
console.log(funcionario.baterPonto(9)); 
console.log(funcionario.baterPonto(7));
//funcionario.baterPonto('d') // erro pois o atributo barterPonto, é uma função que recebe numerico

//never
function falha(string: string): never {
    throw new Error(string);
}
// falha('oples');

//ou

function infinita() : never{
    let i=0;
    while(true){
        i++;
        console.log(i)
    }
}
//infinita()


//union types
let nota: string | number = 9.5;
console.log(`nota aceita number: nota ${typeof nota} - valor ${nota}`);
nota = '8.0';
console.log(`e aceita string: nota ${typeof nota} - valor ${nota}`);
