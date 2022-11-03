/**
 * 
 * declarar o if sem as chaves, é para uma senteça de código, mais o javascript não
 * da erro mais faz o if somente da primeira linha 
 */
function teste1(num){
    if(num>7)
    console.log(num);
    console.log('Final');
}
teste1(6);
teste1(8);

//Não use ; na estrutura if porque significa uma setença vazia
function teste2(num){
    if(num>7);
    {
        console.log(num);
    }
    
}
teste2(6);
teste2(8);