/**
 * O LET tem escopo de bloco
 * O LET da prioridade ao escopo de bloco, senão houver a variavel dentro do bloco ela procura fora
 * O var tem escopo global e de função
 * o let tem escopo de global, de função e bloco
 */
var numero = 1
{
    let numero = 2;
    console.log('dentro =', numero)
}
console.log('fora =', numero)