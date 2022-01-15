/*
12 -Dado o objeto à seguir, imprima no console:O nome do dev.O segundo projeto.O nome do primeiro projeto.
Entrada:{name: "Juca",projects: [{ name: "Projeto 1",  start: "01/02/2021" },{name: "Projeto 2", start: "03/03/2021"}]}
Saída Esperada:Juca{ name: 'Projeto 2', start: '03/03/2021' }
Projeto 1  
*/

const juju = {
  name: "Juca",
  projects: [
    { name1: "Projeto 1", start: "01/02/2021" },
    { name2: "Projeto 2", start: "03/03/2021" }
  ]
};
console.log(juju.name);
console.log(juju.projects[1]);
console.log(juju.projects[0].name1);
