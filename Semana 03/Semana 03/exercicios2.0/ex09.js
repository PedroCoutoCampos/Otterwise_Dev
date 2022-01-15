
const num = [1,2,3,4,-5,6,7,8,9,10];
let smallest = num[0]
let smallest2 = num[0]
let menor = 0;
let maior = 0
for (let i = 0; i < num.length; i++) {
    if (smallest > num[i]) {
    smallest = num[i]
    menor = i
    }
    if (smallest2 < num[i]) {
        smallest2 = num[i]
        maior = i
        }
} 
    console.log("O menor é" + " " + smallest);
    console.log("Sua posição é " + menor);
    console.log("O maior é" + " " + smallest2);
    console.log("Sua posição é " + maior);