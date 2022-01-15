const valores = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]

for (let i = 0; i < valores.length; i++) {
   console.log(mult(valores[i], 5));
}

function mult (a, b) {
    return a * b;
}