let valor // não inicializada
console.log(valor)
//console.log(valor2)//valor 2 não foi declarado
valor = null //ausência de valor, não aponta para nenhum local da memoria
console.log(valor)
//console.log(valor.toString()) //isso vai gerar um erro, que não lê a propriedade toString
const produto = {}
console.log(produto.preco)// se o que estiver antes do ponto for defenido o valor vai dar undefined
//console.log(produto.preco.a)// se o que estiver antes do ponto não estiver defenido o valor vai dar erro 
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)// false
console.log(produto)//undefined
