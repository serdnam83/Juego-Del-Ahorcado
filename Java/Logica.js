let palabrasSecretas = ["CASA", "PERRO", "GATO", "COCHE", "AGUILA", "HALCON", "HTML", "PYTHON", "ARROZ", "AVION"];
let palabraSecreta = "";
let palabraSecretaOculta = "";
let palabraSecretaMostrada = "";
let cancel = false;
var letraIncorrecta = "";

// por medio de un evento "keypress" verifica que la tecla pulsada 
// sea una letra mayuscula y al cumplir la condicion llama a la funcion
// que verifica si la letra esta o no dentro de la palabra secreta
function check() {
    document.addEventListener("keypress", (event) => {
        let regex = /[A-Z]/g;
        const keyName = event.key;

        if (cancel == true) {
            // remueve el EventListener para detener la verificacion
            // de teclas pulsadas y asi detener el juego
            document.removeEventListener("keypress", this);
        } else {
            if (regex.test(keyName) && keyName.length == 1) {
                verificarFinJuego(keyName);

            } else {
                alert("Solo letras Mayusculas");
            }
        }
    })
}

// verifica si el numero de intentos es superior a los pasos
// necesarios para pintar el munheco, si false, llama a las 
// funciones que verifican si la letra pulsada esta dentro
// de la palabra secreta o no
function verificarFinJuego(keyName) {
    if (letraIncorrecta.length <= 8) {
        verificaLetra(keyName);
        evaluarLetraIncorrecta(keyName);
    }
}

// agrega la nueva palabra al array contenedor de las palabras
// por defecto
function agregarPalabra() {
    let campoAgregar = document.querySelector(".agregarPalabra");
    let campoMensaje = document.querySelector(".mensaje");
    palabrasSecretas.push(campoAgregar.value.toUpperCase());
    campoMensaje.innerText = "PALABRA AGREGADA";
    setTimeout(volver, 2000);
    campoAgregar.value = "";
    console.log(palabrasSecretas);
}

// escoje al azar una palbra dentro del array que contiene las palabras
// secretas por defecto 
function crearPalabraSecreta() {
    palabraSecreta = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
}

// reemplza los caracteres de la palabra secreta por guiones para
// ocultarlos del jugador
function mostrarGuiones() {
    palabraSecretaOculta = palabraSecreta.replace(/./g, "_ ");
    palabraSecretaMostrada = document.querySelector(".palabraSecreta");
    palabraSecretaMostrada.innerText = palabraSecretaOculta;
}

// funcion prototype para reemplazar las letras que son acertadas en 
// la cadena de guiones que esconde la palabra secreta
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

// funcion para verificar si la letra pulsada hace parte de la palabra
// secreta y si true llama a la funcion replaceAt para reemplazar la letra
// y mostrarla en la cadena de guiones
function verificaLetra(keyName) {
    let letras = palabraSecreta.split("");

    letras.forEach(function (letter, i) {
        if (keyName == letter) {
            palabraSecretaOculta = palabraSecretaOculta.replaceAt(i * 2, keyName);
        }
    })
    document.querySelector(".palabraSecreta").innerText = palabraSecretaOculta;
    verificarGanador(palabraSecretaOculta);
}

// funcion para verificar si la letra pulsada no hace parte de la palabra
// secreta, si true, verifica que dicha letra no este ya dentro de la cadena
// de letras incorrectas, si true la agrega a la cadena y muestra la nueva 
// cadena en el campo determinado 
function evaluarLetraIncorrecta(keyName) {
    let letras = palabraSecreta.split("");

    if (!letras.includes(keyName) && !letraIncorrecta.includes(keyName)) {
        alert("Letra Incorrecta\n\n" + "Letra: " + keyName);
        letraIncorrecta = letraIncorrecta + keyName;
        document.querySelector(".letraIncorrecta").value = letraIncorrecta;
        pintarMunheco(letraIncorrecta.length);
    }
}

// verifica si la palabra secreta ya se completo y si true dibuja en 
// canvas el anuncio "FELICIDADES GANASTE"
function verificarGanador(palabraSecretaOculta) {
    let palabraActual = palabraSecretaOculta.replace(/\s+/g, "");
    let letras = palabraSecreta;
    if (letras == palabraActual) {
        pincel.font = "25pt Montserrat";
        pincel.fillStyle = "blue";
        pincel.textAlign = "center";
        pincel.fillText("FELICIDADES!!", 450, 280);
        pincel.fillText("GANASTE!!", 450, 310);
    }
}

