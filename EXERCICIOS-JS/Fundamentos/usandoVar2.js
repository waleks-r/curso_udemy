/**
 * A variavel var por ser global ela pode ser sobscrita de qualque lugar e isso pode não ser bom
 * porque ela pode ser declarada mais de uma vez
 */
var numero = 1;
{
    var numero = 2
    console.log('dentro =',numero);
}
console.log('fora =', numero);