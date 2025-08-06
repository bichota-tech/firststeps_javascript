
const toggleBtn = document.getElementById('iconoModo');
const body = document.body;
let modoOscuro = false;

function cambiarModo() {
    modoOscuro = !modoOscuro;

    body.classList.toggle('modo-oscuro');

    if (modoOscuro) {
        toggleBtn.src = 'imagenes/sol.png';
        toggleBtn.alt = 'Cambiar a modo claro';
    } else {
        toggleBtn.src = 'imagenes/luna.png';
        toggleBtn.alt = 'Cambiar a modo oscuro';
    } 
}

// Asociar la función al evento
toggleBtn.addEventListener('click', cambiarModo);
