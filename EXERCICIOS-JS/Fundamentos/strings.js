/**
 * String é uma cadeia de caracteres que no javaScript podem ser delimitado por três simbolos
 * "" aspas duplas
 * '' aspas simples
 * `` crase 
 * 
 * observação: estudar rejex
 */
const escola = "Cod3r"
console.log(escola.charAt(4))//Me da a letra que esta no indice 4. obs.: a primeira letra começa com indice 0
console.log(escola.charAt(5))//Quando o valor de indice for maior ele não vai gerar erro mais ficará em branco
console.log(escola.charCodeAt(3))//Dar o valor da tabela ASCII
console.log(escola.indexOf('3'))//Dar a posição do indice em que esta o caractere
console.log(escola.substring(1))//Vai pegar a palavra a partir do indice que estiver entre parenteses 
console.log(escola.substring(0, 3))//Mostra a palavra apartir do primeiro indice ate o utimo indice que esta em parenteses sem incluir o utimo indice no caso do exemplo o idice 3 é o caractere três que não será incluido
console.log('Escola '.concat(escola).concat("!"))//Concatena (junta) palavras
console.log(escola.replace(3, 'e'))//Substitui o terceiro indice pela letra 'e'
console.log('Ana,Maria,Pedro'.split(','))//Separa tudo que tem virgula