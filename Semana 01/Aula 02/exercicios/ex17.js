let hinicial = 22;
let hfinal = 6;

let duracao = hfinal - hinicial;
if (duracao < 0) {
    console.log(`Tempo de duração foi ${duracao + 24} horas.`);
} else {
    console.log(`Tempo de duração foi ${duracao} horas.`);
}
