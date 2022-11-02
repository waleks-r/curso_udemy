function tratarErroELancar(erro){
    //lançar
    throw new Error('...');
    //throw 10
    //throw true
    //throw 'message'
    //throw { nome: erro.name, msg: erro.message, date: new date}
}
function imprimirNomeGritado(obj){
    //tentar
    try{
        console.log(obj.name.toUpperCase()+ '!!!');
    //tratar
    }catch(e){
        tratarErroELancar(e)
    //mesmo se der erro
    }finally{
        console.log('final');
    }
    
}

const obj = { nome: 'Roberto'};
imprimirNomeGritado(obj);