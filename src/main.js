import data from './data/pokemon/pokemon.js';
import {filterData} from "./data.js"


//console.log(data);
let allPokemons = data.pokemon;
const contenedor= document.getElementById("targets")
allPokemons.forEach(pokemon => {
    const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML += `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas);
}); 

filterData(data.pokemon, "dark")


 