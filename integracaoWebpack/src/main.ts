import $ from 'jquery'
import Livro from './modelos/Livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)
console.log(livro.precoComDesconto())

const body = $('body');

body.append(`<h1>Nome: ${livro.nome}</h1>`)
body.append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`)
