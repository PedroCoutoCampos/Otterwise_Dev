/* 
2. Levando em consideração o array abaixo, crie um programa
 que imprima na tela o valor total que o usuário terá que pagar.
[{name: “banana”, price: 4.5}, 
{name: “arroz”, price: 8.3}, 
{name: “feijão”, price: 10}, 
{name: “cebola”, price: 6.3}
] */

const numbers = [
    {name: "banana", price: 4.5}, 
    {name: "arroz", price: 8.3}, 
    {name: "feijão", price: 10}, 
    {name: "cebola", price: 6.3}
    ]

const sum = numbers.reduce((acc, num) => {
    return acc + num.price;
    }, 0);
    console.log(sum.toFixed(1));
    