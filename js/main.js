let btnIniciar = document.querySelector(".btnIniciar");
let btnAgregarPalabra = document.querySelector(".btnAgregarPalabra");
let btnCancelar = document.querySelector(".btnCancelar");
let btnAgregar = document.querySelector(".btnAgregar");

// inicia el juego
btnIniciar.addEventListener("click", function(){
    let iniciar = iniciarJuego(); 
    let palabraSecreta = crearPalabraSecreta();
    let palabraSecretaOculta = mostrarGuiones();
    let checkIn = check();
})

// oculta y muestra elementos para dar sensacion de 
// cambio a la pantalla para agregar una nueva palabra
btnAgregarPalabra.addEventListener("click", function(){
    let agregar = iniciarAgregarPalabra();    
})

// cancela el juego y oculta y muestra elementos para dar
// sensacion de retorno a la pantalla de inicio
btnCancelar.addEventListener("click", function(){
    let cancel = cancelar();       
})

// agrega la nueva palabra al array contenedor de la palabras
// secretas por defecto y retorna a la pantalla de inicio
btnAgregar.addEventListener("click", function(){
    let agregar = agregarPalabra();    
})