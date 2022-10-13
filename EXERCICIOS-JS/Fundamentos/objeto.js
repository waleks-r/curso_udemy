/**
 * {} par de chaves representa um objeto
 * O objeto é um conjunto de chave e valor 
 * 
 * diferente de json
 * json {"nome": "waleks", "idade": 36} textual
 * objeto { nome: "waleks", idade: 36} chave e valor
 * 
 */
const prod1 = {}
prod1.nome =  'Celular Ultra Mega'// Atribui dinamicamente nome dentro do objeto prod1
prod1.preco =  4998.90// Atribui dinamicamente nome dentro do objeto prod1
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,

}
console.log(prod2)