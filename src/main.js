// Aquí va el código DOM, el que muestra datos en la pantalla 
//(operaciones como creación de nodos, manejadores de eventos como event listeners..)


// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

import { example, ordenarPeliculasAZ, ordenarPeliculasZA, ordenarPeliculasAño, ordenarPeliculasPuntaje} from './data.js';
import { example2,  } from './data.js';

////////////////////////////////////////////////////////////////////////////-----
// Con JS tomamos la data y la mostramos en HTML:
function movie(id, titulo, imagenPoster) { // La funcion 'movie' recibe 3 parámetros: id, título e imagen. Esta función genera un string en HTML 
  const poster = `<div class="container">
    <img class="img-normalizada" id="${id}" src="${imagenPoster}" alt="poster"> 
    <div class="overlay" onclick="window.location.href='${titulo}.html'">
    <p>${titulo}</p>
    </div>
    </div>`; //Usamos "${}" para que se agregue el dato(valor) que corresponda en cada caso.
    return poster; // Y finalmente tenemos en pantalla la imagen del poster con el título de la película. 
}

const posters = []; // lista para los posters
for (const pelicula of listaPeliculas) { // recorre la lista de películas y por cada una se crea un poster
  // ahora se agrega cada poster a la lista de posters
  posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // .push agrega uno o más elementos al final de un array existente 
}

//  lista de posters al div escenario
const escenario = document.getElementById('escenario'); 
escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario

/////////////////////////////////////////////////////// ORDENAR POR
const ordenarPor = document.getElementById('ordenar');
ordenarPor.addEventListener('change', function () { // el 'change' se pone por defecto para la lista despegable 
    const valor = ordenar.value; // primero escucha si es az, za, año o puntaje del html 
    const escenario = document.getElementById('escenario'); // segundo, obtiene el id 'escenario' que encuentra en el html
    escenario.innerHTML = ''; // y tercero, limpia el escenario para que se pueda actualizar el nuevo contenido dinámico.
    //y ahora ordena la lista de películas dependiendo de lo que se seleccione:
    let posters = []
    if (valor === 'az') {
      const peliculasOrdenadasAZ = ordenarPeliculasAZ(data)
      console.log(peliculasOrdenadasAZ)
    // escenario.innerHTML = ''; // y tercero, limpia el escenario para que se pueda actualizar el nuevo contenido dinámico.
    // let posters = [];
    for (const pelicula of peliculasOrdenadasAZ) { // Esta listaPeliculas ya viene ordenada según lo seleccionado en el ordenar por 
      posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // se agrega el poster a la página  
    }
    escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario
    // return
    // listaPeliculas.sort(function (a, b) { //.sort organiza los elementos del arreglo según el valor.
    //   if (a.title > b.title) { // el 'title' lo tomo de la data
    //     return 1;
    //   }
    //   if (a.title < b.title) {
    //     return -1;
    //   }
    //   return 0;
    // });
  } else if (valor === 'za') {
    const peliculasOrdenadasZA = ordenarPeliculasZA(data)
    console.log(peliculasOrdenadasZA)
    // escenario.innerHTML = '';
    // let posters = [];
    for (const pelicula of peliculasOrdenadasZA) {
      posters.push(movie(pelicula.id, pelicula.title, pelicula.poster));
    }
    escenario.innerHTML = posters.join('');
    // return
    // listaPeliculas.sort(function (a, b) {
    //   if (a.title < b.title) { // el 'title' lo tomo de la data
    //     return 1;
    //   }
    //   if (a.title > b.title) {
    //     return -1;
    //   }
    //   return 0;
    // });
  }  else if (valor === 'año') {
    const peliculasOrdenadasAño = ordenarPeliculasAño(data)
    console.log(peliculasOrdenadasAño)
    // escenario.innerHTML = '';
    // let posters = [];
    for (const pelicula of peliculasOrdenadasAño) {
      posters.push(movie(pelicula.id, pelicula.title, pelicula.poster));
    }
    escenario.innerHTML = posters.join('');
    // return
    // listaPeliculas.sort(function (a, b) {
    //   if (a.release_date > b.release_date) { // el 'release_date' lo tomo de la data
    //     return 1;
    //   }
    //   if (a.release_date < b.release_date) {
      //     return -1;
      //   }
      //   return 0;
      // });

  }  else if (valor === 'puntaje') {
    const peliculasOrdenadasPuntaje = ordenarPeliculasPuntaje(data) 
    console.log(peliculasOrdenadasPuntaje)
    // escenario.innerHTML = '';
    // let posters = [];
    for (const pelicula of peliculasOrdenadasPuntaje) {
      posters.push(movie(pelicula.id, pelicula.title, pelicula.poster));
    }
    escenario.innerHTML = posters.join('');
    // return
    // listaPeliculas.sort(function (a, b) {
      //   if (a.rt_score > b.rt_score) { // el 'rt_score' lo tomo de la data
    //     return 1;
    //   }
    //   if (a.rt_score < b.rt_score) {
    //     return -1;
    //   }
    //   return 0;
    // });
  }  
  // Ahora se hace una nueva lista de posters ordenada segun lo indicado en el ordenar por:
  for (const pelicula of listaPeliculas) { // Esta listaPeliculas ya viene ordenada según lo seleccionado en el ordenar por 
    posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // se agrega el poster a la página  
  }
  escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario
}
);

/////////////////////////////////////////////////////// BARRA DE BUSQUEDA
const boton = document.getElementById('searchButton')
boton.addEventListener('click', function () {
  const arrayFilms = data['films'] //
  const arrayFiltrado = arrayFilms.filter(a => a.title.toLowerCase().includes(searchInput.value)) // 
  let arrayTitulos = arrayFiltrado.map(a => a.title)
  escenario.innerHTML = arrayTitulos;
  let elementoHTMLEnString = `<h1> ${arrayTitulos} </h1>`
  escenario.innerHTML = elementoHTMLEnString;

    let posters = [];
  for (const pelicula of arrayFiltrado) {  
    posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // se agrega el poster a la página  
  }
  escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario

})
