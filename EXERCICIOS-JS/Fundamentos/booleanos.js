let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// A ! "exclamação" é uma negação quando eu cologo duas vezes é faz o contrario

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!! " ")
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!! (isActivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')//se a string for vazia mostra Desconhecido senão mostra o nome
nome = 'Lucas'
console.log(nome || 'Desconhecido')//se a string for vazia mostra Desconhecido senão mostra o nome
