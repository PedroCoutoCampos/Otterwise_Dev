function clt (x) {
    let fgts = x * 8 / 100;
    let irrf = x * 7.5 / 100;
    let beneficio = 700;
    let liquido = x - fgts - irrf + beneficio;
    let liquidoAnual = liquido * 12;
    let ferias = x;
    let decimo = x + x;
    let anoclt = liquidoAnual + ferias + decimo ;
    console.log(`CLT = R$${anoclt} reais por ano.`);
    console.log(`Seu Imposto de renda é ${irrf} por mês e ${irrf * 12} por ano.`);

}   
function pj (y) {
    let salario = y;
    let anopj = salario * 12;
    console.log(`PJ = R$${anopj} reais por ano.`);
    console.log(`Você não declara Imposto de Renda`);

}

clt(1000);
pj(1000);
