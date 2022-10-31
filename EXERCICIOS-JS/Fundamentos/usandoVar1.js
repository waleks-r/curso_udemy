//Escopo local onde a variavel está alocada

//Com a variavel VAR conseguimos imprimir fora do bloco de codigo
{
    {
        {
            {
                var sera = 'será'
            }
        }
    }
}
console.log(sera)

//quando definimos uma var dentro de uma função só podemos usa-la dentro da funcão se tentar fora dará erro
function teste(){
    var local = 123;
    console.log(local);
}
teste();
/**
 * function teste(){
 *   var local = 123;
 * }
 * teste();
 * console.log(local); 
 */

/**
 * Quando se cria uma variavel var fora de uma função ela se torna global
 * Vantagem da variavel global: pode ser acessado de qualquer lugar,
 * Desvantagem da variavel global: pode ter seu valor mudado e gerar um grande problema
 */
