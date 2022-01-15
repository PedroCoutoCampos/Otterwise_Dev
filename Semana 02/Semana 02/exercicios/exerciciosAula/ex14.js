/*
14- Dado um array de números, faça um programa queencontre o menorelemento deste array e sua posição. Mostre as informações encontradas noconsole.
Exemplo de Entrada:[1,2,3,4,-5,6,7,8,9,10]
Exemplo de Saída: Menor valor: -5 Posição: 4


*/

const num = [1,2,3,4,-5,6,7,8,9,10]
let pos = 0;
let menor = 0;
for (let i = 0; i < num.length; i++) {
    menor = Math.min.apply(null, num);
} 
    console.log("O menor é" + " " + menor);
    console.log("Sua posição é " + num.indexOf(menor));