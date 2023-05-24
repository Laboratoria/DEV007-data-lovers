//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//import {ordenarPokemones} from './data.js';

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

document.getElementById("pokedexResumePageBtn").onclick = function () {    //funcion del boton pokedex en la resumePage
  document.getElementById("resumePageStart").style.display = "none";
  document.getElementById("listaPokemon").style.display = "flex";
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
})
//}

//crearTarjetas(pokemon)

//const selectElement = document.getElementById("select-ordenar");
//const menuOrdenador = document.getElementById("ordenador");

//selectElement.addEventListener("change", function() {
//const selectedOption = selectElement.value;
  
//ordenarPokemones(selectedOption);

//menuOrdenador.innerHTML = "";

//data.pokemon.forEach(function(pokemon) {  
//const pokemonName= document.createElement("p");
//pokemonName.textContent = pokemon.name;
//menuOrdenador.appendChild(pokemonName);
//})
//})