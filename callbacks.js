//for-Each            
//0 ,1, 2 ,3
const nomes=["Evando","Mari","Camis"]
let somaDasNotas=0;

//lista de notas exibindo as notas
nomes.forEach(function(nome,indice)  {

    console.log(nome);
});

nomes.forEach((nome) =>  {

    console.log(nome);
});


function imprimeNome(nome) {
    console.log(nome);    
}

nome.forEach(imprimeNome)