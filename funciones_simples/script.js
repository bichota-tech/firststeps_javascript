
const btn = document.getElementById("btnfondo");
let fondo= true;
function cambiarFondo(){
    
   if(fondo){
    document.body.style.backgroundImage = 'url("imagenes/gijon.jpg")';
    
    }
    else {
        document.body.style.backgroundImage = 'url("imagenes/habana.jpg")';
    }
    fondo = !fondo;
}

btn.addEventListener("click", cambiarFondo);


function cambiarText(){
    document.querySelector("h1").textContent= "El texto ha sido cambiado exitosamente!";
}

function saludar() {
    const nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").textContent = `Hola, ${nombre}!`;
}

let cuenta = 0;
function sumar() {
    cuenta++;
    document.getElementById("contador").textContent = cuenta;
}

function toggleTexto() {
    const texto = document.getElementById("texto");
    texto.style.display = (texto.style.display === "none") ? "block" :
        "none";
}

function cambiarColor() {

    const colores = ["#FF5733", "#33FF57", "#3357FF", "#F5A623"];
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("change").style.backgroundColor = color;
}

let num = 10;
function restar() {
    if (num > 0) {
        num--;
        document.getElementById("cuenta").textContent = num;
    } else {
        document.getElementById("cuenta").textContent = "¡Fin del contador!";
    }
}

let grande = false;

function cambiarTamaño() {
    const texto = document.getElementById("texto");
    texto.style.fontSize = grande ? "16px" : "28px";
    grande = !grande;
}

function cambiarImagen() {
    const img = document.getElementById("imagen");
    img.src = (img.src.includes("imagenes/gijon.jpg")) ? "imagenes/habana.jpg" : "imagenes/gijon.jpg";
}

function doblar() {
    const valor = parseInt(document.getElementById("numero").value);
    document.getElementById("resultado").textContent = valor * 2;
}

function desaparecer() {
    document.getElementById("btn").style.display = "none";
    document.getElementById("mensaje").textContent = "¡Desaparecí como por arte de magia!";
}

const mensajes = [
    "¡Sigue así!",
    "Eres una crack del código",
    "¡JavaScript me quiere!",
    "Ya soy mejor que ayer"
];
function mensajeAleatorio() {
    const index = Math.floor(Math.random() * mensajes.length);
    document.getElementById("mensaje").textContent = mensajes[index];
}

