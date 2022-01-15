/* 
4-[REFATORAÇÃO]Crie um algoritmo que tem como
entrada um array de notas,e imprime no console a 
média aritmética dessas notas.OBS: Para melhorar a 
resolução desse problema, monte um programa queretor
na a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7] */

const notas = [6, 8, 7]

const sum = notas.reduce((acc, num) => {
    return acc + num;
}, 0);

let media = sum / notas.length

console.log(`Média dos valores é ${media.toFixed(1)}`);