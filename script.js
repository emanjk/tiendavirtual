                            /* 1° Carousel*/ 

const imagenes = [
    './img/img1.webp',
    './img/img2.jpg',
    './img/img3.jpg',
    './img/img4.jpg'
];

let indice = 0; 
const contenedorImagenes = document.querySelector('.contenedor-imagenes');

// 1. funcion 'inicializar'
function initCarousel() {
    updateCarousel();
}

// 2. función:  'mover a la izquierda' 
function moveLeft() {
    indice = (indice - 1 + imagenes.length) % imagenes.length; 
    updateCarousel();
}

// 3. función: 'mover a la derecha'
function moveRight() {
    indice = (indice + 1) % imagenes.length; 
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




                        /*Validar formulario 'miCuenta'*/

// 1. Funcion 'Mostrar Contraseña'                           
function seePassword(){
    const verContraseña = document.querySelector('#alternarContraseña');
    const caja = document.querySelector('#alternarCheckbox');

    //cambiamos el campo contraseña, visible

    if(caja.checked){
        verContraseña.type = "text"; // Cambiamos a 'type="text'
    }else{
        verContraseña.type= "password";
    }
}


// 2. Funcion 'Validar Formulario'
function validarFormulario() {
    /*para el email*/
    const email = document.getElementById('email').value.trim();/*importante '.value.trim()*/ 
    const emailExpRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
    const mensajeDeError = document.querySelector('#mensajeErrorEmail'); 
    
    /*para la contraseña*/
    const contraseña =  document.getElementById('alternarContraseña').value.trim(); /*importante '.value.trim()*/  
    const mensajeErrorPass = document.querySelector('#mensajeErrorPass');

    let valido = true;

    // validar email
    if (emailExpRegular.test(email)) {
        mensajeDeError.style.display = 'none';
    
    } else {
        mensajeDeError.style.display = 'block'; // Muestra el mensaje de error
        mensajeDeError.textContent = 'Introduzca una dirección válida de correo electrónico (Ej: johndoe@domain.com).';
        valido= false; // Evita el envío del formulario
    }



    //validar password
    if(contraseña===""){
        mensajeErrorPass.style.display = 'block';
        mensajeErrorPass.textContent='Campo obligatorio.';
        valido =false;
    }else{
        mensajeErrorPass.style.display = 'none';
    }
    
    return valido;
}


                        /*Validar formulario 'crearCuenta'*/ 

function validarFormulario2() {
    let valido = true; // el tipo de retorno

    /* validar campo nombre */
    const nombre = document.getElementById('nombre').value.trim();
    const mensajeErrorNombre = document.getElementById('mensajeErrorNombre');
    if (nombre === "") {
        mensajeErrorNombre.style.display = 'block';
        mensajeErrorNombre.textContent = 'El nombre es obligatorio.';
        valido = false;
    } else {
        mensajeErrorNombre.style.display = 'none';
    }

    /* validar campo apellidos */
    const apellido = document.getElementById('Apellido').value.trim();
    const mensajeErrorApellido = document.getElementById('mensajeErrorApellido');
    if (apellido === "") {
        mensajeErrorApellido.style.display = 'block';
        mensajeErrorApellido.textContent = 'Los apellidos son obligatorios.';
        valido = false;
    } else {
        mensajeErrorApellido.style.display = 'none';
    }

    /* validar campo correo-email */
    const correo = document.getElementById('correo').value.trim();
    const emailExpRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para el formato del email
    const mensajeErrorCorreo = document.getElementById('mensajeErrorCorreo');
    if (correo === "") {
        mensajeErrorCorreo.style.display = 'block';
        mensajeErrorCorreo.textContent = 'El correo electrónico es obligatorio.';
        valido = false;
    } else if (!emailExpRegular.test(correo)) {
        mensajeErrorCorreo.style.display = 'block';
        mensajeErrorCorreo.textContent = 'Introduzca una dirección válida de correo electrónico (Ej: johndoe@domain.com).';
        valido = false;
    } else {
        mensajeErrorCorreo.style.display = 'none';
    }

    /* validar campo password */
    const passw = document.getElementById('passw').value.trim();
    const mensajeErrorPassw = document.getElementById('mensajeErrorPassw');
    if (passw === "") {
        mensajeErrorPassw.style.display = 'block';
        mensajeErrorPassw.textContent = 'La contraseña es obligatoria.';
        valido = false;
    } else {
        mensajeErrorPassw.style.display = 'none';
    }

    /* validar campo 'confirmar contraseña' */
    const confirmarPassw = document.querySelector('input[type="password"]:nth-child(2)').value.trim();
    if (passw !== confirmarPassw) {
        mensajeErrorPassw.style.display = 'block';
        mensajeErrorPassw.textContent = 'Las contraseñas no coinciden.';
        valido = false;
    }

    /* validar campo telefono */
    const telefono = document.getElementById('telefono').value.trim();
    const mensajeErrorTelefono = document.getElementById('mensajeErrorTelefono');
    const telefonoExpRegular = /^\d{10,12}$/; // Acepta números de 10 a 12 dígitos
    if (telefono === "") {
        mensajeErrorTelefono.style.display = 'block';
        mensajeErrorTelefono.textContent = 'El número de teléfono es obligatorio.';
        valido = false;
    } else if (!telefonoExpRegular.test(telefono)) {
        mensajeErrorTelefono.style.display = 'block';
        mensajeErrorTelefono.textContent = 'El número de teléfono debe tener entre 10 y 12 dígitos.';
        valido = false;
    } else {
        mensajeErrorTelefono.style.display = 'none';
    }

    return valido; // Retorna true si todo es válido, o false si hay errores antes de enviar.
}