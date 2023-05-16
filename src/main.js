//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon);

const contenidoCard = document.querySelector(".contenidoCard");
//const informaCard = document.getElementById("informacion");


document.getElementById("pokedexBtn").onclick = function () {
  document.getElementById("homePageStart").style.display = "none";
  document.getElementById("contenido").style.display = "block";
};


data.pokemon.forEach((pokemones) => {   
  contenidoCard.innerHTML += `
  <button class= "mostrar">  
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
  </button>`;
})