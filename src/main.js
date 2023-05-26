// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

// console.log(example, data);

import data from './data/pokemon/pokemon.js';
import {filterDataByType} from "./data.js"

//console.log(data);
let allPokemons =data.pokemon;
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

// const generation1= allPokemons.filter( (pokemon)=> pokemon.generation.name === "kanto");
// console.log(generation1);


 const pokemonesNormal =filterDataByType(allPokemons,"normal") 
 const btnNormal=document.getElementById("normal") 

 const pokemonesFire =filterDataByType(allPokemons,"fire") 
 const btnFire =document.getElementById("fire") 

const pokemonesWater =filterDataByType(allPokemons,"water");
const btnWater =document.getElementById("water");

const pokemonesGrass =filterDataByType(allPokemons,"grass") 
const btnGrass =document.getElementById("grass") 

const pokemonesElectric =filterDataByType(allPokemons,"electric") 
const btnElectric =document.getElementById("electric") 

const pokemonesIce =filterDataByType(allPokemons,"ice") 
const btnIce =document.getElementById("ice") 

const pokemonesFighting =filterDataByType(allPokemons,"fighting") 
const btnFighting =document.getElementById("fighting") 

const pokemonesPoison =filterDataByType(allPokemons,"poison") 
const btnPoison =document.getElementById("poison") 

const pokemonesGround =filterDataByType(allPokemons,"ground") 
const btnGround =document.getElementById("ground") 

const pokemonesFlying =filterDataByType(allPokemons,"flying") 
const btnFlying =document.getElementById("flying") 

const pokemonesPsychic =filterDataByType(allPokemons,"psychic") 
const btnPsychic =document.getElementById("psychic") 

const pokemonesBug =filterDataByType(allPokemons,"bug") 
const btnBug =document.getElementById("bug") 

const pokemonesRock =filterDataByType(allPokemons,"rock") 
const btnRock =document.getElementById("rock") 

const pokemonesGhost =filterDataByType(allPokemons,"ghost") 
const btnGhost =document.getElementById("ghost") 

const pokemonesDark =filterDataByType(allPokemons,"dark") 
const btnDark =document.getElementById("dark") 

const pokemonesDragon =filterDataByType(allPokemons,"dragon") 
const btnDragon=document.getElementById("dragon") 

const pokemonesSteel =filterDataByType(allPokemons,"steel") 
const btnSteel=document.getElementById("steel") 

const pokemonesFairy =filterDataByType(allPokemons,"fairy") 
const btnFairy=document.getElementById("fairy") 


btnNormal.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   
    
    pokemonesNormal.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})


btnFire.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   
    
    pokemonesFire.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})

btnWater.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   

    pokemonesWater.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})


btnGrass.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   

    pokemonesGrass.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})

btnElectric.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   

    pokemonesElectric.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})

btnIce.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   

    pokemonesIce.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})

btnFighting.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ;   

    pokemonesFighting.forEach(pokemon=>{
        console.log(pokemon);
        const tarjetas=document.createElement("div")
        tarjetas.classList.add("tarjetaPokemon")
        tarjetas.innerHTML = `
        <h1>${pokemon.num}</h1>
        <img src="${pokemon.img}">
        <h1>${pokemon.name}</h1>
        <h1>${pokemon.type}</h1>
        `     
        contenedor.appendChild(tarjetas); 
    })
})



btnPoison.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesPoison.forEach(pokemon=>{
    console.log(pokemon);
    const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnGround.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesGround.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnFlying.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesFlying.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnFlying.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesFlying.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnPsychic.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesPsychic.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnBug.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesBug.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnRock.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesRock.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                          
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnGhost.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesGhost.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnDark.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesDark.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnDark.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesDark.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})


btnDragon.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesDragon.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnSteel.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesSteel.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})

btnFairy.addEventListener("click",function (e) {  
    e.preventDefault();
    // e.stopPropagation();
    contenedor.innerHTML='' ; 

pokemonesFairy.forEach(pokemon=>{
console.log(pokemon);

const tarjetas=document.createElement("div")
    tarjetas.classList.add("tarjetaPokemon")
    tarjetas.innerHTML = `
    <h1>${pokemon.num}</h1>
    <img src="${pokemon.img}">
    <h1>${pokemon.name}</h1>                           
    <h1>${pokemon.type}</h1>
    `     
    contenedor.appendChild(tarjetas); 
})
})


// contenedor.innerHTML =  filterData(data.pokemon, "water") 

// contenedor.innerHTML=""
// const btnWater =document.getElementById("water")
// btnWater.addEventListener("click",function () {  
// contenedor.innerHTML =  filterData(data.pokemon, "water") 
//    })



// //  contenedor.innerHTML =  filterData(data.pokemon, "water")
//  })
 
//  contenedor.innerHTML=""



//
// filterData(data.pokemon, "water"))
// console.log(btnWater)
//filterData(data.pokemon, "water")



 