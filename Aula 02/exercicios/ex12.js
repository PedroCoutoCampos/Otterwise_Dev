let nome = "Juca da Silva";
let servidor = true;
let professor = false;

if (servidor === false && professor === true) {
    console.log(`${nome} infelizmente voce nao tem uma linha de credito disponivel`);
} else if (servidor === true && professor === true) {
    console.log(`Parabens ${nome}! Voce trem acesso a nossa linha de credito especial`);
} else if (servidor === true && professor === false) {
console.log(`${nome}, voce tem acesso a nossa linha de credito para servidores`);
}


