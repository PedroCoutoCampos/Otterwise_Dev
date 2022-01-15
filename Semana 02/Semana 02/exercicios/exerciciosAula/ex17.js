/*
17 -Dado o array de objetos a seguir, crie um algoritmoque imprimirá noconsole se o user é dev ou não, conforme a saída esperada à seguir.
Importante: DEVE ser na mesma linha.
Entrada:[{ name: 'Marília', age: 26, job: 'Dev' },
{ name: 'Juca', age: 21, job: 'RH' },
{ name: 'Flávia', age: 30, job: 'Financeiro' },
{ name: 'Sérgio', age: 24, job: 'Dev' },]
Saída esperada:
'Marília é dev. Juca não é dev. Flávia não é dev. Sérgio é dev.'
*/

const user = [
  { name: "Marília", age: 26, job: "Dev" },
  { name: "Juca", age: 21, job: "RH" },
  { name: "Flávia", age: 30, job: "Financeiro" },
  { name: "Sérgio", age: 24, job: "Dev" },
];

for (let i = 0; i < user.length; i++) {
  if (user[i].job === "Dev") {
    user[i].job = "é dev."
  } else {
    user[i].job = "não é dev."
  }
  // console.log(`${user[i].name} ${user.job}  `);
  console.log(user[i].name + " " + user[i].job);
}
