var pantalla = document.getElementById("pantalla"), botones = document.getElementById("botones")
var estadoOperacion = false, numero1 = '0', operacion = ''
pantalla.textContent = '0'

function calculadora() {
    if (!botones) return
    botones.addEventListener('click', function hola(e) {

        console.log(e);
        var elemento = e.target, elTipoDeElemento = t.dataset
        // Detectar si se pulsó un número
        // if (d.number) console.log('number')
        if (d.number) escribirEnPantalla(d.number)
        // Detectar si se pulsó una operación matemática
        // if (d.math) console.log('math')
        if (d.math) getSigno(t, d.math)
        // Detectar si se pulsó otra operación
        // if (d.operation) console.log('operation')
        if (d.operation) ejecutar(d.operation)
    })
}

function escribirEnPantalla(num) {
    // pantalla.innerHTML = num
    // pantalla.textContent = num
    // pantalla.textContent += num
    // pantalla.textContent == '0'

    // Esto es antes de validar el punto

    // pantalla.textContent == '0' || estadoOperacion
    //     ? pantalla.textContent = num 
    //     : pantalla.textContent += num
    // estadoOperacion =false

    // Esto es para cuando quiera validar el punto

    pantalla.textContent == '0' || estadoOperacion
        ? pantalla.textContent = num
        : num == '.' && !pantalla.textContent.includes('.')
            ? pantalla.textContent += num
            : num != '.'
                ? pantalla.textContent += num
                : null

    estadoOperacion =false
}

function getSigno(elemento, signo) {
    // pantalla.textContent = elemento.textContent
    // pantalla.textContent = elemento.textContent
    // var operacion = signo
    // var numero1 = pantalla.textContent
    estadoOperacion = true
    // var numero1 = Number(pantalla.textContent)
    // var operacion = signo
    numero1 = Number(pantalla.textContent)
    operacion = signo
    pantalla.textContent = elemento.textContent
    // return {numero1, operacion}
}

function getResultado() {
    // var numero2 = pantalla.textContent
    // Hasta aqui funciona raro, ahora viene el flag de estado
    var numero2 = Number(pantalla.textContent)
    switch (operacion) {
        case 'suma':
            pantalla.textContent = numero1 + numero2
            break;
        case 'resta':
            pantalla.textContent = numero1 - numero2
            break;
        case 'mult':
            pantalla.textContent = numero1 * numero2
            break;
        case 'div':
            // Validacion division entre 0
            pantalla.textContent = numero1 / numero2 === Infinity 
                                                    ? 'Error, división entre 0' 
                                                    : (numero1 / numero2).toFixed(2)
            break;
        default:
            break;
    }
}

function ejecutar(operacion) {
    operacion === 'borrar' ? 
        pantalla.textContent = '0' 
        : getResultado()

    //  Para cuando haga una operacion y no se borren los caracteres:
    estadoOperacion = true
}

calculadora()