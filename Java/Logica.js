let palabrasSecretas = ["CASA", "PERRO", "GATO", "COCHE", "AGUILA", "HALCON", "HTML", "PYTHON", "ARROZ", "AVION"];
let palabraSecreta = "";
let palabraSecretaOculta = "";
let palabraSecretaMostrada = "";
var letraIncorrecta = "";

function check() {
    let inLetra = document.addEventListener("keydown", (event) => {
        let regex = /[A-Z]/g;
        const keyName = event.key;

        if (regex.test(keyName) && keyName.length == 1) {
            verificaLetra(keyName);
            evaluarLetraIncorrecta(keyName);

        } else {
            alert("Solo letras Mayusculas");
        }
    })
}

function crearPalabraSecreta() {
    palabraSecreta = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)];
    return palabraSecreta;
}

function mostrarGuiones() {
    palabraSecretaOculta = palabraSecreta.replace(/./g, "_ ");
    palabraSecretaMostrada = document.getElementById("palabraSecreta");
    palabraSecretaMostrada.innerHTML = palabraSecretaOculta;
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function verificaLetra(keyName) {

    //let inLetra = document.addEventListener("keydown", (event) => {
    //const keyName = event.key;
    let letras = palabraSecreta.split("");

    letras.forEach(function (letter, i) {
        if (keyName == letter) {
            palabraSecretaOculta = palabraSecretaOculta.replaceAt(i * 2, keyName.toUpperCase());
        }
    })
    document.getElementById("palabraSecreta").innerHTML = palabraSecretaOculta;
    //});

}

function evaluarLetraIncorrecta(keyName) {    
    //let inLetra = document.addEventListener("keydown", (event) => {
    //const keyName = event.key;
    let letras = palabraSecreta.split("");

    if (!letras.includes(keyName)) {
        alert("Letra Incorrecta\n\n" + "Letra: " + keyName);
        letraIncorrecta = letraIncorrecta + keyName;
        pintarMunheco(letraIncorrecta.length);
    }

    document.getElementById("letraIncorrecta").innerHTML = letraIncorrecta;
    //});


}





