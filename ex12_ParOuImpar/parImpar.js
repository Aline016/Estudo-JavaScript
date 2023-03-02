
function fncParImpar(){

    var num = Number(window.prompt(`Informe o número a ser utilizado:`))

    var mensagem

    var resultado = num%2

    var frase = window.document.getElementById("p1")

    if(resultado == 0){
        mensagem = `par`
    }
    else{
        mensagem = `impar`
    }

    frase.innerHTML = `O número ${num} é ${mensagem}`
    
}