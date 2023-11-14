function contarHoras() {
    const hora = new Date();
    const newHora = hora.getHours();
    document.getElementById("horas").textContent = addZero(newHora);
}

function contarMinutos() {
    const minuto = new Date();
    const newMinuto = minuto.getMinutes();
    document.getElementById("minutos").textContent = addZero(newMinuto);
}

function contarSegundos() {
    const segundo = new Date();
    const newSegundo = segundo.getSeconds();
    document.getElementById("segundos").textContent = addZero(newSegundo);
}

//Função para adicionar o 0 antes do valor, caso a hora, minuto ou segundo seja menor que 10.
function addZero(value) {
    if(value < 10){
        return "0" + value;
    }else{
        return value;
    }
}

setInterval(contarSegundos, 1000);
setInterval(contarMinutos, 1000);
setInterval(contarHoras, 1000);

document.getElementById("definirAlarme").addEventListener("click", function () {
    document.getElementById("novoHorario").style.display = "flex";
    document.getElementById("relogio").style.display = "none";
});

document.getElementById("fecharJanela").addEventListener("click", function () {
    document.getElementById("novoHorario").style.display = "none";
    document.getElementById("relogio").style.display = "flex";
});


//Funções para validar, através do regex, a hora e o minuto definidos. 
function validarHora(hora){
    const regexHora = /^(2[0-3]|[01]?[0-9])$/;
    return regexHora.test(hora);
}

function validarMinuto(minuto){
    const regexMinuto = /^([0-5]?[0-9])$/;
    return regexMinuto.test(minuto);
}


// Função para verificar e disparar o alarme
function verificarAlarme(hora, minuto) {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();

    const horasElement = document.getElementById("horas");
    const minutosElement = document.getElementById("minutos");
    const segundosElement = document.getElementById("segundos");

    if (horas === hora && minutos === minuto) {
        horasElement.style.color = "red";
        minutosElement.style.color = "red";
        segundosElement.style.color = "red";
    }else{
        horasElement.style.color = "#00FF7F";
        minutosElement.style.color = "#00FF7F";
        segundosElement.style.color = "#00FF7F";
    }
}

// Função para definir o alarme quando o usuário confirma
document.getElementById("confirmarAlarme").addEventListener("click", function () {
    confirmarAlarme();
});

document.getElementById("minutoInput").addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        confirmarAlarme();
    }
})

document.getElementById("horaInput").addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        confirmarAlarme();
    }
})

let intervalId; // Variável para armazenar o identificador do intervalo

function confirmarAlarme() {
    const horaInput = document.getElementById("horaInput").value;
    const minutoInput = document.getElementById("minutoInput").value;

    const hora = parseInt(horaInput, 10);
    const minuto = parseInt(minutoInput, 10);

    if (validarHora(horaInput) && validarMinuto(minutoInput)) {
        document.getElementById("novoHorario").style.display = "none";
        document.getElementById("relogio").style.display = "flex";

        // Limpa o intervalo existente, se houver
        clearInterval(intervalId);

        // Chama a função verificarAlarme imediatamente
        verificarAlarme(hora, minuto);

        // Configura um intervalo para verificar o alarme a cada minuto
        intervalId = setInterval(function () {
            verificarAlarme(hora, minuto);
        }, 60000); // 60.000 milissegundos = 1 minuto
    } else {
        alert("Por favor, insira valores numéricos válidos para a hora e o minuto.");
    }
}


