console.log("Trabalhando com atribuicao de variáveis");

// const nome é mesmo que let ano 

const primeiroNome = "Wilson";
const sobrenome = "Dala";

//console.log(nome + "" +sobrenome); tamebém podemos imprimir dessa forma mais usar o exemplo abaixo.
console.log(primeiroNome, sobrenome);
// aqui colocamos a palavra meu nome dentro de uma crase `` shift + o teclado do acento agudo //para chamar o meu nome teria que ser da maneira que estara no exmplo a abaixo.

console.log(`Meu nome é`); 
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); 

let contador = 0;
contador = contador +1;

// ou podemos escrever dessa maneira 

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; // declarando variável 
idade = 26; // atribuindo valor 
idade = idade+1;
console.log(idade);