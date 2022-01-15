/*
11-Em uma empresa de tecnologia aárea de Recursos Humanos precisava organizar 
algumas informações a respeito dos funcionários.Para que isso fosse possível, 
ele precisava criar um programa que entregasse alista de funcionalidades abaixo.
Tendo como entrada um array de objetos crie funções que realizam as
 seguintesoperações: 
 Ordena o Array em ordem crescente por idade;
 ●Ordena o Array em ordem decrescente por idade;
 ●Ordena o Array em ordem crescente por salário;
 ●Ordena o Array em ordem decrescente por salário;
 ●Ordena o Array em ordem crescente por senioridade;
 ●Ordena o Array em ordem decrescente por senioridade;
 OBS: Tente melhorar esse exercício utilizando os conhecimentos novos 
 que vocêaprendeu na aula anterior.
 Exemplo de Entrada:
*/

 const arrayFuncionarios =
 [
{ nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
{ nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
{ nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
{ nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
{ nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
{ nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
{ nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
]

function sortByAgeC (array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].idade < array[j].idade) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array);
}
//sortByAgeC(arrayFuncionarios)
function sortByAgeD (array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].idade > array[j].idade) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array);
}
//sortByAgeD(arrayFuncionarios)
function sortBySalaryC (array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].salario < array[j].salario) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array);
}
//sortBySalaryC(arrayFuncionarios)
function sortBySalaryD (array) {
    let temp
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i].salario > array[j].salario) {
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array);
}
//sortBySalaryD(arrayFuncionarios)

function sortBySenioridadeC(array) {
    const level = {
        estagio: 0,
        junior: 1,
        pleno: 2,
        senior: 3,
    }
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
           if (level[array[i].senioridade] < level[array[j].senioridade]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
           }
           
       }
        
    }
    console.log(array);
}
//sortBySenioridadeC(arrayFuncionarios)
function sortBySenioridadeD(array) {
    const level = {
        estagio: 0,
        junior: 1,
        pleno: 2,
        senior: 3,
    }
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length; j++) {
           if (level[array[i].senioridade] > level[array[j].senioridade]) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
           }
           
       }
        
    }
    console.log(array);
}
sortBySenioridadeD(arrayFuncionarios)