// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[5].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[5].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[5].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[5].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[5].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('porco'); 
personajes.src = listaPeliculas[5].people[0].img; 
personajes = document.getElementById('nombrePorco'); 
personajes.innerHTML = listaPeliculas[5].people[0].name;
   
personajes = document.getElementById('donald'); 
personajes.src = listaPeliculas[5].people[1].img; 
personajes = document.getElementById('nombreDonald'); 
personajes.innerHTML = listaPeliculas[5].people[1].name;

personajes = document.getElementById('fio'); 
personajes.src = listaPeliculas[5].people[2].img; 
personajes = document.getElementById('nombreFio'); 
personajes.innerHTML = listaPeliculas[5].people[2].name;

personajes = document.getElementById('gina'); 
personajes.src = listaPeliculas[5].people[3].img; 
personajes = document.getElementById('nombreGina'); 
personajes.innerHTML = listaPeliculas[5].people[3].name;

personajes = document.getElementById('capo'); 
personajes.src = listaPeliculas[5].people[5].img; 
personajes = document.getElementById('nombreCapo'); 
personajes.innerHTML = listaPeliculas[5].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[5].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[5].producer;  

