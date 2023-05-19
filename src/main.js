import data from './data/pokemon/pokemon.js';
//console.log(data);
let allPokemons = data.pokemon;
const contenedor= document.getElementById("container")
allPokemons.forEach(pokemon => {
    const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    
    tarjetas.innerHTML += `
    <h1>${pokemon.name}</h1>
   
    <img src="${pokemon.img}">
    `     

    console.log(pokemon)
    contenedor.appendChild(tarjetas);
}); 

    


 