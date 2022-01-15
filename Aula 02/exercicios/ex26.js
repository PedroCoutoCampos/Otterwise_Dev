var prompt = require("prompt-sync")()

let horas = Number(prompt(("Quantas horas deseja trabalhar por mês? ")));
let precoHora = horas * 30;
let projeto = precoHora;
let imposto = precoHora /2;
console.log(`Projeto R$ ${projeto.toFixed(1)}`)
console.log(`Impostos R$ ${imposto.toFixed(1)}`)

