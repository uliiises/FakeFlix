const fila = document.querySelector('.contenedor_carousel');
const peliculas = document.querySelectorAll('.pelicula');

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

/*------------------- PAGINACION -------------------*/
/*Math.ceil -> METODO PARA REDONDEAR EL RESULTADO*/
const numeroPaginas = Math.ceil(peliculas.length/5);
for (let i = 0; i < numeroPaginas; i++) { /*CONDICION DE NUMERO DE PAGINAS*/
	const indicador = document.createElement('button'); /*CREACION DE BOTON*/

	if (i=== 0) { /*CONDICIONAL DE INDICADOR ACTIVO DE CSS*/
		indicador.classList.add('activo');
	}
	document.querySelector('.indicadores').appendChild(indicador); /*SELECCION DE CONTENEDOR "indicadores" */
	indicador.addEventListener('click', (e) =>{
		fila.scrollLeft = i * fila.offsetWidth;
	})
}