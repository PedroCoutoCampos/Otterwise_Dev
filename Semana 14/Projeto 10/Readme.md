Proposta
O objetivo do projeto é criar uma API de filmes. 
Deve ser implementada a autenticação e autorização necessária para as rotas.
Cada filme deve ter um título, descrição e gênero. Além disso, só pode ser possível cadastrar um filme estando logado, mas caso não esteja logado, 
pode-se listar todos os filmes cadastrados.
O usuário pode fazer as seguintes ações:
●sem autenticação: 
○ listar todos os filmes cadastrados;
○ listar um filme específico.
●autenticado: 
○ cadastrar um filme;
○ editar as informações de um filme;
○ excluir um filme.
Abaixo está o diagrama de banco de dados para ajudar no desenvolvimento da aplicação.Diagrama relacionalObservações
●A tabela “gender” guarda o gênero do filme e na tabela “movie” deve conter apenas a referência para o id deste gênero;
●Podem utilizar exemplos de autenticação vistos em aulas anteriores;
●É necessário utilizar Prisma como ORM;
●Utilizar o padrão REST para nomenclatura e padrão de rotas