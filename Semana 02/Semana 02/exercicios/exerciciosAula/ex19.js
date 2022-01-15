/* 
19 -Crie um algoritmo que tem como entrada um arrayde strings e trata essas string substituindo os números por letra de acordo com a tabela 
a seguir, além disso, deve remover os espaços em branco no começo e fim da string, se existirem.
Tabela:
1 : i
3 : e
4 : a
5 : s
0 : o
*/

let entrada = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']
let string = "";

for (let i = 0; i < entrada.length; i++) {
    
    for (let i2 = 0; i2 < string.length; i2++) {
        if (string[i] === " ") {
            string += "";
        } else {
            string += string[i];
        }
        if (string[i] === "1") {
            string += "i";
        } else {
            string += string[i];
        }
        if (string[i] === "3") {
            string += "e";
        } else {
            string += string[i];
        }
        if (string[i] === "4") {
            string += "a";
        } else {
            string += string[i];
        }
        if (string[i] === "5") {
            string += "s";
        } else {
            string += string[i];
        }
        if (string[i] === "0") {
            string += "o";
        } else {
            string += string[i];
        }
    }    
    entrada[i] = string;
}
console.log(string);