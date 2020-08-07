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

se uma variavel for delcarada mas não inicializada com um valor, e posteriormente adicionamos um valor a ela, não será inferido nenhum tipo a esta variavel. Funcionando como o javascript normal ou variavel do tipo `any` no typescript.

````
let variavel;
variavel = "nome";
variavel = 45
````

**Tipos explícitos**: a tipagem é passada no momento da declaração da variável, mesmo que esta não tenha sido inicializada com um valor.
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
