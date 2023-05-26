// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

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

var personajes = document.getElementById('ashitaka'); 
personajes.src = listaPeliculas[8].people[0].img; 
var personajes = document.getElementById('nombreAshitaka'); 
personajes.innerHTML = listaPeliculas[8].people[0].name;
   
var personajes = document.getElementById('san'); 
personajes.src = listaPeliculas[8].people[1].img; 
var personajes = document.getElementById('nombreSan'); 
personajes.innerHTML = listaPeliculas[8].people[1].name;

var personajes = document.getElementById('eboshi'); 
personajes.src = listaPeliculas[8].people[2].img; 
var personajes = document.getElementById('nombreEboshi'); 
personajes.innerHTML = listaPeliculas[8].people[2].name;

var personajes = document.getElementById('yakul'); 
personajes.src = listaPeliculas[8].people[7].img; 
var personajes = document.getElementById('nombreYakul'); 
personajes.innerHTML = listaPeliculas[8].people[7].name;

var personajes = document.getElementById('shishigami'); 
personajes.src = listaPeliculas[8].people[8].img; 
var personajes = document.getElementById('nombreShishigami'); 
personajes.innerHTML = listaPeliculas[8].people[8].name;

var personajes = document.getElementById('moro'); 
personajes.src = listaPeliculas[8].people[9].img; 
var personajes = document.getElementById('nombreMoro'); 
personajes.innerHTML = listaPeliculas[8].people[9].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[8].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[8].producer;  

