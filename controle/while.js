/**
 * A estrutura while é uma estrutura de repetição que é verdadeiro ou falso não tem uma quantidade determinada de opções 
 */
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
let opcao = 0

while(opcao != -1 ){
    opcao = getInteiroAleatorioEntre(-1, 10); 
    console.log(`Opção escolhida foi ${opcao}.`) ;
}

console.log('Até a próxima!');
