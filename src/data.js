// estas funciones son de ejemplo

import data from "./data/pokemon/pokemon.js";
//export const example = () => {
//return 'example';
//};


//Función para ordenar el array de objetos de pokémon
export function ordenarPokemones(order) {  
  if (order === "asc") { // ascendente
    return data.pokemon.sort((a, b) => a.name.localeCompare(b.name))
  } else if (order === "desc") { // descendente
    return data.pokemon.sort((a, b) => -1 * a.name.localeCompare(b.name))
      
  }
}

  
  

