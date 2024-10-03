// Validación del formulario de suscripción con efectos visuales
const form = document.getElementById('subscribeForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    if (nombre.value && correo.value) {
        alert(`Gracias por suscribirte, ${nombre.value}!`);
        form.reset();
        nombre.style.border = '2px solid #28a745'; // Verde
        correo.style.border = '2px solid #28a745'; // Verde
    } else {
        alert('Por favor, complete todos los campos.');
        if (!nombre.value) nombre.style.border = '2px solid #dc3545'; // Rojo
        if (!correo.value) correo.style.border = '2px solid #dc3545'; // Rojo
    }
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto hover en productos destacados
const productos = document.querySelectorAll('.producto');
productos.forEach(producto => {
    producto.addEventListener('mouseenter', function () {
        this.style.border = '2px solid #ca5d1e';
        this.style.transform = 'scale(1.05)';
    });
    producto.addEventListener('mouseleave', function () {
        this.style.border = 'none';
        this.style.transform = 'scale(1)';
    });
});

// Mostrar/Ocultar testimonios
const toggleButton = document.getElementById('toggle-testimonios');
const testimoniosOcultos = document.querySelectorAll('#testimonios-list .testimonial:nth-child(n+2)');
toggleButton.addEventListener('click', () => {
    testimoniosOcultos.forEach(testimonial => {
        if (testimonial.style.display === 'none') {
            testimonial.style.display = 'flex';
            toggleButton.textContent = 'Mostrar menos';
        } else {
            testimonial.style.display = 'none';
            toggleButton.textContent = 'Mostrar más';
        }
    });
});

// Selecciona todas las categorías
const categorias = document.querySelectorAll('.categoria');

// Añade interactividad a cada categoría
categorias.forEach(categoria => {
    categoria.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#97624457'; 
        this.style.transform = 'scale(1.05)'; 
    });

    categoria.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#fff'; 
        this.style.transform = 'scale(1)'; 
    });
});
