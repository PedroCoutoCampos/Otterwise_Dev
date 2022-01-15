const num = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
const numMult = [];

for (let i = 0; i < num.length; i++) {
    num[i] = num[i] * 10;
    numMult.push(num[i]);
}
console.log(`Números Multiplicados: 
[${numMult}`);