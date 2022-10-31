//par nome/valor
const saudacao = 'Opa'; //Contexto léxico ou seja local onde sua variavel foi defenida no codigo

function exec(){
    const saudacao = 'Falaa';
    return saudacao;
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);
