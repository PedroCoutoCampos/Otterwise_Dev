/*
14 -Uma loja online que possui a estrutura do objeto
abaixo, precisa quealgumas funcionalidades sejam implementadas.
 Implemente a lista defuncionalidades abaixo.
 Estrutura do Objeto:
 {cod:
    name:
    stock:
    price:
    category:
}
 Lista de Funcionalidades:
 ●Filtro por nome, código e categoria; feito
 ●Filtro por faixa de preço;  FEITO
 -Ordenação em Ordem Crescente e Decrescente por todos os campos;
 Transação de Compra:
 Além das funcionalidades acima, o usuário poderá realizar a compra.
 -O processo de compra será uma função que confere se o produto existe esse ele possui estoque, 
 a quantidade será passada como parâmetro junto com o código do produto;
-Um cliente pode realizar várias compras, então todos os produtos
selecionados devem ser adicionados a um “carrinho de compras”;
-Deve existir uma função que mostra o valor total que existe atualmente no carrinho;
-O programa deve possuir uma função de finalização da compra em que o
programa recebe como parâmetro o valor total e a forma de pagamento:
-Boletos tem 10% de desconto no valor total;
-Cartão de Débito tem 15% de desconto no valor total;
-A opção crédito, deve receber quantas parcelas o cliente deseja
parcelar (máximo de 12x), em cada parcela deve incidir 3% de juros,sendo assim o
 cliente deve saber o valor da parcela e o total.
 -O programa deve mostrar ao final um relatório em que são mostradas as
 compras e a forma de pagamento com o valor total (e o número de
parcelas caso a opção escolhida tenha sido crédito). */
const dados = [
  {cod: 1053, name: "Arroz", stock: 10, price: 5, category: "Comida"},
  {cod: 1045, name: "Batata", stock: 5, price: 2, category: "Comida"},
  {cod: 1080, name: "Fejão", stock: 5, price: 7, category: "Comida"},
  {cod: 1108, name: "Panela", stock: 2, price: 50, category: "Utensílio"},
  {cod: 1110, name: "Colher", stock: 11, price: 10, category: "Utensílio"},
  {cod: 1140, name: "Par de talher", stock: 11, price: 4, category: "Utensílio"},
  {cod: 1056, name: "Bala Fini", stock: 5, price: 4, category: "Comida"},
  {cod: 1022, name: "Caixa de BomBom", stock: 10, price: 11, category: "Comida"},
];
function filtroNome(array) {
  let nome;
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === nome) {
      console.log(array[i]);
    }
  }
}
//filtroNome(dados)
function filtroCodigo(array) {
  let codigo = 1022;
  for (let i = 0; i < array.length; i++) {
    if (array[i].cod === codigo) {
      console.log(array[i]);
    }
  }
}
//filtroCodigo(dados)
function filtroCategoria(array) {
  let categoria = "Comida";
  for (let i = 0; i < array.length; i++) {
    if (array[i].category === categoria) {
      console.log(array[i]);
    }
  }
}
//filtroCategoria(dados)
function filtroPreço(array) {
  let precoMAx = 10;
  let precoMin = 4;
  for (let i = 0; i < array.length; i++) {
    if (array[i].price >= precoMin && array[i].price <= precoMAx) {
      console.log(array[i]);
    }
  }
}
//filtroPreço(dados)
function ordCrescente(array) {
  //é so mudar de categoria para alterar o modo do filtro
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].price > array[j].price) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(array);
}
//ordCrescente(dados)
function venda(array, codProduto, qtdProduto) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].cod === codProduto && array[i].stock >= qtdProduto) {
        //console.log(`${qtdProduto}x ${array[i].name} = R$ ${soma}`);
        var carrinho = [
            {name: array[i].name},
            {price: array[i].price},
            {Qtd : qtdProduto}
          ]
          array[i].stock = array[i].stock - qtdProduto;
        } else if (array[i].cod === codProduto && array[i].stock < qtdProduto) {
          console.log(
            `Não temos temos ${qtdProduto}x de ${array[i].name}, temos apenas ${array[i].stock}x`
            );
          }
        }
        let totalCarrinho = carrinho[2].Qtd * carrinho[1].price;
        console.log(`Valor a total do carrinho é ${totalCarrinho}`);
}
venda(dados, 1053, 8);
venda(dados, 1045, 2);
venda(dados, 1056, 2);

