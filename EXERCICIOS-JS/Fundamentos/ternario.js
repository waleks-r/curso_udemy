
/**
 * Operador ternário que tem tres operando
 * 1º operando - expresão relacional nota>=7
 * 2º operando - ? 'aprovado' - se for verdadeiro retorna aprovado
 * 3º operando - : 'reprovado' - se for falso retorna reprovado
 */
const resultado = nota => nota >=7 ? 'aprovado' : 'reprovado';
console.log(resultado(7.1));
console.log(resultado(6.7));