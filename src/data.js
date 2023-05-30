// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
export function ordenarPeliculasAZ (data){
  const dataCopy = data.films.slice()
  dataCopy.sort(function (a, b) { //.sort organiza los elementos del arreglo según el valor.
    if (a.title > b.title) { // el 'title' lo tomo de la data
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return dataCopy
  }

console.log (anotherExample ())