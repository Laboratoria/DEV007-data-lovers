// Aquí va todo lo que corresponda a obtener, procesar y manipular los datos 
//- mis funciones puras e independientes del DOM.
//- Estas funciones serán después usadas desde el archivo main.js al cargar la página y cada vez que el usuario interactúe (clic, filtrado, ordenado).

// export const example = () => {
//   return 'example';
// };


/////////////////////////////////////////////////////////////// ORDENAR POR

export function ordenarPeliculasAZ(data) {
  const dataCopy = data.films.slice()
  dataCopy.sort(function (a, b) { //.sort organiza los elementos del arreglo según el valor.
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return dataCopy
}

export function ordenarPeliculasZA(data) {
  const dataCopy1 = data.films.slice()
  dataCopy1.sort(function (a, b) {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  });
  return dataCopy1
}

export function ordenarPeliculasAño(data) {
  const dataCopy2 = data.films.slice()
  dataCopy2.sort(function (a, b) {
    if (a.release_date > b.release_date) {
      return 1;
    }
    if (a.release_date < b.release_date) {
      return -1;
    }
    return 0;
  });
  return dataCopy2
}

export function ordenarPeliculasPuntaje(data) {
  const dataCopy3 = data.films.slice()
  dataCopy3.sort(function (a, b) {
    if (Number(a.rt_score) < Number(b.rt_score)) {
      return 1;
    }
    if (Number(a.rt_score) > Number(b.rt_score)) {
      return -1;
    }
    return 0;
  });
  return dataCopy3
}

/////////////////////////////////////////////////////////////// CÁLCULO
export function calcularPeliculas(data) {
  const peliculas = data.films;
  let suma = 0;
  for (let i = 0; i < peliculas.length; i++) {
    suma = Number(peliculas[i].rt_score) + suma;
  }
  const promedio = suma / peliculas.length;
  return promedio;
}
