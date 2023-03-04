function fcnIdade(){

    let nascimento = Number(window.prompt("Informe seu ano de nascimento"))

    let resultado = document.getElementById("section1")

    let agora = new Date

    let ano_atual = agora.getFullYear()

    let idade = ano_atual - nascimento

    resultado.innerHTML = `Quem nasceu em ${nascimento} estará completando ${idade} anos em ${ano_atual}`
    
}