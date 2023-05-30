
import data from "./data/pokemon/pokemon.js";

//Función para ordenar el array de objetos de pokémon
export function ordenarPokemones(order) {  
  if (order === "asc") { // ascendente
    return data.pokemon.sort((a, b) => a.name.localeCompare(b.name))
  } else if (order === "desc") { // descendente
    return data.pokemon.sort((a, b) => -1 * a.name.localeCompare(b.name))    
  }
}


//Función para filtrar pokémon por tipo
export function filterByType(pokemonData, type) {
  return pokemonData.filter(pokemon => pokemon.type.includes(type));
}
  
export function displayFilteredData(filteredData) {
  const contenidoCard = document.querySelector(".adentro");
  contenidoCard.innerHTML = ""; // Limpiar contenido existente
  
  filteredData.forEach(pokemones => {
    contenidoCard.innerHTML += `
    <button class= "mostrar">  
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
             <p class= "height">ALTURA: ${pokemones.size.height}</p>             
             <p class= "weight">PESO: ${pokemones.size.weight}</p>
               <div class = "resistencia">
                 <p>RESISTENCIA:</p>
                 <p class= "parrafo">${pokemones.resistant[0]} , ${pokemones.resistant[1]}</p>
                 <p class= "parrafo">${pokemones.resistant[2]} , ${pokemones.resistant[3]}</p>
                 <p class= "parrafo">${pokemones.resistant[4]}</p>
               </div>
            </div>
        </div>      
    </div>
  </button>`;
  });
}

export function findByName(pokemonData, name){
    return pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
}

