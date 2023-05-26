// traemos la data y la guardamos en una variable
import data from './data/ghibli/ghibli.js';
var listaPeliculas = data.films;

/////////////////////////////////////////// TITULO

const titulo = document.getElementById('tituloPelicula'); // capturamos el id del titulo de la película y lo guardamos en una variable
titulo.innerHTML = listaPeliculas[9].title; // aquí llamamos el elemento que necesitamos

/////////////////////////////////////////// POSTER

const poster = document.getElementById('posterCastleInTheSky'); 
poster.src = listaPeliculas[9].poster; 

/////////////////////////////////////////// DESCRIPCION

const descripcion = document.getElementById('descripcion'); 
descripcion.innerHTML = listaPeliculas[9].description; 

/////////////////////////////////////////// FECHA 

const fechaDeLanzamiento = document.getElementById('fechaDeLanzamiento'); 
fechaDeLanzamiento.innerHTML = listaPeliculas[9].release_date; 

/////////////////////////////////////////// PUNTAJE

const puntaje = document.getElementById('score'); 
puntaje.innerHTML = listaPeliculas[9].rt_score; 

/////////////////////////////////////////// PERSONAJES

var personajes = document.getElementById('takashi'); 
personajes.src = listaPeliculas[9].people[0].img; 
var personajes = document.getElementById('nombreTakashi'); 
personajes.innerHTML = listaPeliculas[9].people[0].name;
   
var personajes = document.getElementById('matsuko'); 
personajes.src = listaPeliculas[9].people[1].img; 
var personajes = document.getElementById('nombreMatsuko'); 
personajes.innerHTML = listaPeliculas[9].people[1].name;

var personajes = document.getElementById('noboru'); 
personajes.src = listaPeliculas[9].people[2].img; 
var personajes = document.getElementById('nombreNoboru'); 
personajes.innerHTML = listaPeliculas[9].people[2].name;

var personajes = document.getElementById('nonoko'); 
personajes.src = listaPeliculas[9].people[3].img; 
var personajes = document.getElementById('nombreNonoko'); 
personajes.innerHTML = listaPeliculas[9].people[3].name;

var personajes = document.getElementById('shige'); 
personajes.src = listaPeliculas[9].people[4].img; 
var personajes = document.getElementById('nombreShige'); 
personajes.innerHTML = listaPeliculas[9].people[4].name;

/////////////////////////////////////////// DIRECTOR Y PRODUCTORES

let director = document.getElementById('director'); 
director.innerHTML = listaPeliculas[9].director; 

let producer = document.getElementById('producer'); 
producer.innerHTML = listaPeliculas[9].producer;  

