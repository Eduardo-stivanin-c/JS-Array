const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

// utilizando array
const numeros = [50, 43, 12];
// array com 1 elemento
const numero = [5];

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
// array com 3 elementos
//const nums = [50, 43, 12];
// índice     0   1   2   3
//const nums = [50, 43, 12, 98];
/*
const nums = [50, 43, 12];
// o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];
*/

/*
for (let indice = 0; indice <= 10; indice++) {
    console.log(indice);
  }
  */

  /*trava em loop infinito
  for (let indice = 0; indice <= 10; ) {
    console.log(indice);
  }
*/
/
for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}