/*
11 -Crie um algoritmo que tem como entrada um array de notas, e imprime no console a média aritmética dessas notas.
Exemplo Entrada:[6, 8, 7]
Exemplo Saída:7

*/

const notas = [6, 8, 7];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(soma / notas.length);