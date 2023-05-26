//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
import {ordenarPokemones} from './data.js';

//console.log(data.pokemon);
//const pokemon= data.pokemon;
const contenidoCard = document.querySelector(".adentro");



document.getElementById("pokedexBtn").onclick = function () {      //funcion del botón pokedex//
  document.getElementById("homePageStart").style.display = "none";
  document.getElementById("listaPokemon").style.display = "flex";
};

document.getElementById("resumeBtn").onclick = function () {      //funcion del botón pokeresumen//
  document.getElementById("homePageStart").style.display = "none";
  document.getElementById("resumePageStart").style.display = "block";
};

document.getElementById("pokedexResumePageBtn").onclick = function () {    //funcion del boton pokedex en la resumePage//
  document.getElementById("resumePageStart").style.display = "none";
  document.getElementById("listaPokemon").style.display = "flex";
};


document.getElementById("pokedexHomePageBtn").onclick = function () {    //funcion del boton Inicio en la pokedex//
  document.getElementById("listaPokemon").style.display = "none";
  document.getElementById("homePageStart").style.display = "flex";
};
//function crearTarjetas(data) {
data.pokemon.forEach((pokemones) => {   
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
})
//}//

//crearTarjetas(pokemon)



// Obtener el elemento select del usuario
const selectElement = document.getElementById("select-ordenar");
const pokemonContainer = document.getElementById("ordenador");
// Escuchar el evento change del select
selectElement.addEventListener("change", function() {
  const selectedOption = selectElement.value;
  //console.log(selectedOption);// 
  console.log(ordenarPokemones(selectedOption));
  pokemonContainer.innerHTML = "";
  //data.pokemon.forEach(function(pokemon) {
    
    //pokemonName.textContent = pokemon.name;
    //pokemonContainer.appendChild(pokemonName);
  //});
});
