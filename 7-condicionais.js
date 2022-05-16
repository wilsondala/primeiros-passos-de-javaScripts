console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 18; // nesse exemplo especifico proibido vender para menor de idade se mudarmos a idade para 18 anos o sistema ira concretizar com a venda!
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

if(idadeComprador >=18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2,2); //removendo item
}else{
    console.log("Não é maior de Idade e não posso vender");
}


console.log(listaDeDestinos);

console.log(idadeComprador > 18); // > maior
console.log(idadeComprador < 18);// < menor
console.log(idadeComprador <= 18);// maior ou igual 
console.log(idadeComprador >= 18);// menor ou igual
console.log(idadeComprador == 18);// igual
