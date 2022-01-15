/*
15 -Dado o array de objetos abaixo, faça um programaque calcule a médiaaritmética dos estudantes e imprima no console os nomes dos estudantes aprovados. 
A média de aprovação é 7.0.Os valores de entrada serão:Array de Objetos;
Exemplo de Entrada:
[
{nome: 'Marcos', notas: [10, 7, 2]},
{nome: 'Michele', notas: [10, 10, 10]},
{nome: 'Pedro', notas: [3, 10, 9]},
{nome: 'Andressa', notas: [6, 6, 8]},
{nome: 'Cristiana', notas: [7, 9, 2]}
]

Exemplo de Saída:
Michele 
Pedro
*/


const person =
    [
        {nome: 'Marcos', notas: [10, 7, 2]},
        {nome: 'Michele', notas: [10, 10, 10]},
        {nome: 'Pedro', notas: [3, 10, 9]},
        {nome: 'Andressa', notas: [6, 6, 8]},
        {nome: 'Cristiana', notas: [7, 9, 2]}
    ]
let valueMedia = 0;
let soma = 0;
let valueDiv = 0;
for (let i = 0; i < person.length; i++) {
    valueDiv = person[i].notas.length
    media = person[i].notas.reduce(function(media, i) {
        return media + i;
    });
    valueMedia = media / person[i].notas.length;
    if (valueMedia >= 7) {
        console.log(`${person[i].nome}, esta aprovado(a)`);
    } 
}
