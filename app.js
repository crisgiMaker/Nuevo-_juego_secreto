let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1)  ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario'). value = ''; //la forma reducida es de esta manera
    //valorCaja = ''; tambien peude ser de esta forma
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
//si generamos el numero sorteado numero maximo
    if (listaNumeroSorteados.length == numeroMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

        if(listaNumeroSorteados.includes(numeroGenerado)) { 
            return generarNumeroSecreto;
        }else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Numero Secret');
    asignarTextoElemento('p', `Escoja un numero de 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar numero de intervalos del 1 al 10
    condicionesIniciales();
    //generar el numero aleatorio
    //iniciar le numero de intentos
    
    //deshabilitar el boton juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();