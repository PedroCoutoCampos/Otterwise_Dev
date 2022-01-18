/*8 - [REFATORAÇÃO]Dado um array de nomes, faça um
programa que tenhacomo entrada um valor à ser pesquisado
 e retorne se o nome existe ou não noarray.
 Exemplo de Entrada:["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos" ]
 Exemplo de Saída:O nome Carla existe no Array
*/
const nomes = [
  "Juliana",
  "Pedro",
  "Regina",
  "João",
  "Patrícia",
  "Gabriel",
  "Carlos",
];
//soma = numSoma.reduce((soma, i) => {
    let name = "Pedro"
    const result = nomes.find((nome) => nome === name)
    if (result === name) {
        console.log(`O nome ${name} esta no array`);
    } else {
      console.log(`O nome ${name} não esta no array`);
    }
    


   // if (escolhe) {
      //  console.log(`O nome ${escolhido} não esta no array`);
    //} else {
     //   console.log(`O nome ${escolhido} esta no array`);
    //}

