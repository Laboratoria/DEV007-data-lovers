// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
const listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[18].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[18].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[18].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[18].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[18].rt_score; 

/////////////////////////////////////////// PERSONAJES

let personajes = document.getElementById('kaguya'); 
personajes.src = listaPeliculas[18].people[0].img; 
personajes = document.getElementById('nombreKaguya'); 
personajes.innerHTML = listaPeliculas[18].people[0].name;
   
personajes = document.getElementById('sutemaru'); 
personajes.src = listaPeliculas[18].people[1].img; 
personajes = document.getElementById('nombreSutemaru'); 
personajes.innerHTML = listaPeliculas[18].people[1].name;

personajes = document.getElementById('miyatsuko'); 
personajes.src = listaPeliculas[18].people[3].img; 
personajes = document.getElementById('nombreMiyatsuko'); 
personajes.innerHTML = listaPeliculas[18].people[3].name;

personajes = document.getElementById('menowarawa'); 
personajes.src = listaPeliculas[18].people[4].img; 
personajes = document.getElementById('nombreMenowarawa'); 
personajes.innerHTML = listaPeliculas[18].people[4].name;

personajes = document.getElementById('lady'); 
personajes.src = listaPeliculas[18].people[5].img; 
personajes = document.getElementById('nombreLady'); 
personajes.innerHTML = listaPeliculas[18].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

const director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[18].director; 

const producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[18].producer;  

