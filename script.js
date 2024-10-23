/* 1° Carousel*/ 
const imagenes = [
    './img/img1.webp',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg'
];

let indice = 0; // Índice de la imagen actual
const contenedorImagenes = document.querySelector('.contenedor-imagenes');

// 1. funcion 'inicializar'
function initCarousel() {
    updateCarousel();
}

// 2. función:  'mover a la izquierda' 
function moveLeft() {
    indice = (indice - 1 + imagenes.length) % imagenes.length; // Movimiento circular hacia atrás
    updateCarousel();
}

// 3. función: 'mover a la derecha'
function moveRight() {
    indice = (indice + 1) % imagenes.length; // Movimiento circular hacia adelante
    updateCarousel();
}

// 4. función: 'actualizar la posición del carrusel'
function updateCarousel() {
    const offset = -indice * 100; 
    contenedorImagenes.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

// 5. Inicializar
initCarousel();



/*Carousel 2*/
const images = [
    "./imagen_2/OFERTAS/1.jpg",
    "./imagen_2/OFERTAS/2.webp",
    "./imagen_2/OFERTAS/3.webp",
    "./imagen_2/OFERTAS/4.webp",
    "./imagen_2/OFERTAS/5.webp",
    "./imagen_2/OFERTAS/6.webp",
    "./imagen_2/OFERTAS/7.webp",
    "./imagen_2/OFERTAS/8.webp",
    "./imagen_2/OFERTAS/9.webp",
    "./imagen_2/OFERTAS/10.webp"
];

let index = 0; 
const mostrarImg = 5; 
const totalImages = images.length; 

// 1.
function imagenesActuales() {
    const container = document.querySelector('.contenedor-imagenes-2');
    const totalGroups = Math.ceil(totalImages / mostrarImg); 
    const groupIndex = Math.floor(index / mostrarImg); 
    const offset = -groupIndex * (100 / totalGroups); 
    container.style.transform = `translateX(${offset}%)`; 
}

// 2. Función: mover a la izquierda (onclick="moverIzquierda()")
function moverIzquierda() {
    index -= mostrarImg; 
    if (index < 0) {
        index = totalImages - mostrarImg; 
    }
    imagenesActuales(); 
}

// 3. Función: mover a la derecha (onclick="moverIzquierda()")
function moverDerecha() {
    index += mostrarImg; 
    if (index >= totalImages) {
        index = 0; 
    }
    imagenesActuales(); 
}

// 4. Inicializa el carrusel 
imagenesActuales();




/*Confirmar formulario*/