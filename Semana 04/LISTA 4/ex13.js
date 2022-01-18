/* 13-[REFATORAÇÃO]Em uma empresa de tecnologia aárea de Recursos
Humanos precisava organizar algumas informações a respeito dos funcionários.
Para que isso fosse possível, ele precisava criar um programa que entregas
se alista de funcionalidades abaixo.Tendo como entrada um array de objetos 
crie funções que realizam as seguintes operações:
●Ordena o Array em ordem crescente por idade;
●Ordena o Array em ordem decrescente por idade;
●Ordena o Array em ordem crescente por salário;
●Ordena o Array em ordem decrescente por salário;
●Ordena o Array em ordem crescente por senioridade;
●Ordena o Array em ordem decrescente por senioridade;
Exemplo de Entrada: */
const dados = [
  { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
  { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
  { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
  { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
  { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
  { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
  { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
];

function idade(array) {
  dados.sort((a, b) => a.idade - b.idade);
  console.log(array);
}
//idade(dados)
function idadeDec(array) {
  dados.sort((a, b) => b.idade - a.idade);
  console.log(array);
}
//idadeDec(dados)
function salarioCres(array) {
  dados.sort((a, b) => a.salario - b.salario);
  console.log(array);
}
//salarioCres(dados)
function salarioDec(array) {
  dados.sort((a, b) => b.salario - a.salario);
  console.log(array);
}
//salarioDec(dados)
function valorSenioridade(array) {
    if (dados.senioridade === "senior") {
        return 1;
      }
      if (dados.senioridade === "pleno") {
        return 2;
      }
      if (dados.senioridade === "junior") {
        return 3;
      }
      if (dados.senioridade === "estagio") {
        return 4;
      }
}
function seniorCres(array) {
  valorSenioridade(dados)
  dados.sort((a, b) => b.salario - a.salario);
  console.log(array);
}
//seniorCres(dados);

function seniorDec(array) {
    valorSenioridade(dados)
    dados.sort((a, b) => a.salario - b.salario);
    console.log(array);
  }
//seniorDec(dados);
