// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[0].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[0].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[0].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[0].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[0].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('pazu'); 
personajes.src = listaPeliculas[0].people[0].img; 
personajes = document.getElementById('nombrePazu'); 
personajes.innerHTML = listaPeliculas[0].people[0].name;
   
personajes = document.getElementById('lusheeta'); 
personajes.src = listaPeliculas[0].people[1].img; 
personajes = document.getElementById('nombreLusheeta'); 
personajes.innerHTML = listaPeliculas[0].people[1].name;

personajes = document.getElementById('dola'); 
personajes.src = listaPeliculas[0].people[2].img; 
personajes = document.getElementById('nombreDola'); 
personajes.innerHTML = listaPeliculas[0].people[2].name;

personajes = document.getElementById('uncle'); 
personajes.src = listaPeliculas[0].people[4].img; 
personajes = document.getElementById('nombreUncle'); 
personajes.innerHTML = listaPeliculas[0].people[4].name;

personajes = document.getElementById('louis'); 
personajes.src = listaPeliculas[0].people[7].img; 
personajes = document.getElementById('nombreLouis'); 
personajes.innerHTML = listaPeliculas[0].people[7].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[0].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[0].producer;  

