const valores = [7.7, 8.9, 6.3, 9.2] //Esse é um array onde os indices são separados por , "virgula"

console.log(valores[0], valores[3])
console.log(valores[4])//Se o indice 4 não existir ele não gera um erro mais da undefined

valores[4] = 10 //Incluir um indice no array
console.log(valores[4])//Agora ele existe, então vai mostrar o valor do indice 4
console.log(valores.length)//Mostra a quantidade de elementos de um array
valores.push({id: 3}, false, null, 'teste')//Acrescenta valores no final
console.log(valores)

console.log(valores.pop())//Retira o ultimo valor do array
console.log(valores)

delete valores[0]//Retira o elemento 
console.log(valores)

console.log(typeof(valores))//Um Array em javaScript é do tipo object