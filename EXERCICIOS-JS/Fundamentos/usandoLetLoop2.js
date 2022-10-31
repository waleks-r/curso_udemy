const funcs = [];

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//Como let tem escopo de bloco o valor a ser impresso será vai ser o valor invocado no indice
funcs[2]();
funcs[8]();