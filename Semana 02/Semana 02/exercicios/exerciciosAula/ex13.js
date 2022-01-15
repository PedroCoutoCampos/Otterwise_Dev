
/*
13 -Dado um array de nomes, faça um programa quetenha como entrada um valor à ser pesquisado e retorne se o nome existe ou não no array.
Exemplo de Entrada:["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
"Carla"
Exemplo de Saída: O nome Carla existe no Array
*/
const names = [
    "Juliana", 
    "Pedro", 
    "Regina", 
    "João", 
    "Patrícia", 
    "Gabriel", 
    "Carlos", 
    "Carla",
]

 function fildName(name) {
     for (let i = 0; i < names.length; i++) {
        if (name === names[i]) {
            return `O nome ${name} existe no Array.`
        }
     }
     return `O nome ${name} não existe no Array.`
    }
    console.log(fildName("Carla"));

