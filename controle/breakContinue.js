const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Break para a repetição desvio para fora do laço
for(let x in num){
    if (x == 5) break;
    console.log(`${x} = ${num[x]}`);
}
//Continue para pula o indice corrente e vai para o proximo
for(let y in num){
    if (y == 5) continue;
    console.log(`${y} = ${num[y]}`);
}
//Criar um rotulo
externo:
for (let a in num){
    for(let b in num){
        if(a==2 && b ==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}