/* 13 -Faça um programa que recebe um array e uma funçãocomo parâmetro epercorre todo o array aplicando
 a função em cada um dos elementos do array.
 Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
multiplicaPorDez
Exemplo de Entrada 2:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
dividePorCinco
Exemplo de Saída:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
Exemplo de Saída 2:
[2, 16, 12, 26, 14, 18, 30, 44, 712, 8, 6]
*/
const num = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
const numMult = [];
const numDiv = [];


for (let i = 0; i < num.length; i++) {
    num[i] = num[i] * 10;
    numMult.push(num[i]);
}
for (let j = 0; j < num.length; j++) {
    num[j] = num[j] / 5;
    numDiv.push(num[j]);
}
console.log(`Números Multiplicados por 10: ${numMult}`);
console.log(`Números Divididos por 5: ${numDiv}`);