
function fncComparacao(){
    let num1 = Number(window.prompt(`Informe o primeiro número: `))

    let num2 = Number(window.prompt(`Informe o segundo número: `))

    let maior = 0

   let mensagem =  document.getElementById("section1")

    if(num1 > num2){
        maior = num1
    }
    else{
        maior = num2
    }

    mensagem.innerHTML = `<p>Entre os números ${num1} e ${num2} o maior número é o ${maior} </p>`
}