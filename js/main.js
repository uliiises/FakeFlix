const fila = document.querySelector('.contenedor_carousel');
const peliculas = document.querySelector('.pelicula');

const flecha_izq = document.getElementById('flecha_izq');
const flecha_der = document.getElementById('flecha_der');

/*------------------- EVENT LISTENER PARA FLECHA DERECHA -------------------*/

flecha_der.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth
});

/*------------------- EVENT LISTENER PARA FLECHA IZQUIERDA -------------------*/

flecha_izq.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth
});