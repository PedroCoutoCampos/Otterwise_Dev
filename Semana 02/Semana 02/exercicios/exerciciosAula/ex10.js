/*
10 -Dado um número, faça um algoritmo que imprime no console a soma de todos os números de 1 até o número escolhido. 
Ex: Ao ter como entrada o valor 5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).
Os valores de entrada serão:
Número;
Exemplo de Entrada:
10-----------------3
*/

const limit = 3
const numSoma = [];
let soma = 0;

for (let i = 1; i <= limit; i++) {
    numSoma.push(i);
    //soma = numSoma.reduce(i);
} 

soma = numSoma.reduce(function(soma, i) {
    return soma + i;
});

console.log(soma);

/*

console.log(numSoma[0] + numSoma[1] + numSoma[2] + numSoma[3] + numSoma[4] + numSoma[5] + numSoma[6] + numSoma[7] + numSoma[8] + numSoma[9]);
*/