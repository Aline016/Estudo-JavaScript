
function fncCalcular(){

    var resultado

    var nome = window.prompt("Qual é o nome do aluno?")

    var nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))

    var nota2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}?`))


    var mensagem;
    

    resultado = (nota1+nota2)/2

            
    var res = document.getElementById("section1")

    
    if(resultado >= 6){

        mensagem = `Parabens`
                        
    }else{
        mensagem = `Precisa estudar mais`
    }

    res.innerHTML = `<p>O aluno ${nome} <br>`
    res.innerHTML += ` primeira nota foi ${nota1} <br>`
    res.innerHTML += `A segunda nota foi ${nota2} <br>`
    res.innerHTML += `<p>A média final será ${resultado} ${mensagem}</p>`
}

