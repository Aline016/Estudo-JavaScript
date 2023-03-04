function fncAleatorio(){

    let aleatorio = parseInt(Math.random() * 100)

    let saida = document.getElementById("section1")

    saida.innerHTML += `<p>Acabei de pensar no número ${aleatorio} </p>`

}

function fncLimpar(){

    let saida = document.getElementById("section1")

    saida.innerHTML = null
}