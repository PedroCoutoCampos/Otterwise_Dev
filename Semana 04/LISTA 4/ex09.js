/* 
9 - [REFATORAÇÃO]Dado a lista de compra a seguir,
faça um programa que imprime no console valor total. 
Atenção, o valor de cada item é unitário.
Exemplo de Entrada:
[{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}]
Exemplo de Saída: R$ 19.75 */

const frutas = [
  { nome: "maçã", quantidade: 2, valor: 0.5 },
  { nome: "alface", quantidade: 1, valor: 1.73 },
  { nome: "Água 5L", quantidade: 2, valor: 5.99 },
  { nome: "Pão Francês", quantidade: 8, valor: 0.63 },
];
const numSoma = [];
let soma = 0;
let valueUnd = 0;
for (let i = 0; i < frutas.length; i++) {
    valueUnd = frutas[i].valor
    numSoma.push(frutas[i].quantidade * frutas[i].valor);
};
soma = numSoma.reduce((soma, i) => {
    return soma + i;
});
console.log(soma);