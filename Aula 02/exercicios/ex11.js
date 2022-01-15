let lado1 = 2
let lado2 = 1
let lado3 = 5

//Triângulo Equilátero → Possui os 3 lados iguais;
//Triângulo Isósceles → Possui 2 lados iguais;
//Triângulo Escaleno → Possui 3 lados diferentes.

if (lado1 === lado2 === lado3) {
    console.log("Triângulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("Triângulo Isósceles");
} else if (lado1 !== lado2 !== lado3) {
console.log("Triângulo Escaleno");
}
