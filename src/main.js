//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.pokemon);

const contenidoCard = document.querySelector(".contenidoCard");
//const informaCard = document.getElementById("info");
const showCard = document.querySelectorAll("#showCard");


data.pokemon.forEach((i,idx) => {
  contenidoCard.innerHTML += `
    <button class= "todo" id="${showCard}">
    <div class= "card-contenido">
    <p class="numeroPokemon" >${i.num}</p>
    <h3>${i.name}</h3>
    <div class="power">
    ${i.type}
    </div>
    </div>
    <div class="card-img">
    <img src="${i.img}" class= "imagen" alt="">
    </div>
    </button>`;
})