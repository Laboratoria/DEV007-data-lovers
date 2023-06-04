// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[3].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[3].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[3].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[3].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[3].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('seita'); 
personajes.src = listaPeliculas[3].people[0].img; 
personajes = document.getElementById('nombreSeita'); 
personajes.innerHTML = listaPeliculas[3].people[0].name;
   
personajes = document.getElementById('setsuko'); 
personajes.src = listaPeliculas[3].people[1].img; 
personajes = document.getElementById('nombreSetsuko'); 
personajes.innerHTML = listaPeliculas[3].people[1].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[3].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[3].producer;  

