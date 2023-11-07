//media com ponto extra
const notas = [10, 9.5, 8, 7,6]
const notasAtualizadas = notas.map((nota) => {
    //condição  se noyta >= 10 retorna 10 se for menor retornosomado umponto
    return nota + 1 >=10 ? 10 : nota + 1;

})
console.log(notasAtualizadas);
