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

export function filterByType(pokemonData, type) {
// Filtrar por tipo
  return pokemonData.filter(pokemon => pokemon.type.includes(type));
}
  
export function displayFilteredData(filteredData) {
  console.log(filteredData);
  const contenidoCard = document.querySelector(".adentro");
  contenidoCard.innerHTML = ""; // Limpiar contenido existente
  
  filteredData.forEach(pokemones => {
    contenidoCard.innerHTML += `
        <button class="mostrar">
        <div class= "card__inner">
          <div class= "card__side card__side--front"> 
            <div class="card-imag">
              <img src="${pokemones.img}" class= "imagen" alt="">
            </div>
                <div class= "card-contenido">
                 <p class="numeroPokemon" >${pokemones.num}</p>
                 <h3>${pokemones.name}</h3>
                  <div class="poder">
                   <p>tipo: ${pokemones.type}</p>
                    <div class= "generacion">
                      <p>${pokemones.generation.num} - ${pokemones.generation.name}</p>        
                    </div>
                  </div>
                </div>
          </div>
          <div class= "card__side card__side--back">
             <div class= "card__body">
               <label for="input-altura" class="label">ALTURA</label>
               <input type="texto" class="input" placeholder="${pokemones.size.height}"><br>
               <label for="input-peso" class="label">PESO</label>
               <input type="texto" class="input" placeholder="${pokemones.size.weight}">
                 <div class = "resistencia">
                   <p>${pokemones.resistant}</p>
                 </div>
              </div>
          </div>      
        </div>
        </button>`;
  });
}
