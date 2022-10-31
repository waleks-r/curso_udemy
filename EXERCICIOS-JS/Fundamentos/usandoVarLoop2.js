const funcs = [];

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
//Como var não tem escopo de bloco todo valor vai ser 10
funcs[2]();
funcs[8]();