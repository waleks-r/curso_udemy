let contador = 1;

while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++;
}
//Usado quando se sabe o valor da repetição
for (let i = 1; contador<=10;i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i = 0; i < notas.length; i++){
    
    console.log(`As notas são:${i+1}ª - ${notas[i]}`)
}