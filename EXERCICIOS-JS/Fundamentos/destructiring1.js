const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua abc',
        numero: 1000
    }
}

//Tirar os atribotos nome e idade do objeto pessoa com o operador destructiring 
const {nome, idade}=pessoa;
console.log(nome, idade);

//posso criar um apelido para as variaveis
const {nome: n, idade: i} = pessoa;
console.log(n, i);

//Tentar tirar algo que não tem no objeto
const { sobrenome, bemHumorada=true} = pessoa;
console.log(sobrenome, bemHumorada);

//Usar os dados de um objeto que esta dentro de outro objeto
const { endereco: {logradouro, numero,cep}} = pessoa;
console.log(logradouro, numero, cep);