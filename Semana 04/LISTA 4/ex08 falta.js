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
let escolhido = "Pedro";

function check(array) {
    const escolhe = nomes.find((nomes) => nomes === escolhido)
    if (escolhe) {
        console.log(`O nome ${escolhido} não esta no array`);
    } else {
        console.log(`O nome ${escolhido} esta no array`);
    }
}

check(nomes);
