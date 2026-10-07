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
const contenido = contenedor.querySelector('.contenido');

encabezado.addEventListener('click', () => {
    if (contenedor.classList.contains('activo')) {
        contenedor.classList.remove('activo');
        contenido.style.position = 'initial';
        contenido.style.marginTop = '0px';
    } else {
        contenedor.classList.add('activo');
        contenido.style.position = 'fixed';
        contenido.style.top = '50%';
        contenido.style.left = '50%';
        contenido.style.transform = 'translate(-50%, -50%)';
        contenido.style.zIndex = '9999'; 
        contenido.style.width = '48rem'; 
        contenedor.querySelector('.pregunta1').style.fontSize = '18px'; 
        contenedor.querySelector('.pregunta1').style.backgroundColor = '#ffffff'; 
        contenedor.querySelector('.pregunta1').style.boxShadow = '0px 10px 20px rgba(0,0,0,0.2)'; 
        contenido.style.marginLeft = '-29rem';
        contenido.style.marginTop = '-2vh'; 
    }
});


