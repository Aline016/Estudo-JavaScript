function fcnRelogio(){

    let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro")

    let semana = new Array ("Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo")

    let agora = new Date //Receber a função que da informações do sistema

    let resultado = document.getElementById("section1")

    let dia = agora.getDate() 

    let sem = agora.getDay()

    let mes = agora.getMonth()

    let ano = agora.getFullYear()

    let hora = agora.getHours()

    let minutos = agora.getMinutes()

    let segundos = agora.getSeconds()

    resultado.innerHTML = `<p>Dia: ${dia}</p>`
    resultado.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    resultado.innerHTML += `<p>Ano: ${ano} </p>`
    resultado.innerHTML += `<p>Dia da semana: ${semana[sem]} </p>`
    resultado.innerHTML += `<p>Hora: ${hora} </p>`
    resultado.innerHTML += `<p>Minutos: ${minutos} </p>`
    resultado.innerHTML += `<p>Segundos: ${segundos} </p>`
  

}