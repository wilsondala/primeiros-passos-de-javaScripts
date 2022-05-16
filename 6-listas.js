// desse jeito será muito mais trabalhoso 

console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// podemos  fazer desse jeito para nos facilitar o processo 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

listaDeDestinos.push(`São Paulo`); // para adicionar lista na criado 
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); 
listaDeDestinos.push(`Coritiba`); // para inserir destino na minha lista de pacotes
listaDeDestinos.splice(1,1); // para remover destino da minha lista de pacotes

console.log(listaDeDestinos);

//para mostrar apenas um destino especifico ao cliente obs: a contagem da nossa lista começa sempre do zero exemplo: salvador (0) são paulo (1) assim vai. (ESTUDAR ARRAY PARA SABER COMO FUNCIONA)
console.log(listaDeDestinos[0]); // salvador
console.log(listaDeDestinos[1]); // sao paulo
console.log(listaDeDestinos[2]); // coritiba