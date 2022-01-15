/* 2- Dado um array de números, faça um programa que
teste se este arraycontém um valor específico.
Tanto o valor quanto o array serão valores de
entrada.
Exemplo de Entrada:
[1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
9
Exemplo de Saída:

O valor foi encontrado no Array. */

const numbers = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
let num = 9

function verific (array) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
        console.log("O valor foi encontrado no Array.");
        } 
    }
}
verific(numbers)