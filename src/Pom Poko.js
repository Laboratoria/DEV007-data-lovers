// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[6].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[6].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[6].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[6].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[6].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('shoukichi'); 
personajes.src = listaPeliculas[6].people[0].img; 
var personajes = document.getElementById('nombreShoukichi'); 
personajes.innerHTML = listaPeliculas[6].people[0].name;
   
var personajes = document.getElementById('okiyo'); 
personajes.src = listaPeliculas[6].people[1].img; 
var personajes = document.getElementById('nombreOkiyo'); 
personajes.innerHTML = listaPeliculas[6].people[1].name;

var personajes = document.getElementById('oroku'); 
personajes.src = listaPeliculas[6].people[3].img; 
var personajes = document.getElementById('nombreOroku'); 
personajes.innerHTML = listaPeliculas[6].people[3].name;

var personajes = document.getElementById('gonta'); 
personajes.src = listaPeliculas[6].people[4].img; 
var personajes = document.getElementById('nombreGonta'); 
personajes.innerHTML = listaPeliculas[6].people[4].name;

var personajes = document.getElementById('inugami'); 
personajes.src = listaPeliculas[6].people[5].img; 
var personajes = document.getElementById('nombreInugami'); 
personajes.innerHTML = listaPeliculas[6].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[6].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[6].producer;  

