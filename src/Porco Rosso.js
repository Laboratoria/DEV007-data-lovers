// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

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

var personajes = document.getElementById('porco'); 
personajes.src = listaPeliculas[5].people[0].img; 
var personajes = document.getElementById('nombrePorco'); 
personajes.innerHTML = listaPeliculas[5].people[0].name;
   
var personajes = document.getElementById('donald'); 
personajes.src = listaPeliculas[5].people[1].img; 
var personajes = document.getElementById('nombreDonald'); 
personajes.innerHTML = listaPeliculas[5].people[1].name;

var personajes = document.getElementById('fio'); 
personajes.src = listaPeliculas[5].people[2].img; 
var personajes = document.getElementById('nombreFio'); 
personajes.innerHTML = listaPeliculas[5].people[2].name;

var personajes = document.getElementById('gina'); 
personajes.src = listaPeliculas[5].people[3].img; 
var personajes = document.getElementById('nombreGina'); 
personajes.innerHTML = listaPeliculas[5].people[3].name;

var personajes = document.getElementById('capo'); 
personajes.src = listaPeliculas[5].people[5].img; 
var personajes = document.getElementById('nombreCapo'); 
personajes.innerHTML = listaPeliculas[5].people[5].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[5].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[5].producer;  

