// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[8].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[8].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[8].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[8].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[8].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('ashitaka'); 
personajes.src = listaPeliculas[8].people[0].img; 
personajes = document.getElementById('nombreAshitaka'); 
personajes.innerHTML = listaPeliculas[8].people[0].name;
   
personajes = document.getElementById('san'); 
personajes.src = listaPeliculas[8].people[1].img; 
personajes = document.getElementById('nombreSan'); 
personajes.innerHTML = listaPeliculas[8].people[1].name;

personajes = document.getElementById('eboshi'); 
personajes.src = listaPeliculas[8].people[2].img; 
personajes = document.getElementById('nombreEboshi'); 
personajes.innerHTML = listaPeliculas[8].people[2].name;

personajes = document.getElementById('yakul'); 
personajes.src = listaPeliculas[8].people[7].img; 
personajes = document.getElementById('nombreYakul'); 
personajes.innerHTML = listaPeliculas[8].people[7].name;

personajes = document.getElementById('shishigami'); 
personajes.src = listaPeliculas[8].people[8].img; 
personajes = document.getElementById('nombreShishigami'); 
personajes.innerHTML = listaPeliculas[8].people[8].name;

personajes = document.getElementById('moro'); 
personajes.src = listaPeliculas[8].people[9].img; 
personajes = document.getElementById('nombreMoro'); 
personajes.innerHTML = listaPeliculas[8].people[9].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[8].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[8].producer;  

