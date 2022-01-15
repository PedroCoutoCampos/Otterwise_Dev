
function conversao(x) {

let horas = parseInt( x / 3600 ) % 24;
let minutos = parseInt( x / 60 ) % 60;
let segundos = x % 60;
console.log((horas < 10 ? "0" + horas : horas) + "-" + (minutos < 10 ? "0" + minutos : minutos) + "-" + (segundos  < 10 ? "0" + segundos : segundos));
}
conversao(1000)