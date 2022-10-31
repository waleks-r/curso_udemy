/**
 * O conceito de hoisting é lançar para cima o var
 */

/**
 * Basicamente o que acontece é:
 * var a;
 * console.log('a =', a); undefined
 * a = 2;
 * console.log('a =', a); 2
 */
console.log('a =', a);
var a = 2;
console.log('a =', a);

//O efeito de hoisting não ocorre com a variavel let e isso gera um erro
/**
 * console.log('a =', a);
 * let a = 2;
 * console.log('a =', a);
 */