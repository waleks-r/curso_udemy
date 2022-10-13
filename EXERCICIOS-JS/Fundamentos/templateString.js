const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`

console.log(concatenacao, template)

//Expressoes...
console.log(`1 + 1 = ${1+1}`)//Ele interpola somente oque esta entre chaves

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
