// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[2].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[2].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[2].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[2].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[2].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('kiki'); 
personajes.src = listaPeliculas[2].people[0].img; 
personajes = document.getElementById('nombreKiki'); 
personajes.innerHTML = listaPeliculas[2].people[0].name;
   
personajes = document.getElementById('jiji'); 
personajes.src = listaPeliculas[2].people[1].img; 
personajes = document.getElementById('nombreJiji'); 
personajes.innerHTML = listaPeliculas[2].people[1].name;

personajes = document.getElementById('tombo'); 
personajes.src = listaPeliculas[2].people[3].img; 
personajes = document.getElementById('nombreTombo'); 
personajes.innerHTML = listaPeliculas[2].people[3].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[2].director; 


