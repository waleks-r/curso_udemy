/**
 * Operadores unários
 * pre-fixado - vem antes
 * pos-fixado - vem depois
 * in-fixe - fica entre os operandos
 */
let num1 = 1;
let num2 = 2;

num1++; //usando o operador unário pos-fixado de incremento
console.log(num1);
--num1; //pode ser usado tanto pre quanto pos, o pre-fixado tem precedencia sobre o pos-fixado

console.log(num1);

console.log(++num1 === num2--);// forma feita ++num1 = 2 === num2 = 2 e depois ele tira 1