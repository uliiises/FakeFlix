const fila = document.querySelector('.contenedor_carousel');
const fila2 = document.querySelector('.contenedor_carousel_serie');
const peliculas = document.querySelectorAll('.pelicula');
const series = document.querySelectorAll('.serie');

const flecha_izq = document.getElementById('flecha_izq');
const flecha_der = document.getElementById('flecha_der');

const flecha_izq2 = document.getElementById('flecha_izq2');
const flecha_der2 = document.getElementById('flecha_der2');

/*------------------- EVENT LISTENER PARA FLECHA DERECHA -------------------*/

/*EVENLISTENER FLECHA DERECHA DE CONTENEDOR DE PELICULAS*/
flecha_der.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	/*ASIGNACION DE INDICADOR ACTIVO EN BOTONES DE CAROUSEL AL PRESIONAR FLECHA DERECHA*/
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.nextSibling) { /*CONDICION DE ELEMENTO A LA DERECHA EN EL INDICADOR ACTIVO*/
		indicadorActivo.nextSibling.classList.add('activo'); /*ACTIVAR EL SIGUIENTE BOTON*/
		indicadorActivo.classList.remove('activo'); /*DESACTIVAR BOTON ANTERIOR*/
	}
});

/*EVENLISTENER FLECHA DERECHA DE CONTENEDOR DE SERIES*/
flecha_der2.addEventListener('click', () => {
	fila2.scrollLeft += fila.offsetWidth;

	/*ASIGNACION DE INDICADOR ACTIVO EN BOTONES DE CAROUSEL AL PRESIONAR FLECHA DERECHA*/
	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if (indicadorActivo.nextSibling) { /*CONDICION DE ELEMENTO A LA DERECHA EN EL INDICADOR ACTIVO*/
		indicadorActivo.nextSibling.classList.add('activo'); /*ACTIVAR EL SIGUIENTE BOTON*/
		indicadorActivo.classList.remove('activo'); /*DESACTIVAR BOTON ANTERIOR*/
	}
});

/*------------------- EVENT LISTENER PARA FLECHA IZQUIERDA -------------------*/

/*EVENLISTENER FLECHA IZQUIERDA DE CONTENEDOR DE PELICULAS*/
flecha_izq.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.previousSibling) { /*CONDICION DE ELEMENTO A LA DERECHA EN EL INDICADOR ACTIVO*/
		indicadorActivo.previousSibling.classList.add('activo'); /*ACTIVAR EL SIGUIENTE BOTON*/
		indicadorActivo.classList.remove('activo'); /*DESACTIVAR BOTON ANTERIOR*/
	}
});


/*EVENLISTENER FLECHA IZQUIERDA DE CONTENEDOR DE SERIES*/
flecha_izq2.addEventListener('click', () => {
	fila2.scrollLeft -= fila.offsetWidth;

	/*ASIGNACION DE INDICADOR ACTIVO EN BOTONES DE CAROUSEL AL PRESIONAR FLECHA DERECHA*/
	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if (indicadorActivo.nextSibling) { /*CONDICION DE ELEMENTO A LA DERECHA EN EL INDICADOR ACTIVO*/
		indicadorActivo.nextSibling.classList.add('activo'); /*ACTIVAR EL SIGUIENTE BOTON*/
		indicadorActivo.classList.remove('activo'); /*DESACTIVAR BOTON ANTERIOR*/
	}
});



/*------------------- PAGINACION -------------------*/
/*PAGINACION DE PELICULAS*/
/*Math.ceil -> METODO PARA REDONDEAR EL RESULTADO*/
const numeroPaginas = Math.ceil(peliculas.length/5);
for (let i = 0; i < numeroPaginas; i++) { /*CONDICION DE NUMERO DE PAGINAS*/
	const indicador = document.createElement('button'); /*CREACION DE BOTON*/

	if (i=== 0) { /*CONDICIONAL DE INDICADOR ACTIVO DE CSS*/
		indicador.classList.add('activo');
	}
	document.querySelector('.indicadores').appendChild(indicador); /*ASIGNACION DE CONTENEDOR "indicadores" */
	/*ASIGNACION DE EVENTO DE CLICK*/
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth; /*CAMBIO DE PAGINA DE CAROUSEL*/

		/*BOTON DE INDICADOR ACTIVO AL PRESIONAR EL BOTON SUPERIOR DERECHO DE PAGINA*/
		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}


/*PAGINACION DE SERIES*/
/*Math.ceil -> METODO PARA REDONDEAR EL RESULTADO*/
const numeroPaginas2 = Math.ceil(series.length/5);
for (let i = 0; i < numeroPaginas2; i++) { /*CONDICION DE NUMERO DE PAGINAS*/
	const indicador2 = document.createElement('button'); /*CREACION DE BOTON*/

	if (i=== 0) { /*CONDICIONAL DE INDICADOR ACTIVO DE CSS*/
		indicador2.classList.add('activo');
	}
	document.querySelector('.indicadores2').appendChild(indicador2); /*ASIGNACION DE CONTENEDOR "indicadores2" */
	/*ASIGNACION DE EVENTO DE CLICK*/
	indicador2.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth; /*CAMBIO DE PAGINA DE CAROUSEL*/

		/*BOTON DE INDICADOR ACTIVO AL PRESIONAR EL BOTON SUPERIOR DERECHO DE PAGINA*/
		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

/*------------------- HOVER -------------------*/
/*HOVER DE CARRETE DE PELICULAS*/
peliculas.forEach((pelicula) => {
	/*Se selecciona cada pelicula para que al momento de pasar el cursor obtenga el elemento*/
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			/*Buscar todas las peliculas para eliminar el hover que no está seleccionado*/
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

/*EVENTO PARA QUITAR LA SELECCION A LA IMAGEN AL QUITAR EL MOUSE*/
fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


/*HOVER DE CARRETE DE SERIES*/
series.forEach((serie) => {
	/*Se selecciona cada serie para que al momento de pasar el cursor obtenga el elemento*/
	serie.addEventListener('mouseenter', (e) => {
		const elemento2 = e.currentTarget;
		setTimeout(() => {
			/*Buscar todas las series para eliminar el hover que no está seleccionado*/
			series.forEach(serie => serie.classList.remove('hover'));
			elemento2.classList.add('hover');
		}, 300);
	});
});

/*EVENTO PARA QUITAR LA SELECCION A LA IMAGEN AL QUITAR EL MOUSE*/
fila2.addEventListener('mouseleave', () => {
	series.forEach(serie => serie.classList.remove('hover'));
});

/*tutorial: https://www.youtube.com/watch?v=1ukG4FTmdWQ */