/* 12 - REFATORAÇÃO O dono de uma livraria resolveu que precisava de novas
funcionalidades no seu sistema de livros e para isso ele contratou um
programador. Conversando com o programador e entendendo as necessidades
que o dono da livraria precisava, eles chegaram nas seguintes 
funcionalidades:
●Autor do livro mais vendido;
●Filtrar livros que tem um preço abaixo do valor que será inserido;
●Filtrar livros que tem um preço acima do valor que será inserido;
●Pesquisa pelo nome do livro;
●Pesquisa pelo autor do livro;
●Pesquisa pelo código do livro;
●Lista do Estoque;
●Top X livros mais vendidos 
(X será um valor inserido como entrada);
●Aumento de X % no preço dos livros (X será um valor inserido comoentrada).
Tendo por base as funcionalidades acima e como entrada um um array de
objetos, faça um programa que resolva o problema do dono da livraria.
Exemplo de Entrada */

const livros = [
{cod: "8568014003",
nome: "mais esperto que o diabo",
autor: "Napoleon Hill",
valor: 24.6,
quantidadeVendido: 17675,},
{cod: "8550801488",
nome: "pai rico, pai pobre",
autor: "Robert T. Kiyosaki",
valor: 42.71,
quantidadeVendido: 8992,},
{cod: "8547001085",
nome: "antifragil",
autor: "Nassim Nicholas Taleb",
valor: 70.99,
quantidadeVendido: 1700,},
{cod: "8595080801",
nome: "o investidor inteligente",
autor: "Benjamin Graham",
valor: 36.3,
quantidadeVendido: 8445, },
{ cod: "8539004119",
nome: "o poder do hábito",
autor: "Charles Duhigg",
valor: 48.9,
quantidadeVendido: 14581, },
{ cod: "8543102146",
nome: "essencialismo",
autor: "Greg Mckeown",
valor: 36.43,
quantidadeVendido: 9730, },
{ cod: "9788539003839",
nome: "rápido e devagar",
autor: "Daniel Kahneman",
valor: 50.93,
quantidadeVendido: 5703, },
{ cod: "8551003429",
nome: "princípios",
autor: "Ray Dalio",
valor: 89.9,
quantidadeVendido: 3707, },
{ cod: "855717358X",
nome: "gestão de alta performance",
autor: "Andrew S. Grove",
valor: 34.94,
quantidadeVendido: 442, },
{ cod: "8550805246",
nome: "empresas feitas para vencer",
autor: "Jim Collins",
valor: 44.2,
quantidadeVendido: 824, },
{ cod: "855080455X",
nome: "avalie o que importa",
autor: "John Doerr",
valor: 40.9,
quantidadeVendido: 797, }];

function maisVendido(array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].quantidadeVendido > array[j].quantidadeVendido) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(`O mais vendido é "${array[0].nome}" do autor ${array[0].autor}`);
}
//maisVendido(livros) 
function filtroPreçoMenos(array) {
    let preco = 25
    console.log(`O que temos aqui abaixo de R$ ${preco} são:`)
    for (let i = 0; i < array.length; i++) {
        if (array[i].valor < preco) {
        console.log(array[i]);
        }
    }
}
//filtroPreçoMenos(livros)
function filtroPreçoMais(array) {
    let preco = 25
    console.log(`O que temos aqui acima de R$ ${preco} são:`)
    for (let i = 0; i < array.length; i++) {
        if (array[i].valor > preco) {
        console.log(array[i]);
        }
    }
}
//filtroPreçoMais(livros)
function filtroNome(array) {
    let nome = "antifragil"
    for (let i = 0; i < array.length; i++) {
        if (array[i].nome === nome) {
        console.log(array[i]);
        }
    }
}
//filtroNome(livros)
function filtroAutor(array) {
    let autor = "Ray Dalio"
    for (let i = 0; i < array.length; i++) {
        if (array[i].autor === autor) {
        console.log(array[i]);
        }
    }
}
//filtroAutor(livros)
function filtroCodigo(array) {
    let cod = "8568014003"
    for (let i = 0; i < array.length; i++) {
        if (array[i].cod === cod) {
        console.log(array[i]);
        }
    }
}
//filtroCodigo(livros)
function filtroEstoque(array) {
    console.log(`Esses são os que ainda temos:`)
    for (let i = 0; i < array.length; i++) {
        console.log(`Nome: ${array[i].nome} ---- Codigo é: ${array[i].cod}`);
    }
}
//filtroEstoque(livros)
function topVendidos(array) {
    let temp
    let mais
    let maisVendidos = 2
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].quantidadeVendido > array[j].quantidadeVendido) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
}
//topVendidos(livros) nao esta pronto