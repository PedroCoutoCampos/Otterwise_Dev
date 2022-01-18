/* 14-Uma empresa gostaria de organizar seu quadro
de funcionários, para issocontratou o estagiário 
Juquinha para criar um software. O CEO da empresa fez
uma lista de pedidos para o Juquinha.
Pedidos:
●A - Função para retornar apenas o funcionário com o id informado:feito
●B - Função para filtrar apenas os funcionários ativos na empresa:feito
●C - Função para filtrar apenas funcionários clt:feito
●D - Função para criar uma nova estrutura onde cada funcionário receberá uma nova informação de base salarial:
●E - Função onde separa em 2 grupos os funcionários pj e clt: feito
●F - Função que retorna apenas funcionários ativos ordenados por ordem de idade: feito
*/

const dados = [
{id: 1, name: 'Carlos', age: 35, active: false, birth_date: '13/05/1986',contract_date: '20/07/2015', job: 'front-end', type: 'clt' },
{id: 2, name: 'Matheus', age: 30, active: true, birth_date: '03/07/1991',contract_date: '01/03/2020', job: 'front-end', type: 'clt'},
{id: 3, name: 'Pamela', age: 23, active: true, birth_date: '20/09/1998',contract_date: '19/06/2021', job: 'back-end', type: 'pj'},
{id: 4, name: 'Fabiana', age: 32, active: false, birth_date: '08/12/1989',contract_date: '13/04/2018', job: 'front-end', type: 'pj'},
{id: 5, name: 'João', age: 37, active: true, birth_date: '08/12/1984', contract_date:'03/08/2014', job: 'front-end', type: 'clt'},
{id: 6, name: 'Miguel', age: 29, active: true, birth_date: '08/12/1992',contract_date: '26/02/2015', job: 'fullstack', type: 'clt'},
{id: 7, name: 'Francine', age: 27, active: false, birth_date: '27/01/1994',contract_date: '23/05/2019', job: 'designer', type: 'pj'},
{id: 8, name: 'Matheus', age: 31, active: true, birth_date: '10/11/1990',contract_date: '18/09/2017', job: 'marketing', type: 'clt'},
{id: 9, name: 'Gabriel', age: 28, active: true, birth_date: '08/12/1993',contract_date: '14/11/2020', job: 'financeiro', type: 'clt'}] 

function idInfor (array) {
    const idInformado = array.filter((num) => {
        return num.id !== 0
    })
    console.log(idInformado);
}
//idInfor(dados)

function idActiv(array) {
    const idAtivo = array.filter ((dado) => {
        return dado.active === true
    })
    console.log(idAtivo);
}
//idActiv(dados)
function clt (array) {
    const soClt = array.filter((dado) => {
        return dado.type === "clt"
    })
    console.log(soClt);
}
//clt(dados)

function cltPj (array) {
    const soClt2 = array.filter((dado) => {
        return dado.type === "clt"
    })
    const adds = soClt2.concat();
    console.log("Só os Clt:");
    console.log(adds);
    const soPj2 = array.filter((dado) => {
        return dado.type === "pj"
    })
    const add = soPj2.concat();
    console.log("Só os PJ:");
    console.log(add);
}
//cltPj(dados)
function idCres(array) {
    const idAt = array.filter ((dado) => {
        return dado.active === true
    })
    idAt.sort((a, b) => a.age - b.age);
    console.log(idAt);
}
//idCres(dados)