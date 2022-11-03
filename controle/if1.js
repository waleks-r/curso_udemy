/**
 * Na estrutura de controle IF 
 * 1º a palavra reservada if -> que significa se
 * 2º (nota>=7) -> expresão logica que retorna false ou true
 * 3º o comando que será realizado caso a expresão logica for atendida
 * observação: se tiver somente uma linha de comeando podemos não colocar as chaves,
 * mais o ideal é colocar
 */
function soBoaNoticia(nota){
    if(nota>=7){
       console.log('Aprovado com '+ nota) 
    }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1);

//passando diretamente o valor
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... '+ valor);
    }
}
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({nome: 'waleks'});