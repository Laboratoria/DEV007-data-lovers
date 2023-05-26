// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[13].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[13].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[13].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[13].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[13].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('ged'); 
personajes.src = listaPeliculas[13].people[0].img; 
var personajes = document.getElementById('nombreGed'); 
personajes.innerHTML = listaPeliculas[13].people[0].name;
   
var personajes = document.getElementById('arren'); 
personajes.src = listaPeliculas[13].people[1].img; 
var personajes = document.getElementById('nombreArren'); 
personajes.innerHTML = listaPeliculas[13].people[1].name;

var personajes = document.getElementById('therru'); 
personajes.src = listaPeliculas[13].people[2].img; 
var personajes = document.getElementById('nombreTherru'); 
personajes.innerHTML = listaPeliculas[13].people[2].name;

var personajes = document.getElementById('cob'); 
personajes.src = listaPeliculas[13].people[5].img; 
var personajes = document.getElementById('nombreCob'); 
personajes.innerHTML = listaPeliculas[13].people[5].name;



/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[13].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[13].producer;  

