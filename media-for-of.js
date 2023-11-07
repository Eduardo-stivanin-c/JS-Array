//media-for-of
const notas =[10,6.5,8,7.5];
//ele roada da matriz sem m contador e forof no Vs code
let somaDeNotas=0;
for (let  nota of notas) {

somaDeNotas += nota
}
const media=somaDeNotas/notas.length
console.log(`A média das notas é ${media}`);