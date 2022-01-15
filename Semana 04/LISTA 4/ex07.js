/* 7- Dado um array de entrada com o nome e as notas
de avaliações dos alunos,retorne uma lista com os 
alunos que tiraram 0 em todas as provas.
Exemplo de Entrada:
[{
    nome: ,
    notas: [ ]
] */

const historico = 
    [{name: "joao", nota: 0}, 
    {name: "gabriel", nota: 6}, 
    {name: "mari", nota: 0}, 
    {name: "miguel", nota: 10}]

const lista = historico.filter((historico) => historico.nota === 0) 
console.log(lista);
