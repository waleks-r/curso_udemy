//Notação ponto é usado para acessar partes de um objeto ou função
console.log(Math.ceil(6.1));//Opera um arrendondamento

const obj1 = {} //criando um objeto
obj1.nome = 'Bola'; //criando um atributo literal e colocando valor nele
//obj1['nome'] = 'Bola2'; //criando um atributo  e colocando valor nele

console.log(obj1);
//Usar o this publica para fora da função
function obj(nome){
    this.nome = nome;
}
const obj2 = new obj('Cadeira');
const obj3 = new obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);