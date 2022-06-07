// ocultar botones y mostrar canvas y textarea donde apareceran
// las letras para dar efecto de cambio de pantalla
function iniciarJuego() {
    let textAreas = document.querySelector(".areasDeTexto");
    let divPizarra = document.querySelector(".areaDibujo");
    let btnIniciar = document.querySelector(".btnIniciar");
    let btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
    let btnCancelar = document.querySelector(".btnCancelar");
    let pizarra = document.getElementById("pizarra");
    let pincel = pizarra.getContext("2d");
    document.querySelector(".letraIncorrecta").value = "";
    textAreas.classList.remove("oculto");
    divPizarra.classList.remove("oculto");
    pincel.fillStyle = ("rgb(0,0,0)");
    pincel.fillRect(0, 0, 600, 500);
    btnIniciar.classList.add("oculto");
    btnAgregarPalabra.classList.add("oculto");
    btnCancelar.classList.remove("oculto");
    cancel = false;
    letraIncorrecta = "";
}

// cancela el juego y devuelve a la "pantalla inicial"
function cancelar() {
    let textAreas = document.querySelector(".areasDeTexto");
    let pizarra = document.querySelector(".areaDibujo");
    let btnIniciar = document.querySelector(".btnIniciar");
    let btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
    let btnCancelar = document.querySelector(".btnCancelar");
    textAreas.classList.add("oculto");
    pizarra.classList.add("oculto");
    btnIniciar.classList.remove("oculto");
    btnAgregarPalabra.classList.remove("oculto");
    btnCancelar.classList.add("oculto");
    pincel.clearRect(0, 0, 600, 500);
    cancel = true;
}

// oculta botones de inicio y muestra textarea donde se
//ingresa la nueva palabra para dar efecto de cambio de pantalla
function iniciarAgregarPalabra() {
    let campos = document.querySelector(".camposAgregarPalabra");
    let campoMensaje = document.querySelector(".mensaje");
    let campoAgregar = document.querySelector(".agregarPalabra");
    let btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
    let btnIniciar = document.querySelector(".btnIniciar");
    let btnAgregar = document.querySelector(".btnAgregar");
    campoMensaje.innerText = "";
    campos.classList.remove("oculto");
    campoAgregar.focus();
    btnAgregarPalabra.classList.add("oculto");
    btnIniciar.classList.add("oculto");
    btnAgregar.classList.remove("oculto");
}

// oculta los campos de agregar palabra y muestra los botones
// de inicio dando sensacion de cambio de pantalla
function volver() {
    let campos = document.querySelector(".camposAgregarPalabra");
    let btnAgregar = document.querySelector(".btnAgregar");
    let btnIniciar = document.querySelector(".btnIniciar");
    let btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
    campos.classList.add("oculto");
    btnAgregar.classList.add("oculto");
    btnIniciar.classList.remove("oculto");
    btnAgregarPalabra.classList.remove("oculto");
}

