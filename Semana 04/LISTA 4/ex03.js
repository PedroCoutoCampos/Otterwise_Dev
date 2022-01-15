/* 
3 -  [REFATORAÇÃO]Dado um array de números, façaum programa que
imprima na tela somente os números positivos.OBS: Para melhorar a 
resolução desse problema, crie funções que tambémimprima os números 
negativos, os pares, os ímpares e realize a contagem de cada um deles.
Os valores de entrada serão:
Array;
Exemplo de Entrada:[1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]---------
--------[-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ] */

const numbers = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

function posNegParImpar(array) {
    const positivos = numbers.filter((number) => {
        return number >= 0
    } )
    const negativos = numbers.filter((number) => {
        return number < 0
    } )
    const pares = numbers.filter((number) => {
        return number % 2 === 0
    } )
    const impares = numbers.filter((number) => {
        return number % 2 !== 0
    } )
    console.log(`Positivos = ${positivos.join(", ")}`);
    console.log(`Negativos = ${negativos.join(", ")}`);
    console.log(`Pares = ${pares.join(", ")}`);
    console.log(`Ímpares = ${impares.join(", ")}`);
}
posNegParImpar(numbers)
