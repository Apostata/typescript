let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos;
//let nome = teste; variavel já declarada no arquivo tipos.ts
console.log(canal);

function saudar(isMorning: boolean, number: number) : string{
    let saudation: string = 'Boa Vida!';
    // let unused = 1;
    if(isMorning){
        saudation = 'Bom dia!'+ number;
    }

    return  saudation;
}