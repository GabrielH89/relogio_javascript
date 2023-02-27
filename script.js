function contarHoras() {
    const hora = new Date()
    const newHora = hora.getHours();
    document.getElementById("horas").textContent = newHora;
    if (newHora < 10){
        document.getElementById("horas").textContent = "0" + newHora;
    }
}

function contarMinutos(){
    const minuto = new Date()
    const newMinuto = minuto.getMinutes();
    document.getElementById("minutos").textContent = newMinuto;
    if (newMinuto < 10){
        document.getElementById("minutos").textContent = "0" + newMinuto;
    }
}

function contarSegundos(){
    const segundo = new Date()
    const newSegundo = segundo.getSeconds()
    document.getElementById("segundos").textContent = newSegundo;
    if (newSegundo < 10){
        document.getElementById("segundos").textContent = "0" + newSegundo;
    }
}

setInterval(contarSegundos, 1000)
setInterval(contarMinutos, 1000)
setInterval(contarHoras, 1000)






