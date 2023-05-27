import { example, ordenarPeliculasAZ } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

// Ahora con JS tomamos la data y la mostramos en HTML:
function movie(id, titulo, imagenPoster) { // La funcion 'movie' recibe 3 parámetros: id, título e imagen. Esta función genera un string en HTML 
  const poster = `<div class="container">
    <img class="img-normalizada" id="${id}" src="${imagenPoster}" alt="poster"> 
    <div class="overlay" onclick="window.location.href='${titulo}.html'">
    <p>${titulo}</p>
    </div>
    </div>`; //Usamos "${}" para que se agregue el dato(valor) que corresponda en cada caso.
  return poster; // Y finalmente tenemos en pantalla la imagen del poster con el título de la película. 
}
const posters = []; // aquí vamos a crear una lista para los posters
for (const pelicula of listaPeliculas) { // recorremos la lista de películas y por cada película creamos un poster
// ahora agregamos cada poster a la lista de posters
  posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // el .push agrega uno o más elementos al final de un array existente 
}

// ahora agregamos la lista de posters al div escenario
const escenario = document.getElementById('escenario'); // aquí seleccionamos el id escenario y lo guardamos en una variable
escenario.innerHTML = posters.join(''); // aquí agregamos la lista de posters al escenario

///////////////// Para que funcione el Ordenar por: ///////////////////////
//agregamos un escuchador para la lista despegable que tiene el id ordenar (el 'ordenar por')
const ordenarPor = document.getElementById('ordenar');
ordenarPor.addEventListener('change', function () { // el 'change' se pone por defecto para la lista despegable 
  //obtener el valor seleccionado
  const valor = ordenar.value; // primero escucha si es az, za, año o puntaje del html 
  const escenario = document.getElementById('escenario'); // segundo, obtiene el id 'escenario' que encuentra en el html
  escenario.innerHTML = ''; // y tercero, limpia el escenario para que se pueda actualizar el nuevo contenido dinámico.
  //y ahora ordena la lista de películas dependiendo de lo que se seleccione:
  if (valor === 'az') {
    // ordenarPeliculasAZ (listaPeliculas)

    const peliculasOrdenadasAZ = ordenarPeliculasAZ (data)
    console.log (peliculasOrdenadasAZ)
    escenario.innerHTML = ''; // y tercero, limpia el escenario para que se pueda actualizar el nuevo contenido dinámico.
    let posters = []; 
    for (const pelicula of peliculasOrdenadasAZ) { // Esta listaPeliculas ya viene ordenada según lo seleccionado en el ordenar por 
        posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // se agrega el poster a la página  
    }
    escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario
return
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
    listaPeliculas.sort(function (a, b) {
      if (a.title < b.title  ) { // el 'title' lo tomo de la data
        return 1;
      }
      if (a.title > b.title  ) {
        return -1;
      }
      return 0;
    });
  }
  else if (valor === 'año') {
    listaPeliculas.sort(function (a, b) {
      if (a.release_date > b.release_date) { // el 'release_date' lo tomo de la data
        return 1;
      }
      if (a.release_date < b.release_date) {
        return -1;
      }
      return 0;
    });
        
  }
  else if (valor === 'puntaje') {
    listaPeliculas.sort(function (a, b) {
      if (a.rt_score > b.rt_score) { // el 'rt_score' lo tomo de la data
        return 1;
      }
      if (a.rt_score < b.rt_score) {
        return -1;
      }
      return 0;
    });
    }
// Ahora se hace una nueva lista de posters ordenada segun lo indicado en el ordenar por:
    let posters = []; 
    for (const pelicula of listaPeliculas) { // Esta listaPeliculas ya viene ordenada según lo seleccionado en el ordenar por 
        posters.push(movie(pelicula.id, pelicula.title, pelicula.poster)); // se agrega el poster a la página  
    }
    escenario.innerHTML = posters.join(''); // se agrega la lista de posters al escenario
}
);

///////////////// Para que funcione el Buscar: ///////////////////////
let searchInput = document.getElementById("searchInput");
let searchButton = document.getElementById("searchButton");
let searchResult = document.getElementById("searchResult");


//funciones
searchButton.addEventListener("click", function(){
  let result = filterData(Ghibli.films, searchInput.value)

    let data = result.map(imagen => {
    return `<img class="img-normalizada" id="${imagen.id}" src="${imagen.poster}" alt="">`
    })
    searchResult.innerHTML = data;
})

function filterData(data, condition){
  let filtrado = data.filter(function(f){
    return f.title.toLowerCase().includes(condition.toLowerCase())
  })
  return filtrado;
};