/* 10- Escreva um programa para encontrar os elementos 
comuns entre dois arrays
Exemplo de Entrada:[1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
                    [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]
Exemplo de Saída:[22, -19, 13] */

const numbersOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
const numbersTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]

const todos = numbersOne.concat(numbersTwo);
function repetidos(array) {
const rep = array.filter((a, b) => array.indexOf(a) !== b)
console.log(rep);
}
repetidos(todos)




