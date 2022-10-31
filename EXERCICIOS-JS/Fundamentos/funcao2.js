/**
 * Uma função anônima é quase a mesma coisa de uma função comum só não tem o nome
 * 1º - palavra reservada function
 * 2º - () parentêses onde ficam os parâmetros podendo conter ou não se for mais que um são separados por "," virgula 
 * 3º - {} bloco de códigos, onde ficam os códigos que seram execultado pela função   
 */

//Armazenendo uma função em uma variável sem retorno
const imprimirSoma = function (a, b){
    console.log(a + b);
}
imprimirSoma(1, 3);

//Armazenendo uma função em uma variável com retorno
const imprimirSubtracao = function (a, b){
    return a - b;
}
console.log(imprimirSubtracao(3, 1));


//Armazenar uma função arrow em uma variavel sem retorno
const soma = (a, b) =>{
    console.log(a + b);
}
soma(1,3);

//Armazenar uma função arrow em uma variavel sem retorno
const subtracao = (a, b) =>{
    return (a - b);
}
console.log(subtracao(3,1));

//Armazenar uma função arrow em uma variavel implicito
const dividir = (a, b) => a / b;
console.log(dividir(3,1));


