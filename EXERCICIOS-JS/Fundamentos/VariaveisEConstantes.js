/**
 * Palavra reservada: Var Let e Const
 * Identificador: a, b, c
 * recebe: =
 * valor: 3, 4, 5, 300, 400
 * 
 * Quando declaramos variaveis com var ela pode ser declarada novamente
 * exemplo: 
 * var a = 3
 * var a = 300
 * 
 * com o let não se pode declarar mais de uma vez cada variavel
 * exemplo:
 * let b = 4
 * let b = 400
 * isso vai gerar um erro
 * 
 * Constantes não podem mudar seu valor
 * exemplo:
 * const c = 5
 * const c = 500
 * isso vai gerar um erro
 * 
 */
var a = 3
let b = 4
console.log(a, b)

a = 300
b = 400
console.log(a, b)

const c = 5
console.log(c)