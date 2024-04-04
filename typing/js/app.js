/*
 * Lógica para simular el efecto de typing (máquina de escribir) utilizando JavaScript
 */

// Obtener el elemento span con la clase "text-type"
let textTypeElement = document.querySelector('.text-type');

// Definir las cadenas de texto a mostrar
let strings = ["Programador", "Desarrollador de Software", "Ingeniero Informático"];

// Definir la velocidad de escritura y borrado
let typeSpeed = 150;
let backSpeed = 150;

// Variable para seguir el índice de la cadena actual
let index = 0;

// Función para escribir el texto
function type() {
    // Verificar si hemos alcanzado el final de las cadenas, si es así, reiniciar el índice
    if (index >= strings.length) {
        index = 0;
    }
    
    // Obtener la cadena actual
    let currentString = strings[index];
    
    // Obtener el texto actual del elemento span
    let currentText = textTypeElement.textContent;
    
    // Verificar si hemos escrito completamente la cadena actual
    if (currentText.length < currentString.length) {
        // Si no, añadir el siguiente carácter de la cadena al texto actual
        textTypeElement.textContent = currentString.substring(0, currentText.length + 1);
        // Llamar a la función type nuevamente después del tiempo de typeSpeed
        setTimeout(type, typeSpeed);
    } else {
        // Si ya hemos escrito completamente la cadena actual, empezar a borrar el texto
        setTimeout(erase, 1000);
    }
}

// Función para borrar el texto
function erase() {
    // Obtener el texto actual del elemento span
    let currentText = textTypeElement.textContent;
    
    // Verificar si ya hemos borrado todo el texto
    if (currentText.length === 0) {
        // Si es así, incrementar el índice y empezar a escribir la siguiente cadena
        index++;
        setTimeout(type, 500);
    } else {
        // Si no, borrar el último carácter del texto actual
        textTypeElement.textContent = currentText.substring(0, currentText.length - 1);
        // Llamar a la función erase nuevamente después del tiempo de backSpeed
        setTimeout(erase, backSpeed);
    }
}

// Iniciar el efecto de escritura
type();