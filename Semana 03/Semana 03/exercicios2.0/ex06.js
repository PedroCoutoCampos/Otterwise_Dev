const num = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];


console.log("Positivos:");
for (let i = 0; i < num.length; i++) {
  if (num[i] > 0) {
    console.log(`${num[i]}`);
  }
}
console.log("Negativos:");
for (let i = 0; i < num.length; i++) {
  if (num[i] < 0) {
    console.log(`${num[i]}`);
  }
}
console.log("Pares:");
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(`${num[i]}`);
  }
}
console.log("Ímpares:");
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    console.log(`${num[i]}`);
  }
}

