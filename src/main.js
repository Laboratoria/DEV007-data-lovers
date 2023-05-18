import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//

// traer json de la carpeta src/ghibli y guardarlo en una variable
import data from './data/ghibli/ghibli.js';
console.log(data.films[0].poster);

var listaPeliculas = data.films;

//borrar el tercer elemento de la lista peliculas
//  listaPeliculas.splice(2, 0)

//ordenar los elementos de la lista peliculas por orden alfabetico
// listaPeliculas.sort(function (a, b) {
//     if (a.rt_score > b.rt_score) {
//         return 1;
//     }
//     if (a.rt_score < b.rt_score) {
//         return -1;
//     }
//     return 0;
// });


function poster(id, titulo, imagen) {
    var poster = `<div class="container">
    <img class="img-normalizada" id="${id}" src="${imagen}" alt="poster">
    <div class="overlay" onclick="window.location.href='castleInTheSky.html'">
    <p>${titulo}</p>
    </div>
    </div>`;
    return poster;
}

var posters = [];

for (const pelicula of listaPeliculas) {
    posters.push(poster(pelicula.id, pelicula.title, pelicula.poster));
}

console.log(posters.join(''));
// var poster = `<div class="container">
// <img class="img-normalizada" id="posterCastleInTheSky" src="" alt="poster">
// <div class="overlay" onclick="window.location.href='castleInTheSky.html'">
// <p>El castillo en el cielo</p>
// </div>
// </div>`;

const escenario = document.getElementById('escenario');
escenario.innerHTML = posters.join('');





//agregar un escuchador para la lista despegable que tiene el id ordenar 
const ordenar = document.getElementById('ordenar');
ordenar.addEventListener('change', function () {
    //obtener el valor seleccionado
    const valor = ordenar.value;
    console.log(valor);
    //obtener el elemento con id escenario
    const escenario = document.getElementById('escenario');
    //limpiar el escenario
    escenario.innerHTML = '';
    //ordenar la lista de peliculas
    if (valor == 'az') {
        listaPeliculas.sort(function (a, b) {
            if (a.title > b.title) {
                return 1;
            }
            if (a.title < b.title) {
                return -1;
            }
            return 0;
        });
    } else if (valor == 'za') {
        listaPeliculas.sort(function (a, b) {
            if (a.title < b.title  ) {
                return 1;
            }
            if (a.title > b.title  ) {
                return -1;
            }
            return 0;
        });
    }
    else if (valor == 'ano') {
        listaPeliculas.sort(function (a, b) {
            if (a.release_date > b.release_date) {
                return 1;
            }
            if (a.release_date < b.release_date) {
                return -1;
            }
            return 0;
        });
        
    }
    else if (valor == 'puntaje') {
        listaPeliculas.sort(function (a, b) {
            if (a.rt_score > b.rt_score) {
                return 1;
            }
            if (a.rt_score < b.rt_score) {
                return -1;
            }
            return 0;
        });
    }

    //crear una lista de posters
    var posters = [];
    for (const pelicula of listaPeliculas) {
        posters.push(poster(pelicula.id, pelicula.title, pelicula.poster));
    }
    //agregar la lista de posters al escenario
    escenario.innerHTML = posters.join('');
}
);