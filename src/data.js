// Aquí va toda la funcionalidad que corresponda a obtener, procesar y manipular los datos 
//- mis funciones puras e independientes del DOM.
//- Estas funciones serán después usadas desde el archivo main.js al cargar la página y cada vez que el usuario interactúe (clic, filtrado, ordenado).

export const example = () => {
  return 'example';
};

export const example2 = () => {
  return 'example2';
};

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

export function ordenarPeliculasAño (data) {
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

export function ordenarPeliculasPuntaje (data) {
  const dataCopy3 = data.films.slice()
  dataCopy3.sort(function (a, b) {
    if (a.rt_score > b.rt_score) { 
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    return 0;
  });
  return dataCopy3
}
