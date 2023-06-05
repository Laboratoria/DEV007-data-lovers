// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[7].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[7].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[7].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[7].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[7].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('shizuku'); 
personajes.src = listaPeliculas[7].people[0].img; 
personajes = document.getElementById('nombreShizuku'); 
personajes.innerHTML = listaPeliculas[7].people[0].name;
   
personajes = document.getElementById('baron'); 
personajes.src = listaPeliculas[7].people[1].img; 
personajes = document.getElementById('nombreBaron'); 
personajes.innerHTML = listaPeliculas[7].people[1].name;

personajes = document.getElementById('seiji'); 
personajes.src = listaPeliculas[7].people[2].img; 
personajes = document.getElementById('nombreSeiji'); 
personajes.innerHTML = listaPeliculas[7].people[2].name;

personajes = document.getElementById('shiro'); 
personajes.src = listaPeliculas[7].people[7].img; 
personajes = document.getElementById('nombreShiro'); 
personajes.innerHTML = listaPeliculas[7].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[7].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[7].producer;  

