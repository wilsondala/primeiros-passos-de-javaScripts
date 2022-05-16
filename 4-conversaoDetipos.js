console.log("Conversao de Tipos");

console.log("ano"+ 2022)
console.log("2"+"2");
//para o console somar os dois numero que estão dentro de aspas devemos introduzir a parseInt* console.log(parseInt("2") + parseInt("2")); desse jeito vai nos retornar a soma de 2 + 2 = 4
console.log(parseInt("2") + parseInt("2"));

//Diferente na soma aqui o console consegue entender que estamso pedindo para imprimir a divisão de 10 / 2 mesmo estando dentro de aspas o caso anterior é especifico para os numero  que estão somando 
console.log("10" / "2");
// desse jeito o console vai imprimir dizendo Not a Number que em portugues significa que esta faltando um numero para continuar com a operacão
console.log("Wilson" / "2"); 

// para os numero com virgula nos devemos usar ponto(.) ao inves de virgula(,) porque quando colocamos a virgula ao inves de ponto o js interpreta de forma errado 
console.log("5.5" / "2");
console.log("5,5" / "2");