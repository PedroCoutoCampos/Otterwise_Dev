/*
2. Levando em consideração o array de usuários abaixo: 
[{id: 3, name: “joao”, active: false}, 
    {id: 2, name: “gabriel” active: false}, 
    {id: 1, name: “mari”, active: true}, 
    {id: 0, name: “miguel”, active: false}]
Escreva um programa que imprime na tela o nome de todos os usuários ativos
Escreva um programa que imprime na tela quantos usuários não estão ativos
Escreva um programa que imprime na tela se existe algum usuário ativo
Escreva um programa que imprime na tela o array ordenado por id em ordem crescente
*/

const user = 
    [{id: 3, name: "joao", active: false}, 
    {id: 2, name: "gabriel", active: false}, 
    {id: 1, name: "mari", active: true}, 
    {id: 0, name: "miguel", active: false}]
    
const filteredUser = user.filter((user) => {
        return user.active === true;
      });
      
      console.log(filteredUser);
      

const filteredUserFalse = user.filter((user) => {
        return user.active === false;
      });
      
      console.log(filteredUserFalse);