/*
1. Levando em consideração o array 
[“joao”, “pedro”, “Gabriel”, “Mari”], 
retorne um novo array com o seguinte padrão: 
[{id: 0, name: “joao”}, 
{id: 1: name: “pedro”}, ...]

*/
const users = ["joao", "pedro", "Gabriel", "Mari"];


const newUsers = users.map((user, index) => {
    return {
    id: index,
    name: user,
    };
  });
  
  console.log(newUsers);