/*
20 -Dado o objeto abaixo, faça um programa que imprime no console o nome,cpf e telefone formatados. 
Dica: Separe o código em funções de formatação para cada um dos campos.
Exemplo de Entrada 1:
{nome: 'Analu dos santos baptista', 
cpf: '14776213931', 
telefone: '8328008258'}
Exemplo de Saída 1:
Analu dos Santos Baptista
147.762.139-31
(83) 2800-8258

*/

const user = 
[
    {
    nome: 'Analu dos santos baptista', 
    cpf: '14776213931', 
    telefone: '8328008258'
    }
]
for (let i = 0; i < user.length; i++) {
    
    // console.log(`${user[i].name} ${user.job}  `);
    console.log(`${user[i].nome} 
${user[i].cpf}
${user[i].telefone}`);
  }

  