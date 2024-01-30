let contador = 0;

// Almacenar referencias a elementos utilizados frecuentemente
const ventanaEmergente = document.querySelector('.ventanaemergente');
const alaverga = document.querySelector('.alaverga');
const intentosElement = document.querySelector('.intentos');
const signinButton = document.querySelector('.signin');
const lockIcon = document.querySelector('.lock');

function comprobar() {
    contador++;
    error();
}

function error() {
    if (contador === 1) {
        mostrarEmergente("left 2 attempts");
    } else if (contador === 2) {
        mostrarEmergente("left 1 attempt");
    } else if (contador === 3) {
        mostrarEmergente("You have reached the maximum number of login attempts. The system is locked.");
        bloquearSistema();
    }
}

function mostrarEmergente(mensaje) {
    // Apply styles to the entire body
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.514)";
    
    // Set the message
    intentosElement.textContent = mensaje;
    
    // Show the modal overlay
    ventanaEmergente.style.display = "flex";
    alaverga.style.display = "flex";
}
// function bloquearSistema() {
//     intentosElement.style.display = "none";
//     ventanaEmergente.style.display = "flex";
//     alaverga.style.display = "flex";
//     signinButton.style.backgroundColor = "#091717";
//     signinButton.style.cursor = "not-allowed";
//     lockIcon.style.visibility = "visible";
// }
function bloquearSistema() {
    // Apply styles to the entire body
    document.body.style.backgroundColor = "#091717";
    document.body.style.cursor = "not-allowed";

    // Show the modal overlay
    ventanaEmergente.style.display = "flex";
    alaverga.style.display = "flex";

    // Optionally, you can hide or modify other elements if needed
    intentosElement.style.display = "none";
}

function cerrarEmergente() {
    // Reset styles for the entire body
    document.body.style.backgroundColor = "";

    // Hide the modal overlay
    ventanaEmergente.style.display = "none";
    alaverga.style.display = "none";
}
