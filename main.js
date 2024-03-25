// Función para redireccionar a una URL específica
function enlace(url) {
    window.location.href = url;
}

// Función para actualizar la hora en tiempo real
function ActualizarHora() {
    // Obtener la fecha y hora actual
    let fecha = new Date();
    // Obtener los segundos, minutos y horas actuales y formatearlos
    let segundos = fecha.getSeconds().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
    let horas = fecha.getHours().toString();
    let ampm;

    // Obtener los elementos del DOM donde se mostrarán los datos de la hora
    let elementoHoras = document.getElementById("pHoras");
    let elementoMinutos = document.getElementById("pMinutos");
    let elementoSegundos = document.getElementById("pSegundos");
    let elementoAmPm = document.getElementById("am-pm");

    // Convertir las horas al formato de 12 horas y determinar si es a.m. o p.m.
    horas = horas % 12;
    horas = horas ? horas : 12;
    ampm = horas >= 12 ? " a.m." : " p.m.";

    // Actualizar los elementos del DOM con los nuevos valores de hora
    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;
    elementoAmPm.textContent = ampm;
}

// Llamar a la función ActualizarHora cada segundo
setInterval(ActualizarHora, 1000);
