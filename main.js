function enlace (url) {
    window.location.href = url   
}

function ActualizarHora () {
    let fecha = new Date();
    let segundos = fecha.getSeconds().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let horas = fecha.getHours().toString();
    let ampm  
    
    let elementoHoras = document.getElementById("pHoras");
    let elementoMinutos = document.getElementById("pMinutos");
    let elementoSegundos = document.getElementById("pSegundos");
    let elementoAmPm = document.getElementById("am-pm");

    horas = horas % 12
    horas = horas ? horas : 12;
    ampm = horas >= 12 ? " a.m" : " p.m"

    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
    elementoAmPm.textContent = ampm;

    // if (horas >= 8 && minutos >= 1 && horas < 12) {
    //     pSaludo.textContent = "buenos días";
    // }
    // if (horas >= 12 && minutos >= 1 && horas < 19) {
    //     pSaludo.textContent = "buenas tardes";
    // }
    // if (horas >= 19 && minutos >= 1) {
    //     pSaludo.textContent = "buenas noches";
    // }
}
 setInterval(ActualizarHora,1000);