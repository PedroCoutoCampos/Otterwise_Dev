const num = [-5, 0, -3, -4, 12];
const numPar = [];
const numImp = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    numPar.push(num[i]);
  } else if (num[i] % 2 !== 0) {
    numImp.push(num[i]); 
  }
}
console.log(`Par(es): ${numPar.length}
Impar(es): ${numImp.length}`);






//par = num.filter(value => (value % 2 === 0));
//console.log(`Pare(s): ${par.length}`);
//imp = num.filter(value => (value % 2 !== 0));
//console.log(`Impar(es): ${imp.length}`);