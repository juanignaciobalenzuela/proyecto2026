const botoncuadrado = document.querySelector('.boton');

botoncuadrado.addEventListener("click", () => {

    window.location.href = "gestionar.html"; 
});

const botoncuadrado1 = document.querySelector('.boton2');

botoncuadrado1.addEventListener("click", () => {

window.location.href = "tierra.html";

});


const contenedor = document.getElementById('ayudaa');
const encabezado = contenedor.querySelector('.encabezado');


encabezado.addEventListener('click', () => {
    
    if (contenedor.classList.contains('activo')) {
        contenedor.classList.remove('activo');
    } else {
        contenedor.classList.add('activo');
    }
    
});
