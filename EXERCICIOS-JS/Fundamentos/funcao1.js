/**
 * função é uma ação, ela execulta uma setença um processo
 * declarar uma função
 * 1º - palavra reservada function
 * 2º - nome da função
 * 3º - () parentêses onde ficam os parâmetros podendo conter ou não se for mais que um são separados por "," virgula 
 * 4º - {} bloco de códigos, onde ficam os códigos que seram execultado pela função   
 */

//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(1,3); //Soma o 1 + 3 conforme a função
imprimirSoma(1); //Se for colocado somente um valor é o mesmo de somar um numero com um undefined(valor indefenido) que vai dar um NaN(not and number) não é um numero
imprimirSoma(1,3,4,5,6); //Se for colocado mais de um numero ele vai somar os dois primeiros valores e ignorar o resto
imprimirSoma(); //Se não for colocado nenhum valor é o mesmo de somar undefined + undefined que vai ser igual a NaN

//Função com valor
function soma(a, b=0){
    return a + b
}
console.log(soma(2,3));
console.log(soma(2));//soma o primeiro com 0 que é o valor de b declarado no parâmetro b=0